import { $, component$, Resource } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import Page from '@project/components/page';
import { useClient, useClientId } from '@project/hooks';
import { ClientProvider } from '@project/providers';
import { ClientEntityService } from '@project/services';

import Client from './components/client';

export default component$(() => {
  const id = useClientId();

  const { resource } = useClient($(() => new ClientEntityService().get(id)));

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
  params: (await new ClientEntityService().findMany()).map(
    ({ id: clientId }) => ({
      clientId,
    })
  ),
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
