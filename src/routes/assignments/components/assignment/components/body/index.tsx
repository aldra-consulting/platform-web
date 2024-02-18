import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import { AssignmentContext } from '@project/context';
import { RoleProvider } from '@project/providers';

import Role from './components/role';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { brief, roles },
  } = useContext(AssignmentContext);

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
