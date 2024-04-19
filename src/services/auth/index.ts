import { type User, type UserManager } from 'oidc-client-ts';

import { type Nullable } from '@project/types';

export default class AuthService {
  #manager: UserManager;

  constructor(manager: UserManager) {
    this.#manager = manager;
  }

  signIn = async (): Promise<void> => this.#manager.signinRedirect();

  signInSilent = async (): Promise<Nullable<User>> =>
    this.#manager.signinSilent();

  completeSignIn = async (): Promise<void> =>
    this.#manager.signinCallback().then();

  signOut = async (): Promise<void> => this.#manager.signoutRedirect();

  getUser = async ({ refresh }: { refresh?: boolean } = {}): Promise<User> =>
    (await this.#manager
      .getUser()
      .then((user) => (user?.expired && refresh ? null : user))) ??
    (await this.signInSilent()) ??
    Promise.reject(new Error('User not found'));

  getToken = async (): Promise<Nullable<string>> =>
    this.getUser({ refresh: true })
      .then(({ token_type: type, access_token: token }) => `${type} ${token}`)
      .catch(() => undefined);
}
