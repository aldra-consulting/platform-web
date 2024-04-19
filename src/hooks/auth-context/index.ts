import { useContext } from '@builder.io/qwik';

import { AuthContext } from '@project/context';

export const useAuthContext = () => useContext(AuthContext);
