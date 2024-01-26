import { $, component$, Slot } from '@builder.io/qwik';

import { useAuthenticatedUser } from '@project/hooks';
import { auth } from '@project/utils/auth';

export default component$(() => {
  const signIn = $(() => auth().signIn());

  const { isAuthenticated } = useAuthenticatedUser(signIn);

  return isAuthenticated.value ? <Slot /> : null;
});
