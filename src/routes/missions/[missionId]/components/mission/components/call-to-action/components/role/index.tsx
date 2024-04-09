import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { useMissionContext, useRoleContext } from '@project/hooks';

import Action from './components/action';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { isActive } = useMissionContext();
  const { role } = useRoleContext();

  return (
    <Card>
      <Card.Body q:slot='body'>
        <div data-slot='role'>
          <p>{role.name}</p>
          {isActive ? <Action /> : null}
        </div>
      </Card.Body>
    </Card>
  );
});
