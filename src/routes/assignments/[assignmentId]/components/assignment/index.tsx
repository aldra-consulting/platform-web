import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';

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
          duration={{ value: 0.5, unit: 's' }}
          delay={{ value: 0.3, unit: 's' }}
        >
          <Details />
        </Animated>
      </main>
      <aside>
        <Animated
          animation='fade-in-up'
          duration={{ value: 0.5, unit: 's' }}
          delay={{ value: 0.3, unit: 's' }}
        >
          <CallToAction />
        </Animated>
        <Animated
          animation='fade-in-up'
          duration={{ value: 0.5, unit: 's' }}
          delay={{ value: 0.3, unit: 's' }}
        >
          <Representative />
        </Animated>
      </aside>
    </div>
  );
});
