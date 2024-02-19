import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  useSignal,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {
  image?: string;
}

export default component$<Props>(({ title, image, ...props }) => {
  useStylesScoped$(styles);

  const showImage = useSignal(true);

  return (
    <abbr title={title} {...props}>
      {image && showImage.value ? (
        <img
          src={image}
          alt={title}
          height={40}
          width={40}
          onError$={() => {
            showImage.value = false;
          }}
        />
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
