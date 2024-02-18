import { type Identifiable, type Nameable, type LanguageCode } from './common';

export namespace Entity {
  export interface User extends Identifiable, Nameable {}

  export interface Client extends Identifiable, Nameable {}

  export interface Bookmark extends Identifiable {}

  export interface Applicant extends Identifiable {}

  export interface Language extends Identifiable<LanguageCode>, Nameable {
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  }

  export interface Role extends Identifiable, Nameable {
    status: 'open' | 'review' | 'filled';
    applicant?: Applicant;
  }

  export interface Assignment extends Identifiable, Nameable {
    client: Client;
    status: 'active' | 'concluded' | 'cancelled';
    roles: Role[];
    brief?: string;
    description?: string;
    languages?: Language[];
    bookmark?: Bookmark;
  }
}
