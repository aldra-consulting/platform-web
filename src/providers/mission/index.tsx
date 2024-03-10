import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import { MissionContext, type MissionStore as Store } from '@project/context';
import { MissionEntityService } from '@project/services';
import { type Entity } from '@project/types';

export interface Props {
  mission: Entity.Mission;
}

const service = new MissionEntityService();

export default component$<Props>(({ mission }) => {
  const store = useStore<Store>({
    mission,
    isActive: mission.status === 'active',
    toggleBookmark: $(async function run(this: Store) {
      try {
        this.mission.bookmark =
          (await service.toggleBookmark(this.mission.id)) ?? undefined;
      } catch (error) {
        // TODO: handle errors
      }
    }),
  });

  useContextProvider(MissionContext, store);

  return <Slot />;
});
