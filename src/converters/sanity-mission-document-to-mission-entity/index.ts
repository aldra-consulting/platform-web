import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements Converter<Sanity.Document.Mission, Entity.Mission>
{
  #clientConverter: Converter<Sanity.Document.Client, Entity.Client>;

  constructor(
    clientConverter: Converter<Sanity.Document.Client, Entity.Client>
  ) {
    this.#clientConverter = clientConverter;
  }

  convert = ({
    _id: id,
    label,
    description,
    client,
    status,
  }: Sanity.Document.Mission): Entity.Mission => ({
    id,
    label: label.find(({ _key }) => _key === 'no')?.value ?? '',
    description: description.find(({ _key }) => _key === 'no')?.value ?? '',
    client: this.#clientConverter.convert(client),
    status,
    brief: '',
    roles: [],
  });
}
