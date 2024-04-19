import { type User } from 'oidc-client-ts';

import { type Converter, type Entity, type ID } from '@project/types';

export class UserConverter implements Converter<User, Entity.User> {
  convert = ({
    profile: { sub: id, name = '', picture },
  }: User): Entity.User => ({
    id: id as ID.User,
    name,
    picture,
  });
}
