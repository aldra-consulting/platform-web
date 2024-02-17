import {
  $,
  component$,
  useStylesScoped$,
  Slot,
  type HTMLAttributes,
} from '@builder.io/qwik';

import { Theme } from '@project/enums';
import { useAuthenticatedUser } from '@project/hooks';
import { auth } from '@project/utils/auth';

import Avatar from '../avatar';
import Header from '../header';
import Logo from '../logo';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {}

export default component$<Props>(({ ...props }) => {
  useStylesScoped$(styles);

  const signIn = $(() => auth().signIn());

  const { user, signOut } = useAuthenticatedUser(signIn);

  return (
    <main {...props}>
      <Header>
        <Logo theme={Theme.LIGHT} height='100%' q:slot='logo' />
        <Avatar title={user?.name} onClick$={signOut} q:slot='avatar' />
      </Header>
      <div data-slot='breadcrumbs'>
        <Slot name='breadcrumbs' />
      </div>
      <div data-slot='content'>
        <Slot />
      </div>
    </main>
  );
});
