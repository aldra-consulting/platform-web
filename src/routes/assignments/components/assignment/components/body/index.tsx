import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useAssignmentContext } from '@project/hooks';
import { RoleProvider } from '@project/providers';

import Role from './components/role';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { brief, roles },
  } = useAssignmentContext();

  return (
    <div data-root>
      {brief ? <p>{brief}</p> : null}
      <div data-slot='roles'>
        {roles.map((role) => (
          <RoleProvider key={role.id} role={role}>
            <Role />
          </RoleProvider>
        ))}
      </div>
    </div>
  );
});
