import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useClientContext } from '@project/hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { description },
  } = useClientContext();

  return (
    <div data-root>
      <p>{description}</p>
    </div>
  );
});
