import { type CSS, type Converter } from '@project/types';

export class CssTimeToStringConverter
  implements Converter<CSS.DataType.Time, string>
{
  convert = ({ value, unit }: CSS.DataType.Time): string =>
    `${value}${unit ?? ''}`;
}
