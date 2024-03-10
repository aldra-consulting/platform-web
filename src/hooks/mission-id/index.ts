import { type ID } from '@project/types';

import { useDefinedParam } from '../defined-param';

export const useMissionId = () => useDefinedParam<ID.Mission>('missionId');
