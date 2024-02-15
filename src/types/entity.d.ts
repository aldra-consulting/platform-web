import { type Identifiable, type Nameable } from './common';

export namespace Entity {
  export interface Client extends Identifiable, Nameable {}
}
