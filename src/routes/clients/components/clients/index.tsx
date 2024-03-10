import { component$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import MasonryGrid from '@project/components/masonry-grid';
import { ClientProvider } from '@project/providers';
import { type Entity } from '@project/types';
import { NumberUtil, CSSUtil } from '@project/utils';

import Client from '../client';

export interface Props {
  clients: Entity.Client[];
}

export default component$<Props>(({ clients }) => (
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
    {clients.map((client, index) => (
      <ClientProvider key={client.id} client={client}>
        <Animated
          animation='fade-in-up'
          duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
          delay={CSSUtil.time.s(NumberUtil.positive(index / 10 + 0.3))}
        >
          <Client />
        </Animated>
      </ClientProvider>
    ))}
  </MasonryGrid>
));
