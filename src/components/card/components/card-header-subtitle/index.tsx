import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <Slot />
    </div>
  );
});
