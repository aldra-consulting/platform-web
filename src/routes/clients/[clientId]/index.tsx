import { $, component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useClientId, useClientResource } from '@project/hooks';
import { ClientProvider } from '@project/providers';
import { service } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import Client from './components/client';

export default component$(() => {
  const id = useClientId();

  const resource = useClientResource(
    $(() => service().entity().client().findByIdOrThrow(id))
  );

  return (
    <ClientResource
      resource={resource}
      onPending={() => null}
      onRejected={() => <Redirect to='/assignments' />}
      onResolved={(client) => (
        <ClientProvider client={client}>
          <Page>
            <Breadcrumbs q:slot='breadcrumbs' />
            <Client />
          </Page>
        </ClientProvider>
      )}
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
