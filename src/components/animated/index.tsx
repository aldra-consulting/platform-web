import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props {
  animation: 'fade-in-up' | 'zoom-pop-in';
  duration?:
    | '0.1s'
    | '0.2s'
    | '0.3s'
    | '0.4s'
    | '0.5s'
    | '0.6s'
    | '0.7s'
    | '0.8s'
    | '0.9s'
    | '1s';
  delay?:
    | '0.1s'
    | '0.2s'
    | '0.3s'
    | '0.4s'
    | '0.5s'
    | '0.6s'
    | '0.7s'
    | '0.8s'
    | '0.9s'
    | '1s'
    | '1.1s'
    | '1.2s'
    | '1.3s'
    | '1.4s'
    | '1.5s'
    | '1.6s'
    | '1.7s'
    | '1.8s'
    | '1.9s'
    | '2s'
    | '2.1s'
    | '2.2s'
    | '2.3s'
    | '2.4s'
    | '2.5s'
    | '2.6s'
    | '2.7s'
    | '2.8s'
    | '2.9s'
    | '3s';
}

export default component$<Props>(({ animation, duration, delay }) => {
  useStylesScoped$(styles);

  return (
    <div data-animation={animation} data-duration={duration} data-delay={delay}>
      <Slot />
    </div>
  );
});
