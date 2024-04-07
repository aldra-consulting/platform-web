import { type User } from 'oidc-client-ts';

import { type Entity, type Converter } from '@project/types';

export class UserConverter implements Converter<User, Entity.User> {
  convert = ({
    profile: { sub: id, name = '', picture },
  }: User): Entity.User => ({
    id,
    name,
    picture,
  });
}
