import { type Identifiable } from '../common';
import { type ID } from '../id';

export namespace Sanity {
  export interface Document<
    Identifier extends string = string,
    Type extends string = unknown,
  > extends Identifiable<Identifier> {
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

  export namespace Document {
    export type Type = 'client';

    export interface Client extends Document<ID.Client, 'client'> {
      label: Translated[];
      description: Translated[];
    }
  }
}
