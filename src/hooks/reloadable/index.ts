import { $, useSignal } from '@builder.io/qwik';

export const useReloadable = () => {
  const cue = useSignal<number>(Date.now());

  const reload = $(() => {
    cue.value = Date.now();
  });

  return {
    cue,
    reload,
  } as const;
};
