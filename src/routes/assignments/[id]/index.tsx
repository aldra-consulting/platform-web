import { $, component$, Resource } from '@builder.io/qwik';
import {
  useLocation,
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import Page from '@project/components/page';
import { useAssignment } from '@project/hooks';
import { AssignmentProvider } from '@project/providers';
import { AssignmentService } from '@project/services';

import Assignment from './components/assignment';

export default component$(() => {
  const { params } = useLocation();

  const { resource } = useAssignment(
    $(() => new AssignmentService().get(params.id ?? ''))
  );

  return (
    <Resource
      value={resource}
      onResolved={(assignment) =>
        assignment ? (
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
            <AssignmentProvider assignment={assignment}>
              <Assignment />
            </AssignmentProvider>
          </Page>
        ) : null
      }
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (
    await Promise.resolve([
      'assignment-1',
      'assignment-2',
      'assignment-3',
      'assignment-4',
      'assignment-5',
      'assignment-6',
      'assignment-7',
      'assignment-8',
      'assignment-9',
      'assignment-10',
    ])
  ).map((id) => ({ id })),
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
