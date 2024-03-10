import {
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import { ClientContext, type ClientStore as Store } from '@project/context';
import { type Entity } from '@project/types';

export interface Props {
  client: Entity.Client;
}

export default component$<Props>(({ client }) => {
  const store = useStore<Store>({
    client,
  });

  useContextProvider(ClientContext, store);

  return <Slot />;
});
