import { type QRL } from '@builder.io/qwik';

import { type Functional } from '@project/types';

interface PendingClientTask {
  status: 'pending';
}

interface IdleClientTask {
  status: 'idle';
}

interface RejectedClientTask {
  status: 'rejected';
  error: Error;
}

export type ClientTask = (
  | PendingClientTask
  | IdleClientTask
  | RejectedClientTask
) & {
  runnable: QRL<Functional.Supplier<Promise<void>>>;
};
