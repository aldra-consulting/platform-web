import { type Entity } from './entity';

export namespace Service {
  export interface ForEntity<T> {
    findMany: () => Promise<T[]>;
  }

  export interface Role {
    apply: (id: Entity.Role['id']) => Promise<void>;

    withdraw: (id: Entity.Role['id']) => Promise<void>;
  }
}
