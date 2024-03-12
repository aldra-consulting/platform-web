import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { useMissionContext } from '@project/hooks';

import Section from '../section';

import Flag from './components/flag';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    mission: { languageRequirements },
  } = useMissionContext();

  return languageRequirements.length > 0 ? (
    <Section>
      <h1 q:slot='title'>Språk</h1>
      <div q:slot='body'>
        <div data-slot='languages'>
          {languageRequirements.map(({ language, proficiency }) => (
            <Chip key={`${language.id}-${proficiency}`} variant='outlined'>
              <i>
                <Flag code={language.id} />
              </i>
              <span>
                {language.label} ({proficiency})
              </span>
            </Chip>
          ))}
        </div>
      </div>
    </Section>
  ) : null;
});
