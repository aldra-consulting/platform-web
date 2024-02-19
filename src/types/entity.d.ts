import { type Identifiable, type Nameable, type LanguageCode } from './common';

export namespace Entity {
  export interface User extends Identifiable, Nameable {}

  export interface Client extends Identifiable, Nameable {}

  export interface Bookmark extends Identifiable {}

  export interface Applicant extends Identifiable {}

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

  export interface Role extends Identifiable, Nameable {
    status: 'open' | 'review' | 'filled';
    description?: string;
    qualificationRequirements: (
      | MustQualificationRequirement
      | ShouldQualificationRequirement
    )[];
    applicant?: Applicant;
  }

  export interface Assignment extends Identifiable, Nameable {
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
  }
}
