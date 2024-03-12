import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements Converter<Sanity.Document.Mission, Entity.Mission>
{
  #clientConverter: Converter<Sanity.Document.Client, Entity.Client>;

  #languageRequirementConverter: Converter<
    Sanity.Object.LanguageRequirement,
    Entity.LanguageRequirement
  >;

  constructor(
    clientConverter: Converter<Sanity.Document.Client, Entity.Client>,
    languageRequirementConverter: Converter<
      Sanity.Object.LanguageRequirement,
      Entity.LanguageRequirement
    >
  ) {
    this.#clientConverter = clientConverter;
    this.#languageRequirementConverter = languageRequirementConverter;
  }

  convert = ({
    _id: id,
    label,
    description,
    client,
    status,
    brief,
    languageRequirements,
  }: Sanity.Document.Mission): Entity.Mission => ({
    id,
    label: label.find(({ _key }) => _key === 'no')?.value ?? '',
    description: description.find(({ _key }) => _key === 'no')?.value ?? '',
    client: this.#clientConverter.convert(client),
    status,
    brief: brief.find(({ _key }) => _key === 'no')?.value ?? '',
    roles: [],
    languageRequirements: languageRequirements.map(
      this.#languageRequirementConverter.convert
    ),
  });
}
