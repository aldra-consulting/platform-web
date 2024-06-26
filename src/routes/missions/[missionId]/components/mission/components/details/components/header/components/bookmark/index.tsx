import { $, component$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import Button from '@project/components/button';
import ClientTask from '@project/components/client-task';
import Loader from '@project/components/loader';
import StarIcon from '@project/components/star-icon';
import StarOutlineIcon from '@project/components/star-outline-icon';
import { useMissionContext, useClientTask } from '@project/hooks';
import { NumberUtil, CSSUtil } from '@project/utils';

export default component$(() => {
  const context = useMissionContext();

  const { isBookmarked } = context.mission;

  const { task, perform } = useClientTask($(() => context.toggleBookmark()));

  return (
    <ClientTask
      task={task}
      onPending={() => (
        <Button variant='icon' startIcon disabled>
          <Loader q:slot='start-icon' />
        </Button>
      )}
      onRejected={() => null}
      onIdle={() => (
        <Button
          variant='icon'
          startIcon
          colour={isBookmarked ? 'green' : 'yellow'}
          onClick$={perform}
        >
          <Animated
            animation='zoom-pop-in'
            duration={CSSUtil.time().s(NumberUtil.positive(0.3))}
            delay={CSSUtil.time().ms(NumberUtil.positive(1))}
            q:slot='start-icon'
          >
            {isBookmarked ? (
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
