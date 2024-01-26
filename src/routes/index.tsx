import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Logo from '@project/components/logo';
import { Theme } from '@project/enums';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <main id='page'>
      <Logo theme={Theme.LIGHT} height={70} />
      <h1>Aldra Platform kommer snart! 🚀</h1>
    </main>
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
