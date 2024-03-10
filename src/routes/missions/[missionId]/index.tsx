import { $, component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useMissionId, useClientResource } from '@project/hooks';
import { MissionProvider } from '@project/providers';
import { service } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import Mission from './components/mission';

export default component$(() => {
  const id = useMissionId();

  const resource = useClientResource(
    $(() => service().entity().mission().findByIdOrThrow(id))
  );

  return (
    <ClientResource
      resource={resource}
      onPending={() => null}
      onRejected={() => <Redirect to='/missions' />}
      onResolved={(mission) => (
        <MissionProvider mission={mission}>
          <Page>
            <Breadcrumbs q:slot='breadcrumbs' />
            <Mission />
          </Page>
        </MissionProvider>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await service().entity().mission().findMany()).map(
    ({ id: missionId }) => ({ missionId })
  ),
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
