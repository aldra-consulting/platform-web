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

export type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type UnionToOverloads<U> = UnionToIntersection<
  U extends unknown ? (f: U) => void : never
>;

export type PopUnion<U> =
  UnionToOverloads<U> extends (a: infer A) => void ? A : never;

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

export type UnionToArray<T, A extends unknown[] = []> =
  IsUnion<T> extends true
    ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
    : [T, ...A];

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
