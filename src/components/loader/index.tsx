import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';

import { CssDimensionToStringConverter } from '@project/converters';
import { type CSS } from '@project/types';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {
  color?: 'neutral' | 'blue' | 'red' | 'yellow' | 'green';
  thickness?: CSS.DataType.Length;
}

const converter = new CssDimensionToStringConverter();

export default component$<Props>(
  ({ color = 'neutral', thickness, ...props }) => {
    useStylesScoped$(styles);

    return (
      <span
        {...props}
        data-root
        data-color={color}
        style={{
          '--thickness': thickness ? converter.convert(thickness) : undefined,
        }}
      />
    );
  }
);
