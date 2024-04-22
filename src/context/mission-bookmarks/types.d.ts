import { type QRL } from '@builder.io/qwik';

import { type Entity } from '@project/types';

export interface Store {
  missions: Entity.Mission[];
  addAll: QRL<(missions: Entity.Mission[]) => void>;
}
