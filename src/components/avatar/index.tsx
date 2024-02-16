import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {
  image?: string;
}

export default component$<Props>(({ title, image, ...props }) => {
  useStylesScoped$(styles);

  return (
    <abbr title={title} {...props}>
      {image ? (
        <img src={image} alt={title} height={40} width={40} />
      ) : (
        title
          ?.match(/\b(\w)/g)
          ?.join('')
          .toUpperCase()
          .substring(0, 2)
      )}
    </abbr>
  );
});
