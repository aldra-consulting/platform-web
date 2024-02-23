import { $, component$, Resource } from '@builder.io/qwik';
import {
  useLocation,
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useAssignment } from '@project/hooks';
import { AssignmentProvider } from '@project/providers';
import { AssignmentService } from '@project/services';

import Assignment from './components/assignment';

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
              <Breadcrumbs.Breadcrumb active>
                {assignment.name}
              </Breadcrumbs.Breadcrumb>
            </Breadcrumbs>
            <Assignment />
          </Page>
        </AssignmentProvider>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentService().list()).map(
    ({ id: assignmentId }) => ({ assignmentId })
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
