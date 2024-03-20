import { type Converter, type Sanity, type Entity } from '@project/types';

export default class implements Converter<Sanity.Object.Role, Entity.Role> {
  #qualificationRequirementConverter: Converter<
    Sanity.Object.QualificationRequirement,
    Entity.QualificationRequirement
  >;

  constructor(
    qualificationRequirementConverter: Converter<
      Sanity.Object.QualificationRequirement,
      Entity.QualificationRequirement
    >
  ) {
    this.#qualificationRequirementConverter = qualificationRequirementConverter;
  }

  convert = ({
    id,
    label,
    description,
    status,
    qualificationRequirements,
  }: Sanity.Object.Role): Entity.Role => ({
    id,
    name: label.find(({ _key }) => _key === 'no')?.value ?? '',
    description: description.find(({ _key }) => _key === 'no')?.value ?? '',
    status,
    qualificationRequirements: qualificationRequirements.map(
      this.#qualificationRequirementConverter.convert
    ),
    skills: [],
  });
}
