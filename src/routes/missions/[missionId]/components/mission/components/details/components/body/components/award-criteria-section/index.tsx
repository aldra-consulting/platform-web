import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { useMissionContext } from '@project/hooks';

import Section from '../section';

import Criterion from './components/criterion';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    mission: { awardCriteria = [] },
  } = useMissionContext();

  return awardCriteria.length > 0 ? (
    <Section>
      <h1 q:slot='title'>Tildelingskriterier</h1>
      <div q:slot='body'>
        <Card>
          <Card.Body q:slot='body'>
            <div data-slot='award-criteria'>
              {awardCriteria.map((criterion) => (
                <Criterion key={criterion.id} criterion={criterion} />
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </Section>
  ) : null;
});
