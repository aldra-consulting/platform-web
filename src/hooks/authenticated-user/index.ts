import {
  type QRL,
  useStore,
  useVisibleTask$,
  useComputed$,
} from '@builder.io/qwik';

import { auth } from '@project/utils/auth';

export const useAuthenticatedUser = (onMissingUser?: QRL<() => void>) => {
  const user = useStore<{ name?: string; isLoading?: boolean }>({});

  const isAuthenticated = useComputed$(
    () => user.isLoading === false && user.name
  );

  useVisibleTask$(() =>
    auth()
      .getUser()
      .catch(auth().signInSilent)
      .catch(() => {
        onMissingUser?.().catch(() => {});

        return null;
      })
      .then((loggedInUser) => {
        user.name = loggedInUser?.profile.name;
      })
      .finally(() => {
        user.isLoading = false;
      })
  );

  return {
    user,
    isAuthenticated,
  } as const;
};
