import { component$ } from '@builder.io/qwik';

import ErrorIcon from '@project/components/error-icon';
import InfoIcon from '@project/components/info-icon';
import SuccessIcon from '@project/components/success-icon';
import WarningIcon from '@project/components/warning-icon';
import {
  useAuthenticatedUser,
  useMissionContext,
  useRoleContext,
} from '@project/hooks';

/**
 * @deprecated
 */
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
      return isActive ? (
        <InfoIcon height={20} style={{ fill: '#439ef8' }} />
      ) : null;
    case 'review':
      return <WarningIcon height={20} style={{ fill: '#cd983a' }} />;
    case 'filled':
      return isUserAnApplicant ? (
        <SuccessIcon height={20} style={{ fill: '#4fc970' }} />
      ) : (
        <ErrorIcon height={20} style={{ fill: '#ff524f' }} />
      );
    default:
      return null;
  }
});
