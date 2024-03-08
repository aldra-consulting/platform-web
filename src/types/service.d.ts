import { type Nullable } from './common';
import { type Entity } from './entity';

export namespace Service {
  export interface ForEntity<T> {
    findMany: () => Promise<T[]>;
  }

  export interface Assignment {
    list: () => Promise<Entity.Assignment[]>;

    get: (id: Entity.Assignment['id']) => Promise<Nullable<Entity.Assignment>>;

    findByIdOrThrow: (
      id: Entity.Assignment['id']
    ) => Promise<Entity.Assignment>;

    toggleBookmark: (
      id: Entity.Assignment['id']
    ) => Promise<Nullable<Entity.Bookmark>>;
  }

  export interface Role {
    apply: (id: Entity.Role['id']) => Promise<void>;

    withdraw: (id: Entity.Role['id']) => Promise<void>;
  }

  export interface Client {
    get: (id: Entity.Client['id']) => Promise<Nullable<Entity.Client>>;
  }
}
