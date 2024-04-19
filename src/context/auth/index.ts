import { createContextId } from '@builder.io/qwik';

import { type Store } from './types';

export default createContextId<Store>('context.auth');

export type * from './types';
