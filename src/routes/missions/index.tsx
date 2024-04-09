import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Loader from '@project/components/loader';
import Page from '@project/components/page';
import { useClientResource } from '@project/hooks';
import { service, CSSUtil, NumberUtil } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import Missions from './components/missions';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const resource = useClientResource(
    $(() => service().entity().mission().findMany())
  );

  return (
    <Page>
      <Breadcrumbs q:slot='breadcrumbs' />
      <ClientResource
        resource={resource}
        onPending={() => (
          <div data-slot='loading-screen'>
            <div data-slot='loader'>
              <Loader
                color='blue'
                thickness={CSSUtil.length().px(NumberUtil.nonZero(4))}
              />
            </div>
          </div>
        )}
        onResolved={(missions) =>
          missions.length > 0 ? (
            <Missions missions={missions} />
          ) : (
            <div data-slot='no-missions'>
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
