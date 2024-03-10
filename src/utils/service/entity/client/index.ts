import { createClient } from '@sanity/client';

import { SanityClientDocumentToClientEntityConverter } from '@project/converters';
import env from '@project/env';
import { ClientSanityRepository } from '@project/repository';
import { ClientEntityService } from '@project/services';

export default () => {
  const {
    SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET,
    SANITY_API_VERSION,
  } = env();

  return new ClientEntityService(
    new ClientSanityRepository(
      createClient({
        projectId: SANITY_STUDIO_PROJECT_ID,
        dataset: SANITY_STUDIO_DATASET,
        apiVersion: SANITY_API_VERSION,
        perspective: 'published',
        useCdn: true,
      })
    ),
    new SanityClientDocumentToClientEntityConverter()
  );
};
