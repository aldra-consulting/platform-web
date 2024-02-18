import { createContextId } from '@builder.io/qwik';

import { type Store } from './types';

export default createContextId<Store>('context.role');

export type * from './types';
