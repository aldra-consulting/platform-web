import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './styles.css?inline';

export interface Props {
  width?: number;
}

export default component$<Props>(({ width }) => {
  useStylesScoped$(styles);

  return (
    <span
      data-root
      style={{
        '--width': `${width}px`,
      }}
    >
      &zwnj;
    </span>
  );
});
