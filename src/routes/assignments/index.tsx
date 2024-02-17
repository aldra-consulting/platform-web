import { $, component$, useStylesScoped$, Resource } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Animated from '@project/components/animated';
import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import MasonryGrid from '@project/components/masonry-grid';
import Page from '@project/components/page';
import { useAssignments } from '@project/hooks';
import { AssignmentProvider } from '@project/providers';
import { AssignmentService } from '@project/services';

import Assignment from './components/assignment';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { resource } = useAssignments($(() => new AssignmentService().list()));

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
              {assignments.map((assignment, index) => (
                <AssignmentProvider key={assignment.id} assignment={assignment}>
                  <Animated
                    animation='fade-in-up'
                    duration={{ value: 0.5, unit: 's' }}
                    delay={{ value: index / 10 + 0.3, unit: 's' }}
                  >
                    <Assignment />
                  </Animated>
                </AssignmentProvider>
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
