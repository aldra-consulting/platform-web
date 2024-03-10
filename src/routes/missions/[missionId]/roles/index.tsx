import { component$ } from '@builder.io/qwik';
import { type StaticGenerateHandler } from '@builder.io/qwik-city';

import Redirect from '@project/components/redirect';
import { useMissionId } from '@project/hooks';
import { MissionEntityService } from '@project/services';

export default component$(() => {
  const id = useMissionId();

  return <Redirect to={`/missions/${id}`} />;
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new MissionEntityService().list()).map(
    ({ id: missionId }) => ({ missionId })
  ),
});
