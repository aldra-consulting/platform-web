import { type CSS } from '@project/types';

export type TimeFunctions = {
  [Unit in NonNullable<CSS.Time['unit']>]: (
    value: CSS.Time['value']
  ) => CSS.Time<Unit>;
};
