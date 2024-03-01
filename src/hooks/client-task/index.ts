import { $, useStore, type QRL } from '@builder.io/qwik';

import { type Functional } from '@project/types';

import { type ClientTask } from './types';

export const useClientTask = (runnable: QRL<Functional.Supplier<void>>) => {
  const task = useStore<ClientTask>({
    status: 'idle',
    runnable: $(function run(this: ClientTask) {
      return new Promise<void>((resolve, reject) => {
        this.status = 'pending';

        runnable().then(resolve).catch(reject);
      });
    }),
  });

  const perform = $(() => {
    Promise.resolve(task.runnable())
      .then(() => {
        task.status = 'idle';
      })
      .catch((error) => {
        task.status = 'rejected';

        throw error;
      })
      .catch((error) => {
        if (task.status === 'rejected' && error instanceof Error) {
          task.error = error;
        }
      });
  });

  return { task, perform } as const;
};

export { type ClientTask };
