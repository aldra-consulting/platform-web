import { component$, useContext } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { AssignmentContext, RoleContext } from '@project/context';
import { AssignmentService } from '@project/services';

export default component$(() => {
  const { assignment } = useContext(AssignmentContext);
  const { role } = useContext(RoleContext);

  return (
    <Redirect to={`/assignments/${assignment.id}/roles/${role.id}/apply`} />
  );
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
