import { useContext } from '@builder.io/qwik';

import { MissionBookmarksContext } from '@project/context';

export const useMissionBookmarksContext = () =>
  useContext(MissionBookmarksContext);
