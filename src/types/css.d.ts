import { type Positive, type Negative } from './nominal';

export namespace CSS {
  interface Dimension<Value, Unit> {
    value: Value;
    unit: Unit;
  }

  type UnitValue<Unit> =
    | Dimension<Positive, Unit>
    | Dimension<Negative, Unit>
    | Dimension<0, undefined>;

  namespace Unit {
    export type Length =
      | 'cap'
      | 'ch'
      | 'em'
      | 'ex'
      | 'ic'
      | 'lh'
      | 'rcap'
      | 'rch'
      | 'rem'
      | 'rex'
      | 'ric'
      | 'rlh'
      | 'vh'
      | 'svh'
      | 'lvh'
      | 'dvh'
      | 'vw'
      | 'svw'
      | 'lvw'
      | 'dvw'
      | 'vmin'
      | 'svmin'
      | 'lvmin'
      | 'dvmin'
      | 'vmax'
      | 'svmax'
      | 'lvmax'
      | 'dvmax'
      | 'vb'
      | 'svb'
      | 'lvb'
      | 'dvb'
      | 'vi'
      | 'svi'
      | 'lvi'
      | 'dvi'
      | 'cqw'
      | 'cqh'
      | 'cqi'
      | 'cqb'
      | 'cqmin'
      | 'cqmax'
      | 'px'
      | 'cm'
      | 'mm'
      | 'Q'
      | 'in'
      | 'pc'
      | 'pt';

    export type Percentage = '%';

    export type Time = 'ms' | 's';
  }

  export type Length = UnitValue<Unit.Length>;

  export type LengthPercentage = Length | Percentage;

  export type Percentage = UnitValue<Unit.Percentage>;

  export type Time<Unit extends Unit.Time = Unit.Time> = Exclude<
    UnitValue<Unit>,
    { value: Negative }
  >;
}
