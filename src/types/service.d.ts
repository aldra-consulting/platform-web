import { type Nullable } from './common';
import { type Entity } from './entity';

export namespace Service {
  export interface Assignment {
    list: () => Promise<Entity.Assignment[]>;

    toggleBookmark: (
      id: Entity.Assignment['id']
    ) => Promise<Nullable<Entity.Bookmark>>;
  }

  export interface Role {
    apply: (id: Entity.Role['id']) => Promise<void>;

    withdraw: (id: Entity.Role['id']) => Promise<void>;
  }
}
