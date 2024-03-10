import { component$ } from '@builder.io/qwik';

import { useClientContext } from '@project/hooks';

import Card from '../../../../../../components/card';

import Body from './components/body';
import Header from './components/header';

export default component$(() => {
  const {
    client: { id, description },
  } = useClientContext();

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
