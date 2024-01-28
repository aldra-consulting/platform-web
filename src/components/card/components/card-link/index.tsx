import { Slot, component$, useStylesScoped$, useId } from '@builder.io/qwik';

import styles from './styles.css?inline';

export interface Props {
  to: string;
}

export default component$<Props>(({ to }) => {
  useStylesScoped$(styles);

  const id = useId();

  return (
    <a href={to} aria-labelledby={id}>
      <span id={id}>
        <Slot />
      </span>
    </a>
  );
});
