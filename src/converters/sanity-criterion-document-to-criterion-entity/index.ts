import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements Converter<Sanity.Document.Criterion, Entity.Criterion>
{
  convert = ({
    _id: id,
    type,
    label,
  }: Sanity.Document.Criterion): Entity.Criterion => ({
    id,
    type,
    label: label.find(({ _key }) => _key === 'no')?.value ?? '',
  });
}
