import {
  $,
  type QRL,
  useStore,
  useVisibleTask$,
  useComputed$,
} from '@builder.io/qwik';

import { type Entity } from '@project/types';
import { auth } from '@project/utils/auth';

import { UserConverter } from './utils';

// TODO: refactor
export const useAuthenticatedUser = (onMissingUser?: QRL<() => void>) => {
  const store = useStore<{
    user?: Entity.User;
    isLoading?: boolean;
  }>({});

  const isAuthenticated = useComputed$(
    () => store.isLoading === false && store.user?.id
  );

  useVisibleTask$(() =>
    auth()
      .getUser()
      .catch(auth().signInSilent)
      .catch(() => {
        onMissingUser?.().catch(() => {});

        return null;
      })
      .then((user) => {
        if (user) {
          store.user = new UserConverter().convert(user);
        }
      })
      .finally(() => {
        store.isLoading = false;
      })
  );

  const signOut = $(() =>
    auth()
      .signOut()
      .catch(() => {})
      .finally(() => {
        store.user = undefined;
        store.isLoading = undefined;
      })
  );

  return {
    store,
    isAuthenticated,
    signOut,
  } as const;
};
