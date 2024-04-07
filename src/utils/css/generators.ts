import {
  type Functional,
  type CSS,
  type NonZero,
  type Positive,
} from '@project/types';

import { assertRequired } from '../common';
import { NumberUtil } from '../number';

export const generators = () => ({
  length: (
    unitsSupplier: Functional.Supplier<CSS.Unit.Length[]>
  ): CSS.Generators.Length => {
    const units = unitsSupplier();

    const cssGenerators = units.reduce<Partial<CSS.Generators.Length>>(
      (previous, unit) => ({
        ...previous,
        [unit]: (value: 0 | NonZero) =>
          NumberUtil.isNonZero(value)
            ? {
                value,
                unit,
              }
            : { value },
      }),
      {}
    );

    return assertRequired(cssGenerators, units);
  },
  time: (unitsSupplier: Functional.Supplier<CSS.Unit.Time[]>) => {
    const units = unitsSupplier();

    const cssGenerators = units.reduce<Partial<CSS.Generators.Time>>(
      (previous, unit) => ({
        ...previous,
        [unit]: (value: 0 | Positive) =>
          NumberUtil.isPositive(value)
            ? {
                value,
                unit,
              }
            : { value },
      }),
      {}
    ) as CSS.Generators.Time;

    return assertRequired(cssGenerators, units);
  },
});
