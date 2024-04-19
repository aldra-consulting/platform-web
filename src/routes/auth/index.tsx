import { $, component$, useOnWindow } from '@builder.io/qwik';

import { service } from '@project/utils';

export default component$(() => {
  useOnWindow(
    'load',
    $(() =>
      service()
        .auth()
        .completeSignIn()
        .finally(() => {
          window.location.replace('/');
        })
    )
  );

  return <span hidden />;
});
