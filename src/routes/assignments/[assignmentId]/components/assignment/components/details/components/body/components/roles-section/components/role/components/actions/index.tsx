import { $, component$ } from '@builder.io/qwik';

import Button from '@project/components/button';
import ClientTask from '@project/components/client-task';
import Loader from '@project/components/loader';
import {
  useAuthenticatedUser,
  useRoleContext,
  useClientTask,
} from '@project/hooks';

export default component$(() => {
  const {
    store: { user },
  } = useAuthenticatedUser();

  const context = useRoleContext();

  const {
    role: { status, applicant },
  } = context;

  const isUserAnApplicant = applicant && applicant.id === user?.id;

  const { task: applyTask, perform: apply } = useClientTask(
    $(() => context.apply())
  );

  const { task: withdrawTask, perform: withdraw } = useClientTask(
    $(() => context.withdraw())
  );

  switch (status) {
    case 'open':
      return (
        <ClientTask
          task={applyTask}
          onPending={() => (
            <Button colour='blue' disabled startIcon>
              <Loader q:slot='start-icon' />
              Søk nå
            </Button>
          )}
          onIdle={() => (
            <Button colour='blue' onClick$={apply}>
              Søk nå
            </Button>
          )}
        />
      );
    case 'review':
      return (
        <ClientTask
          task={applyTask}
          onPending={() => (
            <Button colour='blue' disabled startIcon>
              <Loader q:slot='start-icon' />
              Søk likevel
            </Button>
          )}
          onIdle={() => (
            <Button colour='blue' onClick$={apply}>
              Søk likevel
            </Button>
          )}
        />
      );
    case 'filled':
      return !isUserAnApplicant ? (
        <ClientTask
          task={applyTask}
          onPending={() => (
            <Button colour='blue' disabled startIcon>
              <Loader q:slot='start-icon' />
              Søk likevel
            </Button>
          )}
          onIdle={() => (
            <Button colour='blue' onClick$={apply}>
              Søk likevel
            </Button>
          )}
        />
      ) : (
        <ClientTask
          task={withdrawTask}
          onPending={() => (
            <Button colour='red' disabled startIcon>
              <Loader q:slot='start-icon' />
              Trekk søknad
            </Button>
          )}
          onIdle={() => (
            <Button colour='red' onClick$={withdraw}>
              Trekk søknad
            </Button>
          )}
        />
      );
    default:
      return null;
  }
});
