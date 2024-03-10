import { type QRL } from '@builder.io/qwik';

import { type Entity } from '@project/types';

export interface Store {
  mission: Entity.Mission;
  isActive: boolean;
  toggleBookmark: QRL<() => void>;
}
