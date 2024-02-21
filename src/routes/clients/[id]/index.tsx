import { $, component$, Resource } from '@builder.io/qwik';
import {
  useLocation,
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import Page from '@project/components/page';
import { useClient } from '@project/hooks';
import { ClientProvider } from '@project/providers';
import { ClientService } from '@project/services';

import Client from './components/client';

export default component$(() => {
  const { params } = useLocation();

  const { resource } = useClient(
    $(() => new ClientService().get(params.id ?? ''))
  );

  return (
    <Resource
      value={resource}
      onResolved={(client) =>
        client ? (
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
                <Link href='/clients' color='neutral'>
                  Oppdragsgivere
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb active>
                {client.name}
              </Breadcrumbs.Breadcrumb>
            </Breadcrumbs>
            <ClientProvider client={client}>
              <Client />
            </ClientProvider>
          </Page>
        ) : null
      }
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new ClientService().list()).map(({ id }) => ({ id })),
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
