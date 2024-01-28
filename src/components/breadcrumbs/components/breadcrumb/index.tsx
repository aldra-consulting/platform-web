import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

export default component$<Props>(({ active, ...props }) => {
  useStylesScoped$(styles);

  return (
    <span data-active={String(Boolean(active))} {...props}>
      <Slot />
    </span>
  );
});
