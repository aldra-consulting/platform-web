import { type Converter } from '@project/types';

import { type Time } from './types';

export class TimeToStringConverter implements Converter<Time, string> {
  convert = ({ value, unit }: Time): string => `${value}${unit}`;
}
