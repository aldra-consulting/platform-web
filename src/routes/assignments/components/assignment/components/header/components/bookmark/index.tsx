import { $, component$, useContext, Resource } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import Button from '@project/components/button';
import Loader from '@project/components/loader';
import StarIcon from '@project/components/star-icon';
import StarOutlineIcon from '@project/components/star-outline-icon';
import { AssignmentContext } from '@project/context';
import { useReloadableResource } from '@project/hooks';

export default component$(() => {
  const context = useContext(AssignmentContext);

  const { bookmark } = context.assignment;

  const { resource, isLoading, reload } = useReloadableResource(
    $(() => context.toggleBookmark())
  );

  return (
    <Resource
      value={resource}
      onPending={() =>
        isLoading.value ? (
          <Button variant='icon' startIcon disabled>
            <Loader q:slot='start-icon' />
          </Button>
        ) : null
      }
      onResolved={() => (
        <Button
          variant='icon'
          startIcon
          colour={bookmark ? 'green' : 'yellow'}
          onClick$={reload}
          disabled={isLoading.value}
        >
          <Animated
            animation='zoom-pop-in'
            duration={{ value: 0.3, unit: 's' }}
            q:slot='start-icon'
          >
            {bookmark ? (
              <StarIcon style={{ scale: 1.3 }} />
            ) : (
              <StarOutlineIcon style={{ scale: 1.3 }} />
            )}
          </Animated>
        </Button>
      )}
    />
  );
});
