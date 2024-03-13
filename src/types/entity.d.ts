import {
  type Identifiable,
  type Nameable,
  type Labelled,
  type Described,
  type LanguageCode,
  type CommonReferenceLevel,
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

  export interface Language extends Identifiable<LanguageCode>, Labelled {}

  export interface LanguageRequirement {
    language: Language;
    proficiency: CommonReferenceLevel;
  }

  export interface Criterion extends Identifiable<ID.Criterion>, Labelled {
    type: 'quality' | 'price';
  }

  export interface AwardCriterion {
    criterion: Criterion;
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

  export interface Mission
    extends Identifiable<ID.Mission>,
      Labelled,
      Described {
    client: Client;
    status: 'active' | 'concluded' | 'cancelled';
    brief: string;
    roles: Role[];
    details?: (
      | DeadlineDetail
      | CommencementDetail
      | DurationDetail
      | ScopeDetail
      | LocationDetail
    )[];
    languageRequirements: LanguageRequirement[];
    awardCriteria?: AwardCriterion[];
    bookmark?: Bookmark;
    representative?: Representative;
  }
}
