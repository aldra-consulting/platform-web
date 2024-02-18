import { type QRL, type ValueOrPromise } from '@builder.io/qwik';

import { type Entity, type Nullable } from '@project/types';

import { useReloadableResource } from '../reloadable-resource';

export const useAssignment = (
  resource: QRL<() => ValueOrPromise<Nullable<Entity.Assignment>>>
) => useReloadableResource(resource);
