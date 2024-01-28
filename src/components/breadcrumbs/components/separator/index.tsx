import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

export interface Props extends HTMLAttributes<HTMLSpanElement> {}

export default component$<Props>(({ ...props }) => {
  useStylesScoped$(styles);

  return (
    <span {...props}>
      <Slot />
    </span>
  );
});
