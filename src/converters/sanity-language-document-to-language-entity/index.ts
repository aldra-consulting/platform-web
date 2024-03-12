import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements Converter<Sanity.Document.Language, Entity.Language>
{
  convert = ({ code, label }: Sanity.Document.Language): Entity.Language => ({
    id: code,
    label: label.find(({ _key }) => _key === 'no')?.value ?? '',
  });
}
