import { useContext } from '@builder.io/qwik';

import { ClientContext } from '@project/context';

export const useClientContext = () => useContext(ClientContext);
