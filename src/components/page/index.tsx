import {
  component$,
  useStylesScoped$,
  Slot,
  type HTMLAttributes,
} from '@builder.io/qwik';

import { Theme } from '@project/enums';
import { useAuthContext } from '@project/hooks';

import Avatar from '../avatar';
import Header from '../header';
import Link from '../link';
import Logo from '../logo';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {}

export default component$<Props>(({ ...props }) => {
  useStylesScoped$(styles);

  const { user, signOut } = useAuthContext();

  return (
    <main {...props}>
      <Header>
        <Link href='https://www.aldra.no' variant='plain' q:slot='logo'>
          <Logo theme={Theme.LIGHT} height={28} />
        </Link>
        <button
          type='button'
          onClick$={signOut}
          data-slot='avatar'
          q:slot='avatar'
        >
          <Avatar alt={user?.name} title={user?.name} src={user?.picture} />
        </button>
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
