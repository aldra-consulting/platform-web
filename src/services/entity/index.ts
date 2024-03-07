import { type Service } from '@project/types';

export default abstract class EntityService<T> implements Service.ForEntity<T> {
  protected abstract entity: string;

  abstract findMany: () => Promise<T[]>;
}
