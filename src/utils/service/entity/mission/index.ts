import { createClient } from '@sanity/client';

import {
  SanityAwardCriterionObjectToAwardCriterionEntityConverter,
  SanityClientDocumentToClientEntityConverter,
  SanityCriterionDocumentToCriterionEntityConverter,
  SanityLanguageDocumentToLanguageEntityConverter,
  SanityLanguageRequirementObjectToLanguageRequirementEntityConverter,
  SanityMissionDocumentToMissionEntityConverter,
  SanityPersonDocumentToPersonEntityConverter,
} from '@project/converters';
import env from '@project/env';
import { MissionSanityRepository } from '@project/repository';
import { MissionEntityService } from '@project/services';

export default () => {
  const {
    SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET,
    SANITY_API_VERSION,
  } = env();

  return new MissionEntityService(
    new MissionSanityRepository(
      createClient({
        projectId: SANITY_STUDIO_PROJECT_ID,
        dataset: SANITY_STUDIO_DATASET,
        apiVersion: SANITY_API_VERSION,
        perspective: 'published',
        useCdn: true,
      })
    ),
    new SanityMissionDocumentToMissionEntityConverter(
      new SanityClientDocumentToClientEntityConverter(),
      new SanityLanguageRequirementObjectToLanguageRequirementEntityConverter(
        new SanityLanguageDocumentToLanguageEntityConverter()
      ),
      new SanityAwardCriterionObjectToAwardCriterionEntityConverter(
        new SanityCriterionDocumentToCriterionEntityConverter()
      ),
      new SanityPersonDocumentToPersonEntityConverter()
    )
  );
};
