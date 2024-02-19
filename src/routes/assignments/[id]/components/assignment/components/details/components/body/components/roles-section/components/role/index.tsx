import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { AssignmentContext, RoleContext } from '@project/context';

import Actions from './components/actions';
import Description from './components/description';
import QualificationRequirements from './components/qualification-requirements';
import Skills from './components/skills';
import Status from './components/status';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { isActive } = useContext(AssignmentContext);
  const context = useContext(RoleContext);

  const { role } = context;

  return (
    <Card>
      <Card.Header q:slot='header'>
        <Card.Header.Title>
          <div data-slot='header'>
            <p>{role.name}</p>
            <Status />
          </div>
        </Card.Header.Title>
      </Card.Header>
      <Card.Body q:slot='body'>
        <div data-slot='body'>
          <Description />
          <QualificationRequirements />
          <Skills />
        </div>
      </Card.Body>
      {isActive ? (
        <Card.Actions q:slot='actions' alignment='right'>
          <Actions />
        </Card.Actions>
      ) : null}
    </Card>
  );
});
