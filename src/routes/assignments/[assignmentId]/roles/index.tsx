import { component$ } from '@builder.io/qwik';
import { type StaticGenerateHandler } from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useAssignmentContext } from '@project/hooks';
import { AssignmentService } from '@project/services';

export default component$(() => {
  const {
    assignment: { id },
  } = useAssignmentContext();

  return <Redirect to={`/assignments/${id}`} />;
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentService().list()).map(
    ({ id: assignmentId }) => ({ assignmentId })
  ),
});
