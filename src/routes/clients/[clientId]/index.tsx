import { $, component$, Resource } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Page from '@project/components/page';
import { useClient, useClientId } from '@project/hooks';
import { ClientProvider } from '@project/providers';
import { service } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import Client from './components/client';

export default component$(() => {
  const id = useClientId();

  const { resource } = useClient(
    $(() => service().entity().client().findByIdOrThrow(id))
  );

  return (
    <Resource
      value={resource}
      onResolved={(client) =>
        client ? (
          <Page>
            <Breadcrumbs q:slot='breadcrumbs' />
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
  params: (await service().entity().client().findMany()).map(
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
