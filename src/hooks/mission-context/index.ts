import { useContext } from '@builder.io/qwik';

import { MissionContext } from '@project/context';

export const useMissionContext = () => useContext(MissionContext);
