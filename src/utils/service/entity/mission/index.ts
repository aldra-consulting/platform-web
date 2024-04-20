import {
  SanityAwardCriterionObjectToAwardCriterionEntityConverter,
  SanityClientDocumentToClientEntityConverter,
  SanityCriterionDocumentToCriterionEntityConverter,
  SanityDetailObjectToDetailEntityConverter,
  SanityLanguageDocumentToLanguageEntityConverter,
  SanityLanguageRequirementObjectToLanguageRequirementEntityConverter,
  SanityMissionDocumentToMissionEntityConverter,
  SanityPersonDocumentToPersonEntityConverter,
  SanityQualificationRequirementObjectToQualificationRequirementEntityConverter,
  SanityRoleObjectToRoleEntityConverter,
} from '@project/converters';
import { MissionSanityRepository } from '@project/repository';
import { MissionEntityService } from '@project/services';
import { client } from '@project/utils/client';
import auth from '@project/utils/service/auth';

export default () =>
  new MissionEntityService(
    new MissionSanityRepository(client().sanity()),
    new SanityMissionDocumentToMissionEntityConverter(
      new SanityClientDocumentToClientEntityConverter(),
      new SanityRoleObjectToRoleEntityConverter(
        new SanityQualificationRequirementObjectToQualificationRequirementEntityConverter()
      ),
      new SanityDetailObjectToDetailEntityConverter(),
      new SanityLanguageRequirementObjectToLanguageRequirementEntityConverter(
        new SanityLanguageDocumentToLanguageEntityConverter()
      ),
      new SanityAwardCriterionObjectToAwardCriterionEntityConverter(
        new SanityCriterionDocumentToCriterionEntityConverter()
      ),
      new SanityPersonDocumentToPersonEntityConverter()
    ),
    () =>
      auth()
        .getToken()
        .then((token) => token ?? '')
        .catch(() => ''),
    client().graphql()
  );
