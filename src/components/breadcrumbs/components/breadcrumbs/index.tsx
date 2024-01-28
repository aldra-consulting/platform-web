import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

export interface Props extends HTMLAttributes<HTMLElement> {}

export default component$<Props>(({ ...props }) => {
  useStylesScoped$(styles);

  return (
    <nav {...props}>
      <ol>
        <Slot />
      </ol>
    </nav>
  );
});
