import { component$ } from '@builder.io/qwik';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import { useMissionContext, useRoleContext } from '@project/hooks';

export default component$(() => {
  const { mission } = useMissionContext();

  const { role } = useRoleContext();

  return (
    <Breadcrumbs>
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
      <Breadcrumbs.Breadcrumb active>{role.name}</Breadcrumbs.Breadcrumb>
    </Breadcrumbs>
  );
});
