import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements
    Converter<Sanity.Object.LanguageRequirement, Entity.LanguageRequirement>
{
  #languageConverter: Converter<Sanity.Document.Language, Entity.Language>;

  constructor(
    languageConverter: Converter<Sanity.Document.Language, Entity.Language>
  ) {
    this.#languageConverter = languageConverter;
  }

  convert = ({
    language,
    proficiency,
  }: Sanity.Object.LanguageRequirement): Entity.LanguageRequirement => ({
    language: this.#languageConverter.convert(language),
    proficiency: proficiency.value,
  });
}
