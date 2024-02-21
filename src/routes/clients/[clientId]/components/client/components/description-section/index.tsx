import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import { ClientContext } from '@project/context';

import Section from '../section';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { description },
  } = useContext(ClientContext);

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
