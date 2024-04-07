import { type Converter, type CSS } from '@project/types';

export default class implements Converter<CSS.Dimension, string> {
  convert = ({ value, unit }: CSS.Dimension): string => `${value}${unit ?? ''}`;
}
