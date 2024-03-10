import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import { RoleContext, type RoleStore } from '@project/context';
import { useMissionContext } from '@project/hooks';
import { RoleService } from '@project/services';
import { type Entity } from '@project/types';

export interface Props {
  role: Entity.Role;
}

const service = new RoleService();

export default component$<Props>(({ role }) => {
  const navigate = useNavigate();

  const { mission } = useMissionContext();

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
          await navigate(`/missions/${mission.id}/roles/${this.role.id}/apply`);
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
