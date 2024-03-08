export namespace Sanity {
  interface Document<Identifier extends string = string, Type> {
    _id: Identifier;
    _type: Type;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
  }

  export interface Translated<Value = string> {
    _key: 'no' | 'en';
    value: Value;
  }

  export namespace Document {}
}
