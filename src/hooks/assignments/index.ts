import { type QRL } from '@builder.io/qwik';

import { type Entity } from '@project/types';

import { useReloadableResource } from '../reloadable-resource';

export const useAssignments = (resource: QRL<() => Entity.Assignment[]>) =>
  useReloadableResource(resource);
