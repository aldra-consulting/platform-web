import { type User } from 'oidc-client-ts';

import { type Entity, type Converter } from '@project/types';

export class UserConverter implements Converter<User, Entity.User> {
  convert = ({ profile: { sub: id, name = '' } }: User): Entity.User => ({
    id,
    name,
  });
}
