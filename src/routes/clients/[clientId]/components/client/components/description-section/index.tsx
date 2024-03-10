import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useClientContext } from '@project/hooks';

import Section from '../section';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { description },
  } = useClientContext();

  return description ? (
    <Section>
      <h1 q:slot='title'>Om oppdragsgiveren</h1>
      <div q:slot='body'>
        <div data-slot='description'>
          <p>{description}</p>
        </div>
      </div>
    </Section>
  ) : null;
});
