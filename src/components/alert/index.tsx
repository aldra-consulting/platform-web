import {
  type HTMLAttributes,
  Slot,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';

import InfoIcon from '../info-icon';

import styles from './styles.css?inline';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  severity: 'success' | 'info' | 'warning' | 'error';
  compact?: boolean;
}

export default component$<Props>(({ severity, compact, ...props }) => {
  useStylesScoped$(styles);

  return (
    <div {...props} data-root data-severity={severity} data-compact={compact}>
      {severity === 'info' ? (
        <i>
          <InfoIcon height={24} />
        </i>
      ) : null}
      <Slot />
    </div>
  );
});
