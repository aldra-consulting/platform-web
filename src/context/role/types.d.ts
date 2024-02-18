import { type QRL } from '@builder.io/qwik';

import { type Entity } from '@project/types';

export interface Store {
  role: Entity.Role;
  apply: QRL<() => void>;
  withdraw: QRL<() => void>;
}
