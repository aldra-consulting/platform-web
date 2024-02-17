import { component$ } from '@builder.io/qwik';

import Button from '@project/components/button';
import { useAuthenticatedUser } from '@project/hooks';
import { type Entity } from '@project/types';

interface Props {
  status: Entity.Role['status'];
  applicant: Entity.Role['applicant'];
}

export default component$<Props>(({ status, applicant }) => {
  const { user } = useAuthenticatedUser();

  const isUserAnApplicant = applicant && applicant.id === user?.id;

  switch (status) {
    case 'open':
      return (
        <Button size='small' colour='blue'>
          Søk nå
        </Button>
      );
    case 'review':
      return (
        <Button size='small' colour='blue'>
          Søk likevel
        </Button>
      );
    case 'filled':
      return !isUserAnApplicant ? (
        <Button size='small' colour='blue'>
          Søk likevel
        </Button>
      ) : (
        <Button size='small' colour='red'>
          Trekk søknad
        </Button>
      );
    default:
      return null;
  }
});
