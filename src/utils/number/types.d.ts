import {
  type Negative,
  type NonNegative,
  type NonPositive,
  type NonZero,
  type Positive,
} from '@project/types';

export interface NumberFunctions {
  isNegative: (value: number) => value is Negative;
  isNonNegative: (value: number) => value is NonNegative;
  isNonPositive: (value: number) => value is NonPositive;
  isNonZero: (value: number) => value is NonZero;
  isPositive: (value: number) => value is Positive;
  negative: (value: number) => Negative;
  nonNegative: (value: number) => NonNegative;
  nonPositive: (value: number) => NonPositive;
  nonZero: (value: number) => NonZero;
  positive: (value: number) => Positive;
}
