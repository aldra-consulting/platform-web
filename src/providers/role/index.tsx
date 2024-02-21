import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
  useContext,
} from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import {
  AssignmentContext,
  RoleContext,
  type RoleStore,
} from '@project/context';
import { RoleService } from '@project/services';
import { type Entity } from '@project/types';

export interface Props {
  role: Entity.Role;
}

const service = new RoleService();

export default component$<Props>(({ role }) => {
  const navigate = useNavigate();

  const { assignment } = useContext(AssignmentContext);

  useContextProvider(
    RoleContext,
    useStore<RoleStore>({
      role,
      apply: $(async function run(this: RoleStore) {
        try {
          await service.apply(this.role.id);
        } catch (error) {
          // TODO: handle errors
        } finally {
          await navigate(
            `/assignments/${assignment.id}/roles/${this.role.id}/apply`
          );
        }
      }),
      withdraw: $(async function run(this: RoleStore) {
        try {
          await service.withdraw(this.role.id);
        } catch (error) {
          // TODO: handle errors
        }
      }),
    })
  );

  return <Slot />;
});
