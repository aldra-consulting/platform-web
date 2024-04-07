import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import { CssDimensionToStringConverter } from '@project/converters';
import { type CSS } from '@project/types';

import styles from './styles.css?inline';

interface Props {
  animation: 'fade-in-up' | 'zoom-pop-in';
  duration?: CSS.DataType.Time;
  delay?: CSS.DataType.Time;
}

const converter = new CssDimensionToStringConverter();

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
