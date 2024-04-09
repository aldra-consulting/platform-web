import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Loader from '@project/components/loader';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useClientId, useClientResource } from '@project/hooks';
import { ClientProvider } from '@project/providers';
import { service, CSSUtil, NumberUtil } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import BreadcrumbsSkeleton from './components/breadcrumbs-skeleton';
import Client from './components/client';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const id = useClientId();

  const resource = useClientResource(
    $(() => service().entity().client().findByIdOrThrow(id))
  );

  return (
    <ClientResource
      resource={resource}
      onPending={() => (
        <Page>
          <BreadcrumbsSkeleton q:slot='breadcrumbs' />
          <div data-slot='loading-screen'>
            <div data-slot='loader'>
              <Loader
                color='blue'
                thickness={CSSUtil.length().px(NumberUtil.nonZero(4))}
              />
            </div>
          </div>
        </Page>
      )}
      onRejected={() => <Redirect to='/clients' />}
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
