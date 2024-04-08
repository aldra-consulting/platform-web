import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';

import NavigationMenu from './components/navigation-menu';
import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {}

export default component$<Props>(({ ...props }) => {
  useStylesScoped$(styles);

  return (
    <header {...props}>
      <div data-slot='logo'>
        <Slot name='logo' />
      </div>
      <div data-slot='navigation-menu'>
        <NavigationMenu />
      </div>
      <div data-slot='avatar'>
        <Slot name='avatar' />
      </div>
    </header>
  );
});
