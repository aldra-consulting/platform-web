import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Avatar from '@project/components/avatar';
import Header from '@project/components/header';
import Logo from '@project/components/logo';
import { Theme } from '@project/enums';
import { useAuthenticatedUser } from '@project/hooks';
import { auth } from '@project/utils/auth';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const signIn = $(() => auth().signIn());

  const { user, signOut } = useAuthenticatedUser(signIn);

  return (
    <main id='page'>
      <Header>
        <Logo theme={Theme.LIGHT} height='100%' q:slot='logo' />
        <Avatar title={user.name} onClick$={signOut} q:slot='avatar' />
      </Header>
      <div data-slot='content'>ASSIGNMENTS</div>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Oppdrag | Platform | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra Platform hjelper selvstendige spesialister med å finne deres neste oppdrag.',
    },
  ],
};
