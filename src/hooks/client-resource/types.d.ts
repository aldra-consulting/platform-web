import { type QRL, type Signal } from '@builder.io/qwik';

import { type Functional } from '@project/types';

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
  task: QRL<Functional.Supplier<Promise<T>>>;
};

export interface Options {
  signal?: Signal;
}
