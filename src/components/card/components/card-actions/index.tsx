import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './styles.css?inline';

export interface Props {
  alignment?: 'left' | 'center' | 'right';
}

export default component$<Props>(({ alignment = 'left' }) => {
  useStylesScoped$(styles);

  return (
    <div data-alignment={alignment}>
      <Slot />
    </div>
  );
});
