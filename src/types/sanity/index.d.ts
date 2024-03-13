import { type Identifiable } from '../common';
import { type ID } from '../id';

export namespace Sanity {
  export interface Document<
    Identifier extends string = string,
    Type extends Document.Type = unknown,
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
    export type Type =
      | 'client'
      | 'mission'
      | 'language'
      | 'commonReferenceLevel';

    export interface Language extends Document<ID.Language, 'language'> {
      code: 'no' | 'en';
      label: Translated[];
    }

    export interface CommonReferenceLevel
      extends Document<ID.CommonReferenceLevel, 'commonReferenceLevel'> {
      value: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    }

    export interface Client extends Document<ID.Client, 'client'> {
      label: Translated[];
      description: Translated[];
    }

    export interface Mission extends Document<ID.Mission, 'mission'> {
      label: Translated[];
      description: Translated[];
      client: Client;
      status: 'active' | 'concluded' | 'cancelled';
      brief: Translated[];
      languageRequirements: Object.LanguageRequirement[];
      awardCriteria: Object.AwardCriterion[];
    }
  }

  export namespace Object {
    export interface LanguageRequirement {
      language: Document.Language;
      proficiency: Document.CommonReferenceLevel;
    }

    export interface AwardCriterion {
      criterion: 'quality' | 'price';
      weight: number;
    }
  }
}
