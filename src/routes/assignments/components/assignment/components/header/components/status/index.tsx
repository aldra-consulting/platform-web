import { component$, useComputed$, useContext } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { AssignmentContext } from '@project/context';

export default component$(() => {
  const {
    assignment: { status },
  } = useContext(AssignmentContext);

  const color = useComputed$(() => {
    switch (status) {
      case 'active':
        return 'blue';
      case 'concluded':
        return 'neutral';
      case 'cancelled':
        return 'red';
      default:
        return undefined;
    }
  });

  const translation = useComputed$(() => {
    switch (status) {
      case 'active':
        return 'Aktiv';
      case 'concluded':
        return 'Avsluttet';
      case 'cancelled':
        return 'Avlyst';
      default:
        return 'Ukjent';
    }
  });

  return (
    <Chip variant='outlined' color={color.value}>
      {translation.value}
    </Chip>
  );
});
