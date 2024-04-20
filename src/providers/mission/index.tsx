import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import { MissionContext, type MissionStore as Store } from '@project/context';
import { type Entity } from '@project/types';
import { service } from '@project/utils';

export interface Props {
  mission: Entity.Mission;
}

export default component$<Props>(({ mission }) => {
  const store = useStore<Store>({
    mission,
    isActive: mission.status === 'active',
    toggleBookmark: $(async function run(this: Store) {
      try {
        this.mission.isBookmarked =
          (await service()
            .entity()
            .mission()
            .toggleBookmark(this.mission.id)) ?? undefined;
      } catch (error) {
        // TODO: handle errors
      }
    }),
  });

  useContextProvider(MissionContext, store);

  return <Slot />;
});
