import { component$ } from '@builder.io/qwik';
import { type StaticGenerateHandler } from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useDefinedParam } from '@project/hooks';
import { AssignmentService } from '@project/services';

export default component$(() => {
  const assignmentId = useDefinedParam('assignmentId');

  return <Redirect to={`/assignments/${assignmentId}`} />;
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentService().list()).map(
    ({ id: assignmentId }) => ({ assignmentId })
  ),
});
