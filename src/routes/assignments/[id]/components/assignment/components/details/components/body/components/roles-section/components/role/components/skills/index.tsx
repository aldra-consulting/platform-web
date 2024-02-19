import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { RoleContext } from '@project/context';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const context = useContext(RoleContext);

  const { skills = [] } = context.role;

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
