import { type Environment } from '@project/types';
import { globalObject, checkEnvironmentVariables } from '@project/utils';

export default () => {
  const {
    OIDC_ISSUER = '',
    OIDC_CLIENT_ID = '',
    OIDC_SCOPES = '',
  } = globalObject()?.env ?? {};

  return checkEnvironmentVariables<Environment>(
    {
      OIDC_ISSUER,
      OIDC_CLIENT_ID,
      OIDC_SCOPES,
    },
    ['OIDC_ISSUER', 'OIDC_CLIENT_ID', 'OIDC_SCOPES']
  );
};
