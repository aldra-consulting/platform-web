import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <section data-root>
      <Slot name='title' />
      <Slot name='body' />
    </section>
  );
});
