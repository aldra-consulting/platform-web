import { $, useVisibleTask$, useStore, type QRL } from '@builder.io/qwik';

import { type Functional } from '@project/types';

import { type ClientResource, type Options } from './types';

export const useClientResource = <T>(
  supplier: QRL<Functional.Supplier<T>>,
  options?: Options
) => {
  const resource = useStore<ClientResource<T>>({
    status: 'pending',
    task: $(function run(this: ClientResource<T>) {
      return new Promise<T>((resolve, reject) => {
        this.status = 'pending';

        supplier().then(resolve).catch(reject);
      });
    }),
  });

  useVisibleTask$(({ track }) => {
    track(() => options?.signal?.value as unknown);

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

  return resource as Readonly<ClientResource<T>>;
};

export { type ClientResource, type Options as ClientResourceOptions };
