import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, type LinkProps } from '@builder.io/qwik-city';

import styles from './styles.css?inline';

export interface Props extends LinkProps {
  color?: 'neutral' | 'blue' | 'red' | 'yellow' | 'green' | 'inherit';
}

export default component$<Props>(({ color = 'inherit', ...props }) => {
  useStylesScoped$(styles);

  return (
    <Link {...props}>
      <span data-slot='content' data-color={color}>
        <span data-slot='underlined'>
          <Slot />
        </span>
      </span>
    </Link>
  );
});
