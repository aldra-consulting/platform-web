import { type CSS } from '@project/types';

export const units = () => ({
  length: (): CSS.Unit.Length[] =>
    [
      'cap',
      'ch',
      'em',
      'ex',
      'ic',
      'lh',
      'rcap',
      'rch',
      'rem',
      'rex',
      'ric',
      'rlh',
      'vh',
      'svh',
      'lvh',
      'dvh',
      'vw',
      'svw',
      'lvw',
      'dvw',
      'vmin',
      'svmin',
      'lvmin',
      'dvmin',
      'vmax',
      'svmax',
      'lvmax',
      'dvmax',
      'vb',
      'svb',
      'lvb',
      'dvb',
      'vi',
      'svi',
      'lvi',
      'dvi',
      'cqw',
      'cqh',
      'cqi',
      'cqb',
      'cqmin',
      'cqmax',
      'px',
      'cm',
      'mm',
      'Q',
      'in',
      'pc',
      'pt',
    ] as const,
  time: (): CSS.Unit.Time[] => ['ms', 's'] as const,
});
