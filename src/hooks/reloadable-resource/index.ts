import {
  useSignal,
  useResource$,
  type QRL,
  type ValueOrPromise,
} from '@builder.io/qwik';

import { useReloadable } from '../reloadable';

export const useReloadableResource = <T>(
  reloadable: QRL<() => ValueOrPromise<T>>
) => {
  const { cue, reload } = useReloadable();

  const isLoading = useSignal<boolean>(false);

  const resource = useResource$<T>(async ({ track, cleanup }) => {
    track(() => cue.value);

    const controller = new AbortController();

    cleanup(() => controller.abort());

    try {
      isLoading.value = true;

      return await reloadable();
    } finally {
      isLoading.value = false;
    }
  });

  return {
    resource,
    isLoading,
    reload,
  } as const;
};
