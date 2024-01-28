import { Resource, component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import Card from '@project/components/card';
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
        onResolved={(assignments) => (
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
            {assignments.map(({ id, assignor: { name }, role }) => (
              <Card key={id}>
                <Card.Header q:slot='header'>
                  <div>
                    <Card.Header.Title q:slot='title'>{role}</Card.Header.Title>
                    <Card.Header.Subtitle q:slot='subtitle'>
                      {name}
                    </Card.Header.Subtitle>
                  </div>
                </Card.Header>
                <Card.Body q:slot='body'>
                  <div data-slot='assignment-body'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam consequuntur quidem cum rerum reprehenderit numquam
                      assumenda, qui similique aut ad, eius, quae debitis in est
                      aperiam. A est incidunt assumenda.
                    </p>
                  </div>
                </Card.Body>
                <Card.Link q:slot='link' to={`/assignments/${id}`}>
                  Utforsk oppdraget
                </Card.Link>
              </Card>
            ))}
          </MasonryGrid>
        )}
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
