import {
  $,
  component$,
  useContext,
  useStylesScoped$,
  Resource,
} from '@builder.io/qwik';

import Animated from '@project/components/animated';
import { ClientContext } from '@project/context';
import { useAssignments } from '@project/hooks';
import { AssignmentProvider } from '@project/providers';
import { AssignmentService } from '@project/services';

import Section from '../section';

import Assignment from './components/assignment';
import styles from './styles.css?inline';
import { byStatus } from './utils';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { id },
  } = useContext(ClientContext);

  const { resource } = useAssignments(
    $(() =>
      new AssignmentService()
        .list()
        .then((assignments) =>
          assignments.filter(({ client }) => client.id === id)
        )
        .then((assignments) =>
          assignments.length > 0
            ? assignments
            : Promise.reject(new Error('No assignments found'))
        )
    )
  );

  return (
    <Resource
      value={resource}
      onPending={() => null}
      onResolved={(assignments) => (
        <Section>
          <h1 q:slot='title'>Oppdrag</h1>
          <div q:slot='body' data-root>
            {assignments.sort(byStatus).map((assignment, index) => (
              <AssignmentProvider key={assignment.id} assignment={assignment}>
                <Animated
                  animation='fade-in-up'
                  duration={{ value: 0.5, unit: 's' }}
                  delay={{ value: index / 10 + 0.5, unit: 's' }}
                >
                  <Assignment />
                </Animated>
              </AssignmentProvider>
            ))}
          </div>
        </Section>
      )}
      onRejected={() => null}
    />
  );
});