import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
  useVisibleTask$,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import { AuthContext, type AuthStore as Store } from '@project/context';
import { OidcUserToUserEntityConverter } from '@project/converters';
import { service } from '@project/utils';

export default component$(() => {
  const {
    url: { pathname },
  } = useLocation();

  const store = useStore<Store>({
    user: undefined,
    signOut: $(async function run(this: Store) {
      return service()
        .auth()
        .signOut()
        .finally(() => {
          this.user = undefined;
        });
    }),
  });

  useContextProvider(AuthContext, store);

  useVisibleTask$(() => {
    if (pathname.startsWith('/auth')) return;

    const auth = service().auth();

    auth
      .getUser()
      .then((user) => {
        store.user = new OidcUserToUserEntityConverter().convert(user);
      })
      .catch(auth.signIn);
  });

  return store.user?.id ? <Slot /> : null;
});
