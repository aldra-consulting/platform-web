import { type QRL, type ValueOrPromise } from '@builder.io/qwik';

import { type Entity, type Nullable } from '@project/types';

import { useReloadableResource } from '../reloadable-resource';

export const useClient = (
  resource: QRL<() => ValueOrPromise<Nullable<Entity.Client>>>
) => useReloadableResource(resource);
