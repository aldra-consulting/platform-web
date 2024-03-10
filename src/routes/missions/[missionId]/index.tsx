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
import { MissionEntityService } from '@project/services';

import Breadcrumbs from './components/breadcrumbs';
import Mission from './components/mission';

export default component$(() => {
  const id = useMissionId();

  const resource = useClientResource(
    $(() => new MissionEntityService().findByIdOrThrow(id))
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
  params: (await new MissionEntityService().list()).map(
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
