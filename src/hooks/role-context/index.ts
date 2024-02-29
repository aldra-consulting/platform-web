import { useContext } from '@builder.io/qwik';

import { RoleContext } from '@project/context';

export const useRoleContext = () => useContext(RoleContext);
