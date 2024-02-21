import {
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import { ClientContext, type ClientStore } from '@project/context';
import { type Entity } from '@project/types';

export interface Props {
  client: Entity.Client;
}

export default component$<Props>(({ client }) => {
  useContextProvider(
    ClientContext,
    useStore<ClientStore>({
      client,
    })
  );

  return <Slot />;
});
