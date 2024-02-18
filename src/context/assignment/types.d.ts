import { type QRL } from '@builder.io/qwik';

import { type Entity } from '@project/types';

export interface Store {
  assignment: Entity.Assignment;
  isActive: boolean;
  toggleBookmark: QRL<() => void>;
}
