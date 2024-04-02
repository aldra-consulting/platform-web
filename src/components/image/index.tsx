import {
  type ImgHTMLAttributes,
  component$,
  useSignal,
  Slot,
} from '@builder.io/qwik';

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'children'> {}

export default component$<Props>(
  ({
    src,
    alt,
    height,
    width,
    decoding = 'async',
    loading = 'lazy',
    onError$,
    ...props
  }) => {
    const isError = useSignal(!src?.trim());

    return isError.value ? (
      <Slot />
    ) : (
      <img
        {...props}
        src={src}
        alt={alt}
        height={height}
        width={width}
        decoding={decoding}
        loading={loading}
        onError$={(event, element) => {
          isError.value = true;

          if (!Array.isArray(onError$)) {
            onError$?.(event, element);
          }
        }}
      />
    );
  }
);
