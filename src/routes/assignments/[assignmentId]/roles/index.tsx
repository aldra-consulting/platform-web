import { component$ } from '@builder.io/qwik';
import { type StaticGenerateHandler } from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useAssignmentId } from '@project/hooks';
import { AssignmentEntityService } from '@project/services';

export default component$(() => {
  const id = useAssignmentId();

  return <Redirect to={`/assignments/${id}`} />;
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentEntityService().list()).map(
    ({ id: assignmentId }) => ({ assignmentId })
  ),
});
