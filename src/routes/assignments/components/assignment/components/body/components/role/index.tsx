import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { AssignmentContext } from '@project/context';
import { type Entity } from '@project/types';

import Action from './components/action';
import Status from './components/status';
import styles from './styles.css?inline';

interface Props {
  role: Entity.Role;
}

export default component$<Props>(({ role: { name, status, applicant } }) => {
  useStylesScoped$(styles);

  const { assignment } = useContext(AssignmentContext);

  const isAssignmentActive = assignment.status === 'active';

  return (
    <Card>
      <Card.Body q:slot='body'>
        <div data-slot='role'>
          <p>{name}</p>
          <Status status={status} applicant={applicant} />
          {isAssignmentActive ? (
            <Action status={status} applicant={applicant} />
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
});
