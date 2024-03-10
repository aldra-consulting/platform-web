import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import Card from '@project/components/card';
import { useClientContext } from '@project/hooks';
import { NumberUtil, CSSUtil } from '@project/utils';

import AssignmentsSection from './components/assignments-section';
import DescriptionSection from './components/description-section';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { name },
  } = useClientContext();

  return (
    <div data-root>
      <main>
        <Animated
          animation='fade-in-up'
          duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
          delay={CSSUtil.time.s(NumberUtil.positive(0.3))}
        >
          <Card>
            <Card.Header q:slot='header'>
              <Card.Header.Title>{name}</Card.Header.Title>
            </Card.Header>
            <Card.Body q:slot='body'>
              <div data-slot='body'>
                <DescriptionSection />
                <AssignmentsSection />
              </div>
            </Card.Body>
          </Card>
        </Animated>
      </main>
    </div>
  );
});
