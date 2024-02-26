import { type QRL } from '@builder.io/qwik';

import { type Supplier } from '@project/types';

interface PendingClientResource {
  status: 'pending';
}

interface ResolvedClientResource<T> {
  status: 'resolved';
  value: T;
}

interface RejectedClientResource {
  status: 'rejected';
  error: Error;
}

export type ClientResource<T> = (
  | PendingClientResource
  | ResolvedClientResource<T>
  | RejectedClientResource
) & {
  task: QRL<Supplier<Promise<T>>>;
};
