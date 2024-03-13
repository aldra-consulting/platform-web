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

  #awardCriterionConverter: Converter<
    Sanity.Object.AwardCriterion,
    Entity.AwardCriterion
  >;

  #personConverter: Converter<Sanity.Document.Person, Entity.Person>;

  constructor(
    clientConverter: Converter<Sanity.Document.Client, Entity.Client>,
    languageRequirementConverter: Converter<
      Sanity.Object.LanguageRequirement,
      Entity.LanguageRequirement
    >,
    awardCriterionConverter: Converter<
      Sanity.Object.AwardCriterion,
      Entity.AwardCriterion
    >,
    personConverter: Converter<Sanity.Document.Person, Entity.Person>
  ) {
    this.#clientConverter = clientConverter;
    this.#languageRequirementConverter = languageRequirementConverter;
    this.#awardCriterionConverter = awardCriterionConverter;
    this.#personConverter = personConverter;
  }

  convert = ({
    _id: id,
    label,
    description,
    client,
    status,
    brief,
    languageRequirements,
    awardCriteria,
    representative,
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
    awardCriteria: awardCriteria.map(this.#awardCriterionConverter.convert),
    representative: this.#personConverter.convert(representative),
  });
}
