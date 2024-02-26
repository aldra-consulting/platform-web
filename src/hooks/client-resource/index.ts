import { $, useVisibleTask$, useStore, type QRL } from '@builder.io/qwik';

import { type Supplier } from '@project/types';

import { type ClientResource } from './types';

export const useClientResource = <T>(supplier: QRL<Supplier<T>>) => {
  const resource = useStore<ClientResource<T>>({
    status: 'pending',
    task: $(
      () =>
        new Promise<T>((resolve, reject) => {
          supplier().then(resolve).catch(reject);
        })
    ),
  });

  useVisibleTask$(() => {
    Promise.resolve(resource.task())
      .then((value) => {
        resource.status = 'resolved';

        return value;
      })
      .then((value) => {
        if (resource.status === 'resolved') {
          resource.value = value;
        }
      })
      .catch((error) => {
        resource.status = 'rejected';

        throw error;
      })
      .catch((error) => {
        if (resource.status === 'rejected' && error instanceof Error) {
          resource.error = error;
        }
      });
  });

  return resource;
};

export { type ClientResource };
