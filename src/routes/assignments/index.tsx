import { Resource, component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Assignment from '@project/components/assignment';
import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import MasonryGrid from '@project/components/masonry-grid';
import Page from '@project/components/page';
import { useAssignments } from '@project/hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { resource } = useAssignments();

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
        <Breadcrumbs.Breadcrumb active>Oppdrag</Breadcrumbs.Breadcrumb>
      </Breadcrumbs>
      <Resource
        value={resource}
        onResolved={(assignments) =>
          assignments.length > 0 ? (
            <MasonryGrid
              sizes={[
                {
                  columns: 1,
                  gutter: 16,
                },
                {
                  mq: '1000px',
                  columns: 2,
                  gutter: 16,
                },
                {
                  mq: '1450px',
                  columns: 3,
                  gutter: 16,
                },
              ]}
            >
              {assignments.map((assignment) => (
                <Assignment key={assignment.id} assignment={assignment} />
              ))}
            </MasonryGrid>
          ) : (
            <div data-slot='no-assignments'>
              <p>Ingen oppdrag funnet</p>
            </div>
          )
        }
      />
    </Page>
  );
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
