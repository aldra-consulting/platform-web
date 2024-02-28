import { type CSS, type Converter } from '@project/types';

export class CssTimeToStringConverter implements Converter<CSS.Time, string> {
  convert = ({ value, unit }: CSS.Time): string => `${value}${unit ?? ''}`;
}
