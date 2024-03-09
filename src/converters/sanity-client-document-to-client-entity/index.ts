import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class SanityClientDocumentToClientEntityConverter
  implements Converter<Sanity.Document.Client, Entity.Client>
{
  convert = ({
    _id: id,
    label,
    description,
  }: Sanity.Document.Client): Entity.Client => ({
    id,
    name: label.find(({ _key }) => _key === 'no')?.value ?? '',
    label: label.find(({ _key }) => _key === 'no')?.value ?? '',
    description: description.find(({ _key }) => _key === 'no')?.value ?? '',
  });
}
