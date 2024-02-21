import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import { AssignmentContext } from '@project/context';
import { RoleProvider } from '@project/providers';

import Section from '../section';

import Role from './components/role';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { roles = [] },
  } = useContext(AssignmentContext);

  return roles.length > 0 ? (
    <Section>
      <h1 q:slot='title'>Roller</h1>
      <div q:slot='body'>
        <div data-slot='roles'>
          {roles.map((role) => (
            <RoleProvider key={role.id} role={role}>
              <Role />
            </RoleProvider>
          ))}
        </div>
      </div>
    </Section>
  ) : null;
});
