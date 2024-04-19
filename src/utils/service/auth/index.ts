import { UserManager } from 'oidc-client-ts';

import env from '@project/env';
import { AuthService } from '@project/services';

export default () => {
  const { OIDC_ISSUER, OIDC_CLIENT_ID, OIDC_SCOPES } = env();

  const { origin } = window.location;

  return new AuthService(
    new UserManager({
      authority: OIDC_ISSUER,
      client_id: OIDC_CLIENT_ID,
      redirect_uri: `${origin}/auth`,
      post_logout_redirect_uri: origin,
      scope: OIDC_SCOPES,
      response_mode: 'query',
      automaticSilentRenew: false,
      loadUserInfo: true,
    })
  );
};
