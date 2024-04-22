import { component$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import MasonryGrid from '@project/components/masonry-grid';
import { MissionProvider } from '@project/providers';
import { type Entity } from '@project/types';
import { NumberUtil, CSSUtil } from '@project/utils';

import Mission from './components/mission';

export interface Props {
  missions: Entity.Mission[];
}

export default component$<Props>(({ missions }) => (
  <MasonryGrid
    sizes={[
      {
        columns: 1,
        gutter: 16,
      },
      {
        mq: '1000px',
        columns: 2,
        gutter: 16,
      },
      {
        mq: '1450px',
        columns: 3,
        gutter: 16,
      },
    ]}
  >
    {missions.map((mission, index) => (
      <MissionProvider key={mission.id} mission={mission}>
        <Animated
          animation='fade-in-up'
          duration={CSSUtil.time().s(NumberUtil.positive(0.5))}
          delay={CSSUtil.time().s(NumberUtil.positive(index / 10 + 0.3))}
        >
          <Mission />
        </Animated>
      </MissionProvider>
    ))}
  </MasonryGrid>
));
