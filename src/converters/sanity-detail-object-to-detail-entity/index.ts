import { type Entity, type Converter } from '@project/types';
import { type Sanity } from '@project/types/sanity';

export default class implements Converter<Sanity.Object.Detail, Entity.Detail> {
  convert = (detail: Sanity.Object.Detail): Entity.Detail => {
    switch (detail.type) {
      case 'deadline':
        return {
          type: detail.type,
          value: new Date(detail.value),
        };
      case 'commencement':
        return {
          type: detail.type,
          value: new Date(detail.value),
        };
      case 'duration':
        return {
          type: detail.type,
          value: detail.value.find(({ _key }) => _key === 'no')?.value ?? '',
        };
      case 'scope':
        return {
          type: detail.type,
          value: detail.value,
        };
      case 'location':
        return {
          type: detail.type,
          value: detail.value.find(({ _key }) => _key === 'no')?.value ?? '',
        };
      default:
        throw new Error('Unknown detail type');
    }
  };
}
