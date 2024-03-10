import { $, component$ } from '@builder.io/qwik';
import {
  type StaticGenerateHandler,
  type DocumentHead,
} from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import ClientResource from '@project/components/client-resource';
import Link from '@project/components/link';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useAssignmentId, useClientResource, useRoleId } from '@project/hooks';
import { AssignmentProvider } from '@project/providers';
import { AssignmentEntityService } from '@project/services';

export default component$(() => {
  const assignmentId = useAssignmentId();
  const roleId = useRoleId();

  const resource = useClientResource(
    $(() =>
      new AssignmentEntityService()
        .findByIdOrThrow(assignmentId)
        .then((assignment) => {
          const role = assignment.roles.find(({ id }) => id === roleId);

          if (!role) {
            throw new Error('Role not found');
          }

          return { assignment, role };
        })
    )
  );

  return (
    <ClientResource
      resource={resource}
      onPending={() => null}
      onRejected={() => <Redirect to={`/assignments/${assignmentId}`} />}
      onResolved={({ assignment, role }) => (
        <AssignmentProvider assignment={assignment}>
          <Page>
            <Breadcrumbs q:slot='breadcrumbs'>
              <Breadcrumbs.Breadcrumb>
                <Link href='https://www.aldra.no' color='neutral'>
                  Aldra
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb>
                <Link href='/' color='neutral'>
                  Plattform
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb>
                <Link href='/assignments' color='neutral'>
                  Oppdrag
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb>
                <Link href={`/assignments/${assignment.id}`} color='neutral'>
                  {assignment.name}
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb>
                <Link
                  href={`/assignments/${assignment.id}/roles`}
                  color='neutral'
                >
                  Roller
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb active>
                {role.name}
              </Breadcrumbs.Breadcrumb>
            </Breadcrumbs>
            <pre>{JSON.stringify(role, null, 2)}</pre>
          </Page>
        </AssignmentProvider>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentEntityService().list()).flatMap(
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
