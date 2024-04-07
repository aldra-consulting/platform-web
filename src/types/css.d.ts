import { type Nullable } from './common';
import { type NonZero, type Positive } from './nominal';

export namespace CSS {
  interface Dimension<
    Value extends number = number,
    Unit extends Nullable<string> = Nullable<string>,
  > {
    value: Value;
    unit: Unit;
  }

  export namespace Unit {
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

  export namespace DataType {
    export type Length<Unit extends Unit.Length = Unit.Length> =
      | Dimension<0>
      | Dimension<NonZero, Unit>;

    export type Time<Unit extends Unit.Time = Unit.Time> =
      | Dimension<0>
      | Dimension<Positive, Unit>;
  }

  export namespace Generators {
    export type Length = {
      [Unit in Unit.Length]: <Value extends 0 | NonZero>(
        value: Value
      ) => Value extends 0 | NonZero
        ? Value extends 0
          ? Dimension<0>
          : Dimension<NonZero, Unit>
        : never;
    };

    export type Time = {
      [Unit in Unit.Time]: <Value extends 0 | Positive>(
        value: Value
      ) => Value extends 0 | Positive
        ? Value extends 0
          ? Dimension<0>
          : Dimension<Positive, Unit>
        : never;
    };
  }
}
