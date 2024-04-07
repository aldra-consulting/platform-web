import {
  component$,
  useStylesScoped$,
  type ImgHTMLAttributes,
  Slot,
} from '@builder.io/qwik';

import { CssDimensionToStringConverter } from '@project/converters';
import { type CSS } from '@project/types';

import Image from '../image';

import styles from './styles.css?inline';

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'children'> {
  shape?: 'circle' | 'square';
  size?: CSS.DataType.Length;
}

const converter = new CssDimensionToStringConverter();

export default component$<Props>(
  ({ alt = '', title = '', shape = 'circle', ...props }) => {
    useStylesScoped$(styles);

    const size = props.size ? converter.convert(props.size) : undefined;

    return (
      <div
        data-root
        data-shape={shape}
        style={{ '--size': size }}
        title={title || alt}
        role='presentation'
      >
        <Image {...props} alt={alt || title}>
          <abbr title={title || alt}>
            {(alt || title)
              .match(/\b(\w)/g)
              ?.join('')
              .toUpperCase()
              .substring(0, 2) ?? <Slot />}
          </abbr>
        </Image>
      </div>
    );
  }
);
