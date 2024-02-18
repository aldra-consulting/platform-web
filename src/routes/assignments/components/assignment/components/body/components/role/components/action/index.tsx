import { $, Resource, component$, useContext } from '@builder.io/qwik';

import Button from '@project/components/button';
import Loader from '@project/components/loader';
import { RoleContext } from '@project/context';
import {
  useAuthenticatedUser,
  useIsFirstRender,
  useReloadableResource,
} from '@project/hooks';

export default component$(() => {
  const { user } = useAuthenticatedUser();

  const context = useContext(RoleContext);

  const {
    role: { status, applicant },
  } = context;

  const isUserAnApplicant = applicant && applicant.id === user?.id;

  const isFirstRender = useIsFirstRender();

  const { resource: applyResource, reload: apply } = useReloadableResource(
    $(async () => {
      if (!isFirstRender.value) {
        await context.apply();
      }
    })
  );

  const { resource: withdrawResource, reload: withdraw } =
    useReloadableResource(
      $(async () => {
        if (!isFirstRender.value) {
          await context.withdraw();
        }
      })
    );

  switch (status) {
    case 'open':
      return (
        <Resource
          value={applyResource}
          onPending={() => (
            <Button size='small' colour='blue' disabled startIcon>
              <Loader q:slot='start-icon' />
              Søk nå
            </Button>
          )}
          onResolved={() => (
            <Button size='small' colour='blue' onClick$={apply}>
              Søk nå
            </Button>
          )}
        />
      );
    case 'review':
      return (
        <Resource
          value={applyResource}
          onPending={() => (
            <Button size='small' colour='blue' disabled startIcon>
              <Loader q:slot='start-icon' />
              Søk likevel
            </Button>
          )}
          onResolved={() => (
            <Button size='small' colour='blue' onClick$={apply}>
              Søk likevel
            </Button>
          )}
        />
      );
    case 'filled':
      return !isUserAnApplicant ? (
        <Resource
          value={applyResource}
          onPending={() => (
            <Button size='small' colour='blue' disabled startIcon>
              <Loader q:slot='start-icon' />
              Søk likevel
            </Button>
          )}
          onResolved={() => (
            <Button size='small' colour='blue' onClick$={apply}>
              Søk likevel
            </Button>
          )}
        />
      ) : (
        <Resource
          value={withdrawResource}
          onPending={() => (
            <Button size='small' colour='red' disabled startIcon>
              <Loader q:slot='start-icon' />
              Trekk søknad
            </Button>
          )}
          onResolved={() => (
            <Button size='small' colour='red' onClick$={withdraw}>
              Trekk søknad
            </Button>
          )}
        />
      );
    default:
      return null;
  }
});
