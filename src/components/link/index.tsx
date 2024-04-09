import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, type LinkProps } from '@builder.io/qwik-city';

import styles from './styles.css?inline';

export interface Props extends LinkProps {
  color?: 'neutral' | 'blue' | 'red' | 'yellow' | 'green' | 'inherit';
  variant?: 'plain' | 'underlined';
}

export default component$<Props>(
  ({ color = 'inherit', variant = 'underlined', ...props }) => {
    const { scopeId } = useStylesScoped$(styles);

    return (
      <Link
        {...props}
        class={[scopeId, props.class]}
        data-root
        data-color={color}
        data-variant={variant}
      >
        <Slot />
      </Link>
    );
  }
);
