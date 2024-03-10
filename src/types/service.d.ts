import { type Nullable } from './common';
import { type Entity } from './entity';

export namespace Service {
  export interface ForEntity<T> {
    findMany: () => Promise<T[]>;
  }

  export interface Mission {
    list: () => Promise<Entity.Mission[]>;

    get: (id: Entity.Mission['id']) => Promise<Nullable<Entity.Mission>>;

    findByIdOrThrow: (id: Entity.Mission['id']) => Promise<Entity.Mission>;

    toggleBookmark: (
      id: Entity.Mission['id']
    ) => Promise<Nullable<Entity.Bookmark>>;
  }

  export interface Role {
    apply: (id: Entity.Role['id']) => Promise<void>;

    withdraw: (id: Entity.Role['id']) => Promise<void>;
  }
}
