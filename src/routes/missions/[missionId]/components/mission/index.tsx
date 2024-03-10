import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import { NumberUtil, CSSUtil } from '@project/utils';

import CallToAction from './components/call-to-action';
import Details from './components/details';
import Representative from './components/representative';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div data-root>
      <main>
        <Animated
          animation='fade-in-up'
          duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
          delay={CSSUtil.time.s(NumberUtil.positive(0.3))}
        >
          <Details />
        </Animated>
      </main>
      <aside>
        <Animated
          animation='fade-in-up'
          duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
          delay={CSSUtil.time.s(NumberUtil.positive(0.3))}
        >
          <CallToAction />
        </Animated>
        <Animated
          animation='fade-in-up'
          duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
          delay={CSSUtil.time.s(NumberUtil.positive(0.3))}
        >
          <Representative />
        </Animated>
      </aside>
    </div>
  );
});
