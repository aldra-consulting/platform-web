import {
  type Identifiable,
  type Nameable,
  type Labelled,
  type Described,
  type LanguageCode,
} from './common';
import { type ID } from './id';

export namespace Entity {
  export interface User extends Identifiable, Nameable {}

  export interface Client
    extends Identifiable<ID.Client>,
      Labelled,
      Described {}

  export interface Bookmark extends Identifiable {}

  export interface Applicant extends Identifiable {}

  export interface Skill extends Identifiable, Nameable {}

  export interface Detail<Type extends string, Value> extends Nameable {
    type: Type;
    value: Value;
  }

  export type DeadlineDetail = Detail<'deadline', 'string'>;

  export type CommencementDetail = Detail<'commencement', 'string'>;

  export type DurationDetail = Detail<'duration', 'string'>;

  export type ScopeDetail = Detail<'scope', 'string'>;

  export type LocationDetail = Detail<'location', 'string'>;

  export interface Language extends Identifiable<LanguageCode>, Nameable {
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  }

  export interface AwardCriterion
    extends Identifiable<'quality' | 'price'>,
      Nameable {
    weight: number;
  }

  export interface QualificationRequirement extends Identifiable {
    description: string;
  }

  export interface MustQualificationRequirement
    extends QualificationRequirement {
    level: 'MUST';
  }

  export interface ShouldQualificationRequirement
    extends QualificationRequirement {
    level: 'SHOULD';
    weight?: number;
  }

  export interface Representative extends Identifiable, Nameable {
    phone?: string;
    email?: string;
    imageUrl?: string;
  }

  export interface Role extends Identifiable, Nameable {
    status: 'open' | 'review' | 'filled';
    description?: string;
    qualificationRequirements: (
      | MustQualificationRequirement
      | ShouldQualificationRequirement
    )[];
    skills?: Skill[];
    applicant?: Applicant;
  }

  export interface Mission extends Identifiable<ID.Mission>, Nameable {
    client: Client;
    status: 'active' | 'concluded' | 'cancelled';
    roles: Role[];
    brief?: string;
    description?: string;
    details?: (
      | DeadlineDetail
      | CommencementDetail
      | DurationDetail
      | ScopeDetail
      | LocationDetail
    )[];
    languages?: Language[];
    awardCriteria?: AwardCriterion[];
    bookmark?: Bookmark;
    representative?: Representative;
  }
}
