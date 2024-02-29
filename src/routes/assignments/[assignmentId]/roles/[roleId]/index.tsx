import { component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useAssignmentId, useRoleId } from '@project/hooks';
import { AssignmentService } from '@project/services';

export default component$(() => {
  const assignmentId = useAssignmentId();
  const roleId = useRoleId();

  return <Redirect to={`/assignments/${assignmentId}/roles/${roleId}/apply`} />;
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentService().list()).flatMap(
    ({ id: assignmentId, roles }) =>
      roles.map(({ id: roleId }) => ({ assignmentId, roleId }))
  ),
});

export const head: DocumentHead = {
  title: 'Oppdrag | Platform | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra Platform hjelper selvstendige spesialister med å finne deres neste oppdrag.',
    },
  ],
};
