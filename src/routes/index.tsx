import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Page from '@project/components/page';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <Page>
      <div data-slot='content'>
        <h1>Aldra Platform kommer snart! 🚀</h1>
      </div>
    </Page>
  );
});

export const head: DocumentHead = {
  title: 'Platform | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra Platform hjelper selvstendige spesialister med å finne deres neste oppdrag.',
    },
  ],
};
