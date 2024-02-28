export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | null
  | symbol
  | undefined;

export type Hashable = NonNullable<Primitive>;

export type Nullable<T = never> = T | null | undefined;

export interface Identifiable<ID extends Hashable = string> {
  id: ID;
}

export interface Nameable<Container = string> {
  name: Container;
}

export interface Labelled<Container = string> {
  label: Container;
}

export type Flatten<Type> = Type extends (infer Item)[] ? Item : Type;

interface Dimension<Value, Unit> {
  value: Value;
  unit: Unit;
}

export interface Converter<Source, Target> {
  convert(source: Source): Target;
}

export interface Parser<Source extends string, Target> {
  parse(value: Source): Target;
}

export interface Formatter<Source, Target = string> {
  format(value: Source): Target;
}

export type LanguageCode = 'no' | 'en';

export type Supplier<Value = unknown> = () => Value;
