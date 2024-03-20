import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class
  implements
    Converter<
      Sanity.Object.QualificationRequirement,
      Entity.QualificationRequirement
    >
{
  convert = (
    qualificationRequirement: Sanity.Object.QualificationRequirement
  ): Entity.QualificationRequirement => {
    switch (qualificationRequirement.level) {
      case 'must':
        return {
          id: qualificationRequirement.id,
          level: qualificationRequirement.level,
          label: qualificationRequirement.label,
          description:
            qualificationRequirement.description.find(
              ({ _key }) => _key === 'no'
            )?.value ?? '',
        };
      case 'should':
        return {
          id: qualificationRequirement.id,
          level: qualificationRequirement.level,
          label: qualificationRequirement.label,
          description:
            qualificationRequirement.description.find(
              ({ _key }) => _key === 'no'
            )?.value ?? '',
          weight: qualificationRequirement.weight,
        };
      default:
        throw new Error('Unknown qualification requirement level');
    }
  };
}
