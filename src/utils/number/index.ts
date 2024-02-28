import {
  type Negative,
  type NonNegative,
  type NonPositive,
  type NonZero,
  type Positive,
} from '@project/types';

import { type NumberFunctions } from './types';

const isNonZero = (value: number): value is NonZero => value !== 0;

const isNonNegative = (value: number): value is NonNegative => value >= 0;

const isNegative = (value: number): value is Negative =>
  isNonZero(value) && isNonNegative(value);

const isNonPositive = (value: number): value is NonPositive => value <= 0;

const isPositive = (value: number): value is Positive =>
  isNonZero(value) && isNonNegative(value);

const negative = (value: number) => {
  if (isNegative(value)) {
    return value;
  }

  throw new Error(`"${value}" must be negative`);
};

const nonNegative = (value: number) => {
  if (isNonNegative(value)) {
    return value;
  }

  throw new Error(`"${value}" must not be non-negative`);
};

const nonPositive = (value: number) => {
  if (isNonPositive(value)) {
    return value;
  }

  throw new Error(`"${value}" must not be non-positive`);
};

const nonZero = (value: number) => {
  if (isNonZero(value)) {
    return value;
  }

  throw new Error(`"${value}" must not be equal to 0`);
};

const positive = (value: number) => {
  if (isPositive(value)) {
    return value;
  }

  throw new Error(`"${value}" must be positive`);
};

const NumberUtil = {
  isNegative,
  isNonNegative,
  isNonPositive,
  isNonZero,
  isPositive,
  negative,
  nonNegative,
  nonPositive,
  nonZero,
  positive,
} satisfies NumberFunctions;

export { NumberUtil };
