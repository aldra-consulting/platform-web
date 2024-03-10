import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Page from '@project/components/page';
import { useClientResource } from '@project/hooks';
import { service } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import Clients from './components/clients';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const resource = useClientResource(
    $(() => service().entity().client().findMany())
  );

  return (
    <Page>
      <Breadcrumbs q:slot='breadcrumbs' />
      <ClientResource
        resource={resource}
        onResolved={(clients) =>
          clients.length > 0 ? (
            <Clients clients={clients} />
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
