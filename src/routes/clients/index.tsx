import { $, component$, Resource } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Animated from '@project/components/animated';
import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import MasonryGrid from '@project/components/masonry-grid';
import Page from '@project/components/page';
import { useClients } from '@project/hooks';
import { ClientProvider } from '@project/providers';
import { ClientEntityService } from '@project/services';
import { NumberUtil, CSSUtil } from '@project/utils';

import Client from './components/client';

export default component$(() => {
  const { resource } = useClients(
    $(() => new ClientEntityService().findMany())
  );

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
        <Breadcrumbs.Breadcrumb active>Oppdragsgivere</Breadcrumbs.Breadcrumb>
      </Breadcrumbs>
      <Resource
        value={resource}
        onResolved={(clients) =>
          clients.length > 0 ? (
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
              {clients.map((client, index) => (
                <ClientProvider key={client.id} client={client}>
                  <Animated
                    animation='fade-in-up'
                    duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
                    delay={CSSUtil.time.s(
                      NumberUtil.positive(index / 10 + 0.3)
                    )}
                  >
                    <Client />
                  </Animated>
                </ClientProvider>
              ))}
            </MasonryGrid>
          ) : (
            <div data-slot='no-clients'>
              <p>Ingen oppdragsgivere funnet</p>
            </div>
          )
        }
      />
    </Page>
  );
});

export const head: DocumentHead = {
  title: 'Oppdragsgivere | Platform | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra Platform hjelper selvstendige spesialister med å finne deres neste oppdrag.',
    },
  ],
};
