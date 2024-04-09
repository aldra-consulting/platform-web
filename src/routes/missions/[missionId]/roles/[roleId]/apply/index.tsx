import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import {
  type StaticGenerateHandler,
  type DocumentHead,
} from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Loader from '@project/components/loader';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useMissionId, useClientResource, useRoleId } from '@project/hooks';
import { MissionProvider, RoleProvider } from '@project/providers';
import { service, CSSUtil, NumberUtil } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import BreadcrumbsSkeleton from './components/breadcrumbs-skeleton';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const missionId = useMissionId();
  const roleId = useRoleId();

  const resource = useClientResource(
    $(() =>
      service()
        .entity()
        .mission()
        .findByIdOrThrow(missionId)
        .then((mission) => {
          const role = mission.roles.find(({ id }) => id === roleId);

          if (!role) {
            throw new Error('Role not found');
          }

          return { mission, role };
        })
    )
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
      onRejected={() => <Redirect to={`/missions/${missionId}`} />}
      onResolved={({ mission, role }) => (
        <MissionProvider mission={mission}>
          <RoleProvider role={role}>
            <Page>
              <Breadcrumbs q:slot='breadcrumbs' />
              <pre>{JSON.stringify(role, null, 2)}</pre>
            </Page>
          </RoleProvider>
        </MissionProvider>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await service().entity().mission().findMany()).flatMap(
    ({ id: missionId, roles }) =>
      roles.map(({ id: roleId }) => ({ missionId, roleId }))
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
