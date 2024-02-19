import { component$ } from '@builder.io/qwik';

import Card from '@project/components/card';

import Body from './components/body';
import Header from './components/header';

export default component$(() => (
  <Card>
    <Card.Header q:slot='header'>
      <Header />
    </Card.Header>
    <Card.Body q:slot='body'>
      <Body />
    </Card.Body>
  </Card>
));
