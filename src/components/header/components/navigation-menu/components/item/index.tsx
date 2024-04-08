import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {
  active?: boolean;
}

export default component$<Props>(({ active }) => {
  useStylesScoped$(styles);

  return (
    <span data-root data-active={active}>
      <Slot />
    </span>
  );
});
