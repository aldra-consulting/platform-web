import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import { RoleContext, type RoleStore } from '@project/context';
import { RoleService } from '@project/services';
import { type Entity } from '@project/types';

export interface Props {
  role: Entity.Role;
}

const service = new RoleService();

export default component$<Props>(({ role }) => {
  useContextProvider(
    RoleContext,
    useStore<RoleStore>({
      role,
      apply: $(async function run(this: RoleStore) {
        try {
          await service.apply(this.role.id);
        } catch (error) {
          // TODO: handle errors
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
