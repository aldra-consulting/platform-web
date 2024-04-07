import { generators } from './generators';
import { units } from './units';

const CSSUtil = {
  length: () => generators().length(() => units().length()),
  time: () => generators().time(() => units().time()),
} as const;

export { CSSUtil };
