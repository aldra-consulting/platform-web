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

  export type Detail =
    | { type: 'deadline'; value: Date }
    | { type: 'commencement'; value: Date }
    | { type: 'duration'; value: string }
    | { type: 'scope'; value: number }
    | { type: 'location'; value: string };

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

  export interface Person extends Identifiable<ID.Person> {
    givenName: string;
    familyName: string;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    profilePhoto?: string;
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
    details?: Detail[];
    languageRequirements: LanguageRequirement[];
    awardCriteria: AwardCriterion[];
    bookmark?: Bookmark;
    representative: Person;
  }
}
