import {
  type HTMLAttributes,
  Slot,
  component$,
  useStylesScoped$,
  useComputed$,
} from '@builder.io/qwik';

import ErrorIcon from '../error-icon';
import InfoIcon from '../info-icon';
import SuccessIcon from '../success-icon';
import WarningIcon from '../warning-icon';

import styles from './styles.css?inline';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  severity: 'success' | 'info' | 'warning' | 'error';
  compact?: boolean;
}

export default component$<Props>(({ severity, compact, ...props }) => {
  useStylesScoped$(styles);

  const icon = useComputed$(() => {
    switch (severity) {
      case 'info':
        return <InfoIcon height={24} />;
      case 'success':
        return <SuccessIcon height={24} />;
      case 'warning':
        return <WarningIcon height={24} />;
      case 'error':
        return <ErrorIcon height={24} />;
      default:
        return null;
    }
  });

  return (
    <div {...props} data-root data-severity={severity} data-compact={compact}>
      {icon.value ? <i>{icon.value}</i> : null}
      <Slot />
    </div>
  );
});
