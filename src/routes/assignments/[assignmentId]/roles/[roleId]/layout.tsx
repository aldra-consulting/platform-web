import { component$, Slot } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useAssignmentContext } from '@project/hooks';
import { RoleProvider } from '@project/providers';

export default component$(() => {
  const { params } = useLocation();

  const { assignment } = useAssignmentContext();

  const role = assignment.roles.find(({ id }) => id === params.roleId);

  return role ? (
    <RoleProvider role={role}>
      <Slot />
    </RoleProvider>
  ) : (
    <Redirect to={`/assignments/${assignment.id}`} />
  );
});
