import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { useRoleContext } from '@project/hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    role: { skills = [] },
  } = useRoleContext();

  return skills.length > 0 ? (
    <div data-root>
      <h4>Ferdigheter</h4>
      <div data-slot='skills'>
        {skills.map(({ id, name }) => (
          <Chip key={id} size='small' variant='outlined'>
            {name}
          </Chip>
        ))}
      </div>
    </div>
  ) : null;
});
