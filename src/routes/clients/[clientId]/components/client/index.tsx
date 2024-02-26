import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import Card from '@project/components/card';
import { ClientContext } from '@project/context';

import AssignmentsSection from './components/assignments-section';
import DescriptionSection from './components/description-section';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { name },
  } = useContext(ClientContext);

  return (
    <div data-root>
      <main>
        <Animated
          animation='fade-in-up'
          duration={{ value: 0.5, unit: 's' }}
          delay={{ value: 0.3, unit: 's' }}
        >
          <Card>
            <Card.Header q:slot='header'>
              <Card.Header.Title>{name}</Card.Header.Title>
            </Card.Header>
            <Card.Body q:slot='body'>
              <div data-slot='body'>
                <DescriptionSection />
                <AssignmentsSection />
              </div>
            </Card.Body>
          </Card>
        </Animated>
      </main>
    </div>
  );
});