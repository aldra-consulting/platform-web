import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { RoleContext } from '@project/context';
import { useAssignmentContext } from '@project/hooks';

import Action from './components/action';
import Status from './components/status';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { isActive } = useAssignmentContext();
  const { role } = useContext(RoleContext);

  return (
    <Card>
      <Card.Body q:slot='body'>
        <div data-slot='role'>
          <p>{role.name}</p>
          <Status />
          {isActive ? <Action /> : null}
        </div>
      </Card.Body>
    </Card>
  );
});
