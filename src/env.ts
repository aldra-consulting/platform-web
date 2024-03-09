import { type Environment } from '@project/types';

export default () =>
  ({
    OIDC_ISSUER: window.env.OIDC_ISSUER,
    OIDC_CLIENT_ID: window.env.OIDC_CLIENT_ID,
    OIDC_SCOPES: window.env.OIDC_SCOPES,
  }) satisfies Environment;
