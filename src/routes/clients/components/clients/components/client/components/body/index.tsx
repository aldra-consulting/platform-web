import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';

import { ClientContext } from '@project/context';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { description },
  } = useContext(ClientContext);

  return (
    <div data-root>
      <p>{description}</p>
    </div>
  );
});
