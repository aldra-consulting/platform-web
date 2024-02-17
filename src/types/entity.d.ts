import { type Identifiable, type Nameable } from './common';

export namespace Entity {
  export interface User extends Identifiable, Nameable {}

  export interface Client extends Identifiable, Nameable {}

  export interface Bookmark extends Identifiable {}

  export interface Applicant extends Identifiable {}

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
    bookmark?: Bookmark;
  }
}
