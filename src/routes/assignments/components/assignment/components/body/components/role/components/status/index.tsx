import { component$, useContext } from '@builder.io/qwik';

import Chip from '@project/components/chip';
import { AssignmentContext } from '@project/context';
import { useAuthenticatedUser } from '@project/hooks';
import { type Entity } from '@project/types';

interface Props {
  status: Entity.Role['status'];
  applicant: Entity.Role['applicant'];
}

export default component$<Props>(({ status, applicant }) => {
  const { user } = useAuthenticatedUser();

  const { isActive } = useContext(AssignmentContext);

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
