import { type Nullable } from './common';
import { type Entity } from './entity';

export namespace Service {
  export interface Assignment {
    list: () => Promise<Entity.Assignment[]>;

    get: (id: Entity.Applicant['id']) => Promise<Nullable<Entity.Assignment>>;

    toggleBookmark: (
      id: Entity.Assignment['id']
    ) => Promise<Nullable<Entity.Bookmark>>;
  }

  export interface Role {
    apply: (id: Entity.Role['id']) => Promise<void>;

    withdraw: (id: Entity.Role['id']) => Promise<void>;
  }

  export interface Client {
    list: () => Promise<Entity.Client[]>;

    get: (id: Entity.Client['id']) => Promise<Nullable<Entity.Client>>;
  }
}
