import { component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useMissionId, useRoleId } from '@project/hooks';
import { MissionEntityService } from '@project/services';

export default component$(() => {
  const missionId = useMissionId();
  const roleId = useRoleId();

  return <Redirect to={`/missions/${missionId}/roles/${roleId}/apply`} />;
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new MissionEntityService().list()).flatMap(
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
