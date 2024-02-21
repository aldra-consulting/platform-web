import { component$, useContext } from '@builder.io/qwik';

import Redirect from '@project/components/redirect';
import { AssignmentContext } from '@project/context';

export default component$(() => {
  const {
    assignment: { id },
  } = useContext(AssignmentContext);

  return <Redirect to={`/assignments/${id}`} />;
});
