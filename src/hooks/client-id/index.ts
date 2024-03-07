import { type ID } from '@project/types';

import { useDefinedParam } from '../defined-param';

export const useClientId = () => useDefinedParam<ID.Client>('clientId');
