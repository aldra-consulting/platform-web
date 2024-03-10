import { component$ } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { useMissionContext } from '@project/hooks';

export default component$(() => {
  const {
    mission: { status },
  } = useMissionContext();

  switch (status) {
    case 'active':
      return (
        <Chip variant='outlined' size='small' color='blue'>
          Aktiv
        </Chip>
      );
    case 'concluded':
      return (
        <Chip variant='outlined' size='small' color='neutral'>
          Avsluttet
        </Chip>
      );
    case 'cancelled':
      return (
        <Chip variant='outlined' size='small' color='red'>
          Avlyst
        </Chip>
      );
    default:
      return null;
  }
});
