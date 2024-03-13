import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements Converter<Sanity.Object.AwardCriterion, Entity.AwardCriterion>
{
  #criterionConverter: Converter<Sanity.Document.Criterion, Entity.Criterion>;

  constructor(
    criterionConverter: Converter<Sanity.Document.Criterion, Entity.Criterion>
  ) {
    this.#criterionConverter = criterionConverter;
  }

  convert = ({
    criterion,
    weight,
  }: Sanity.Object.AwardCriterion): Entity.AwardCriterion => ({
    criterion: this.#criterionConverter.convert(criterion),
    weight,
  });
}
