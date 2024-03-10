import { component$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import MasonryGrid from '@project/components/masonry-grid';
import { AssignmentProvider } from '@project/providers';
import { type Entity } from '@project/types';
import { NumberUtil, CSSUtil } from '@project/utils';

import Assignment from './components/assignment';

export interface Props {
  assignments: Entity.Assignment[];
}

export default component$<Props>(({ assignments }) => (
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
    {assignments.map((assignment, index) => (
      <AssignmentProvider key={assignment.id} assignment={assignment}>
        <Animated
          animation='fade-in-up'
          duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
          delay={CSSUtil.time.s(NumberUtil.positive(index / 10 + 0.3))}
        >
          <Assignment />
        </Animated>
      </AssignmentProvider>
    ))}
  </MasonryGrid>
));
