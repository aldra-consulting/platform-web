import { type QRL } from '@builder.io/qwik';

import { type Entity } from '@project/types';

export interface Store {
  assignment: Entity.Assignment;
  toggleBookmark: QRL<() => void>;
}
