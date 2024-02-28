import { NumberUtil } from '../number';

import { type TimeFunctions } from './types';

const CSSUtil = {
  time: {
    ms: (value) =>
      NumberUtil.isPositive(value)
        ? {
            value,
            unit: 'ms',
          }
        : { value },
    s: (value) =>
      NumberUtil.isPositive(value)
        ? {
            value,
            unit: 's',
          }
        : { value },
  } satisfies TimeFunctions,
} as const;

export { CSSUtil };
