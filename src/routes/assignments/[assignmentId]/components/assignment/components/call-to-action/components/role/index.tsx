import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { AssignmentContext, RoleContext } from '@project/context';

import Action from './components/action';
import Status from './components/status';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { isActive } = useContext(AssignmentContext);
  const { role } = useContext(RoleContext);

  return (
    <Card>
      <Card.Body q:slot='body'>
        <div data-slot='role'>
          <Status />
          <p>{role.name}</p>
          {isActive ? <Action /> : null}
        </div>
      </Card.Body>
    </Card>
  );
});
