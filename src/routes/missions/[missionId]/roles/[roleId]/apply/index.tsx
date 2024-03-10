import { $, component$ } from '@builder.io/qwik';
import {
  type StaticGenerateHandler,
  type DocumentHead,
} from '@builder.io/qwik-city';

import Breadcrumbs from '@project/components/breadcrumbs';
import ClientResource from '@project/components/client-resource';
import Link from '@project/components/link';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useMissionId, useClientResource, useRoleId } from '@project/hooks';
import { MissionProvider } from '@project/providers';
import { service } from '@project/utils';

export default component$(() => {
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
      onPending={() => null}
      onRejected={() => <Redirect to={`/missions/${missionId}`} />}
      onResolved={({ mission, role }) => (
        <MissionProvider mission={mission}>
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
                <Link href='/missions' color='neutral'>
                  Oppdrag
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb>
                <Link href={`/missions/${mission.id}`} color='neutral'>
                  {mission.label}
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb>
                <Link href={`/missions/${mission.id}/roles`} color='neutral'>
                  Roller
                </Link>
              </Breadcrumbs.Breadcrumb>
              <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
              <Breadcrumbs.Breadcrumb active>
                {role.name}
              </Breadcrumbs.Breadcrumb>
            </Breadcrumbs>
            <pre>{JSON.stringify(role, null, 2)}</pre>
          </Page>
        </MissionProvider>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await service().entity().mission().list()).flatMap(
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
