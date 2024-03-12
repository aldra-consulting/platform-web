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

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export interface Identifiable<ID extends Hashable = string> {
  id: ID;
}

export interface Nameable<Container = string> {
  name: Container;
}

export interface Labelled<Container = string> {
  label: Container;
}

export interface Described<Container = string> {
  description: Container;
}

export type Flatten<Type> = Type extends (infer Item)[] ? Item : Type;

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

export type CommonReferenceLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
