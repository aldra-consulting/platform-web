import { useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const useIsFirstRender = () => {
  const flag = useSignal(true);

  useVisibleTask$(({ cleanup }) => {
    flag.value = false;

    cleanup(() => {
      flag.value = true;
    });
  });

  return flag;
};
