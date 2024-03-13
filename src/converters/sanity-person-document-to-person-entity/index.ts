import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements Converter<Sanity.Document.Person, Entity.Person>
{
  convert = ({
    _id: id,
    givenName,
    familyName,
    emailAddress,
    phoneNumber,
    profilePhoto,
  }: Sanity.Document.Person): Entity.Person => ({
    id,
    givenName,
    familyName,
    fullName: `${givenName} ${familyName}`.trim(),
    emailAddress,
    phoneNumber,
    profilePhoto,
  });
}
