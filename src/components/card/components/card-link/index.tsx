import { Slot, component$, useStylesScoped$, useId } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import styles from './styles.css?inline';

export interface Props {
  to: string;
}

export default component$<Props>(({ to }) => {
  const { scopeId } = useStylesScoped$(styles);

  const id = useId();

  return (
    <Link href={to} aria-labelledby={id} class={scopeId}>
      <span id={id}>
        <Slot />
      </span>
    </Link>
  );
});
