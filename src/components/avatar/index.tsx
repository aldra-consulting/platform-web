import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  useSignal,
} from '@builder.io/qwik';

import { image } from '@project/utils';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {
  image?: string;
}

export default component$<Props>(({ title, image: imageUrl, ...props }) => {
  useStylesScoped$(styles);

  const showImage = useSignal(true);

  return (
    <abbr title={title} {...props}>
      {imageUrl && showImage.value ? (
        <img
          src={image().sanity().image(imageUrl).height(40).width(40).url()}
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
