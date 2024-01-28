import { Resource, component$, useStylesScoped$ } from '@builder.io/qwik';
import {
  useLocation,
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import Page from '@project/components/page';
import { useAssignment } from '@project/hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { params } = useLocation();

  const { resource } = useAssignment(params.id ?? '');

  return (
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
          Oppdrag ({params.id})
        </Breadcrumbs.Breadcrumb>
      </Breadcrumbs>
      <Resource
        value={resource}
        onResolved={(assignment) =>
          assignment ? <h1>ASSIGNMENT: {assignment.id}</h1> : null
        }
      />
    </Page>
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
