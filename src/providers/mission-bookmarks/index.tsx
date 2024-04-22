import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import {
  MissionBookmarksContext,
  type MissionBookmarksStore as Store,
} from '@project/context';
import { type Entity } from '@project/types';

export default component$(() => {
  const store = useStore<Store>({
    missions: [],
    addAll: $(function run(this: Store, missions: Entity.Mission[]) {
      this.missions = missions;
    }),
  });

  useContextProvider(MissionBookmarksContext, store);

  return <Slot />;
});
