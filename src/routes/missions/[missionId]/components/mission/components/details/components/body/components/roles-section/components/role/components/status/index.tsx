import { component$ } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import {
  useAuthenticatedUser,
  useMissionContext,
  useRoleContext,
} from '@project/hooks';

export default component$(() => {
  const {
    store: { user },
  } = useAuthenticatedUser();

  const { isActive } = useMissionContext();

  const {
    role: { status, applicant },
  } = useRoleContext();

  const isUserAnApplicant = applicant && applicant.id === user?.id;

  switch (status) {
    case 'open':
      return isActive ? null : (
        <Chip size='small' color='neutral' variant='outlined'>
          Ingen kandidater
        </Chip>
      );
    case 'review':
      return (
        <Chip size='small' color='yellow'>
          Velger kandidat
        </Chip>
      );
    case 'filled':
      return (
        <Chip size='small' color={isUserAnApplicant ? 'green' : 'red'}>
          {isUserAnApplicant ? 'Søknad mottatt' : 'Kandidat funnet'}
        </Chip>
      );
    default:
      return null;
  }
});
