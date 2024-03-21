import { createClient } from '@sanity/client';

import env from '@project/env';
import { isBrowser } from '@project/utils/common';

export default () => {
  const {
    SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET,
    SANITY_API_VERSION,
  } = env();

  return createClient({
    projectId: SANITY_STUDIO_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
    apiVersion: SANITY_API_VERSION,
    perspective: 'published',
    useCdn: isBrowser(),
  });
};
