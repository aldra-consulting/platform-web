import { type Environment } from '@project/types';
import { globalObject } from '@project/utils/common';
import { checkEnvironmentVariables } from '@project/utils/environment';

export default () => {
  const {
    OIDC_ISSUER = '',
    OIDC_CLIENT_ID = '',
    OIDC_SCOPES = '',
    SANITY_STUDIO_PROJECT_ID = '',
    SANITY_STUDIO_DATASET = '',
    SANITY_API_VERSION = '',
  } = globalObject()?.env ?? {};

  return checkEnvironmentVariables<Environment>(
    {
      OIDC_ISSUER,
      OIDC_CLIENT_ID,
      OIDC_SCOPES,
      SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET,
      SANITY_API_VERSION,
    },
    [
      'OIDC_ISSUER',
      'OIDC_CLIENT_ID',
      'OIDC_SCOPES',
      'SANITY_STUDIO_PROJECT_ID',
      'SANITY_STUDIO_DATASET',
      'SANITY_API_VERSION',
    ]
  );
};
