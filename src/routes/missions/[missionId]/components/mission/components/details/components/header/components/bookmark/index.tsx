import { $, component$, Resource } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import Button from '@project/components/button';
import Loader from '@project/components/loader';
import StarIcon from '@project/components/star-icon';
import StarOutlineIcon from '@project/components/star-outline-icon';
import {
  useMissionContext,
  useIsFirstRender,
  useReloadableResource,
} from '@project/hooks';
import { NumberUtil, CSSUtil } from '@project/utils';

export default component$(() => {
  const context = useMissionContext();

  const { bookmark } = context.mission;

  const isFirstRender = useIsFirstRender();

  const { resource, isLoading, reload } = useReloadableResource(
    $(async () => {
      if (!isFirstRender.value) {
        await context.toggleBookmark();
      }
    })
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
            duration={CSSUtil.time.s(NumberUtil.positive(0.3))}
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
