import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {
  color?: 'neutral' | 'blue' | 'red' | 'yellow' | 'green';
}

export default component$<Props>(({ color = 'neutral', ...props }) => {
  useStylesScoped$(styles);

  return <span {...props} data-root data-color={color} />;
});
