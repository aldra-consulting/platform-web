import { type Identifiable, type Labelled, type Described } from '../common';
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
      | 'commonReferenceLevel'
      | 'criterion'
      | 'person';

    export interface Language
      extends Document<ID.Language, 'language'>,
        Labelled<Translated[]> {
      code: 'no' | 'en';
    }

    export interface CommonReferenceLevel
      extends Document<ID.CommonReferenceLevel, 'commonReferenceLevel'> {
      value: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    }

    export interface Criterion
      extends Document<ID.Criterion, 'criteion'>,
        Labelled<Translated[]> {
      type: 'quality' | 'price';
    }

    export interface Person extends Document<ID.Person, 'person'> {
      givenName: string;
      familyName: string;
      emailAddress: string;
      phoneNumber: string;
      profilePhoto?: string;
    }

    export interface Client
      extends Document<ID.Client, 'client'>,
        Labelled<Translated[]>,
        Described<Translated[]> {}

    export interface Mission
      extends Document<ID.Mission, 'mission'>,
        Labelled<Translated[]>,
        Described<Translated[]> {
      client: Client;
      status: 'active' | 'concluded' | 'cancelled';
      brief: Translated[];
      roles: Object.Role[];
      details: Object.Detail[];
      languageRequirements: Object.LanguageRequirement[];
      awardCriteria: Object.AwardCriterion[];
      representative: Person;
    }
  }

  export namespace Object {
    export interface LanguageRequirement {
      language: Document.Language;
      proficiency: Document.CommonReferenceLevel;
    }

    export interface AwardCriterion {
      criterion: Document.Criterion;
      weight: number;
    }

    export type Detail =
      | { type: 'deadline'; value: string }
      | { type: 'commencement'; value: string }
      | { type: 'duration'; value: Translated[] }
      | { type: 'scope'; value: number }
      | { type: 'location'; value: Translated[] };

    export type QualificationRequirement =
      Identifiable<ID.QualificationRequirement> &
        Labelled &
        Described<Translated[]> &
        ({ level: 'must' } | { level: 'should'; weight?: number });

    export interface Role
      extends Identifiable<ID.Role>,
        Labelled<Translated[]>,
        Described<Translated[]> {
      status: 'open' | 'review' | 'filled';
      qualificationRequirements: QualificationRequirement[];
    }
  }
}
