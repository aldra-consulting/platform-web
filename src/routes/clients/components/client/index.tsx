import { component$, useContext } from '@builder.io/qwik';

import { ClientContext } from '@project/context';

import Card from '../../../../components/card';

import Body from './components/body';
import Header from './components/header';

export default component$(() => {
  const {
    client: { id, description },
  } = useContext(ClientContext);

  return (
    <Card>
      <Card.Header q:slot='header'>
        <Header />
      </Card.Header>
      {description ? (
        <Card.Body q:slot='body'>
          <Body />
        </Card.Body>
      ) : null}
      <Card.Link q:slot='link' to={`/clients/${id}`}>
        Se tilgjengelige oppdrag
      </Card.Link>
    </Card>
  );
});
