import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium';
  color?: 'neutral' | 'blue' | 'red' | 'yellow' | 'green';
}

export default component$<Props>(
  ({ variant = 'contained', size = 'medium', color = 'neutral', ...props }) => {
    useStylesScoped$(styles);

    return (
      <div
        {...props}
        data-root
        data-variant={variant}
        data-size={size}
        data-color={color}
      >
        <Slot />
      </div>
    );
  }
);
