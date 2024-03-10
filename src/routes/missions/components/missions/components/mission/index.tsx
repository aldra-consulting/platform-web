import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useMissionContext } from '@project/hooks';

import Card from '../../../../../../components/card';

import Body from './components/body';
import Header from './components/header';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { mission } = useMissionContext();

  return (
    <Card>
      <Card.Header q:slot='header'>
        <Header />
      </Card.Header>
      <Card.Body q:slot='body'>
        <Body />
      </Card.Body>
      <Card.Link q:slot='link' to={`/missions/${mission.id}`}>
        Les mer om oppdraget
      </Card.Link>
    </Card>
  );
});
