import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import { type CSS } from '@project/types';

import styles from './styles.css?inline';
import { CssTimeToStringConverter } from './utils';

interface Props {
  animation: 'fade-in-up' | 'zoom-pop-in';
  duration?: CSS.Time;
  delay?: CSS.Time;
}

const converter = new CssTimeToStringConverter();

export default component$<Props>(({ animation, duration, delay }) => {
  useStylesScoped$(styles);

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
