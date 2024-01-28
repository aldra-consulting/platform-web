import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section>
      <Slot name='header' />
      <Slot name='body' />
      <Slot name='actions' />
      <Slot name='link' />
    </section>
  );
});
