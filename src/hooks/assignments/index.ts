import { type QRL, type ValueOrPromise } from '@builder.io/qwik';

import { type Entity } from '@project/types';

import { useReloadableResource } from '../reloadable-resource';

export const useAssignments = (
  resource: QRL<() => ValueOrPromise<Entity.Assignment[]>>
) => useReloadableResource(resource);
