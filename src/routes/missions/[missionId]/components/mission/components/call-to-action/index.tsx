import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { useMissionContext } from '@project/hooks';
import { RoleProvider } from '@project/providers';

import Role from './components/role';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    mission: { roles },
  } = useMissionContext();

  return (
    <Card>
      <Card.Header q:slot='header'>
        <Card.Header.Title>Er noen av rollene for deg?</Card.Header.Title>
      </Card.Header>
      <Card.Body q:slot='body'>
        <div data-slot='roles'>
          {roles.map((role) => (
            <RoleProvider key={role.id} role={role}>
              <Role />
            </RoleProvider>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
});
