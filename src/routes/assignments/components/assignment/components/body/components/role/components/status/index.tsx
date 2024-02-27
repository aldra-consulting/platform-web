import { component$, useContext } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { RoleContext } from '@project/context';
import { useAuthenticatedUser, useAssignmentContext } from '@project/hooks';

export default component$(() => {
  const {
    store: { user },
  } = useAuthenticatedUser();

  const { isActive } = useAssignmentContext();

  const {
    role: { status, applicant },
  } = useContext(RoleContext);
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
