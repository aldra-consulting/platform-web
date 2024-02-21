import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { AssignmentContext } from '@project/context';

import Section from '../section';

import Detail from './components/detail';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { details = [] },
  } = useContext(AssignmentContext);

  return details.length > 0 ? (
    <Section>
      <h1 q:slot='title'>Nøkkelinformasjon</h1>
      <div q:slot='body'>
        <Card>
          <Card.Body q:slot='body'>
            <div data-slot='details'>
              {details.map((detail) => (
                <Detail key={detail.type} detail={detail} />
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </Section>
  ) : null;
});
