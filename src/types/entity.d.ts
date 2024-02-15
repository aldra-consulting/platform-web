import { type Identifiable, type Nameable } from './common';

export namespace Entity {
  export interface Client extends Identifiable, Nameable {}

  export interface Assignment extends Identifiable {
    client: Client;
    role: string;
    status: 'active' | 'concluded' | 'cancelled';
  }
}
