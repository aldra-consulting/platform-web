import { type QRL } from '@builder.io/qwik';

import { type Entity } from '@project/types';

export interface Store {
  user?: Entity.User;
  signOut: QRL<() => void>;
}
