import { type Identifiable, type Nameable } from './common';

export namespace Entity {
  export interface User extends Identifiable, Nameable {}

  export interface Client extends Identifiable, Nameable {}

  export interface Bookmark extends Identifiable {}

  export interface Assignment extends Identifiable, Nameable {
    client: Client;
    status: 'active' | 'concluded' | 'cancelled';
    brief?: string;
    bookmark?: Bookmark;
  }
}
