import { $, component$, Resource, Slot } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useAssignment } from '@project/hooks';
import { AssignmentProvider } from '@project/providers';
import { AssignmentService } from '@project/services';

export default component$(() => {
  const { params } = useLocation();

  const { resource } = useAssignment(
    $(() => new AssignmentService().findByIdOrThrow(params.assignmentId ?? ''))
  );

  return (
    <Resource
      value={resource}
      onPending={() => null}
      onRejected={() => <Redirect to='/assignments' />}
      onResolved={(assignment) => (
        <AssignmentProvider assignment={assignment}>
          <Slot />
        </AssignmentProvider>
      )}
    />
  );
});
