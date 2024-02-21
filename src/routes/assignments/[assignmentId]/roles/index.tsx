import { component$, useContext } from '@builder.io/qwik';
import { type StaticGenerateHandler } from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { AssignmentContext } from '@project/context';
import { AssignmentService } from '@project/services';

export default component$(() => {
  const {
    assignment: { id },
  } = useContext(AssignmentContext);

  return <Redirect to={`/assignments/${id}`} />;
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentService().list()).map(
    ({ id: assignmentId }) => ({ assignmentId })
  ),
});
