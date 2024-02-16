import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import styles from './styles.css?inline';
import { type Time } from './types';
import { TimeToStringConverter } from './utils';

interface Props {
  animation: 'fade-in-up' | 'zoom-pop-in';
  duration?: Time;
  delay?: Time;
}

export default component$<Props>(({ animation, duration, delay }) => {
  useStylesScoped$(styles);

  const converter = new TimeToStringConverter();

  return (
    <div
      data-animation={animation}
      style={{
        '--duration': duration ? converter.convert(duration) : undefined,
        '--delay': delay ? converter.convert(delay) : undefined,
      }}
    >
      <Slot />
    </div>
  );
});
