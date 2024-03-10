import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';

import Card from '@project/components/card';
import { ClientContext } from '@project/context';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { name },
  } = useContext(ClientContext);

  return (
    <Card.Header.Title>
      <div data-slot='title'>
        <span>{name}</span>
      </div>
    </Card.Header.Title>
  );
});
