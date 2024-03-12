import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { useMissionContext } from '@project/hooks';

import Section from '../section';

import Flag from './components/flag';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    mission: { languages = [] },
  } = useMissionContext();

  return languages.length > 0 ? (
    <Section>
      <h1 q:slot='title'>Språk</h1>
      <div q:slot='body'>
        <div data-slot='languages'>
          {languages.map(({ id, name, level }) => (
            <Chip key={`${id}-${level}`} variant='outlined'>
              <i>
                <Flag code={id} />
              </i>
              <span>
                {name} ({level})
              </span>
            </Chip>
          ))}
        </div>
      </div>
    </Section>
  ) : null;
});
