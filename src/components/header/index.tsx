import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {}

export default component$<Props>(({ ...props }) => {
  useStylesScoped$(styles);

  return (
    <header {...props}>
      <div data-slot='logo'>
        <Slot name='logo' />
        <p>Plattform</p>
      </div>
      <div data-slot='avatar'>
        <Slot name='avatar' />
      </div>
    </header>
  );
});
