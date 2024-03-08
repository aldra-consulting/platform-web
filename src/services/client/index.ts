import { type Service, type Entity, type Nullable } from '@project/types';

import EntityService from '../entity';

import clients from './clients.json';

export default class ClientEntityService
  extends EntityService<Entity.Client>
  implements Service.Client
{
  protected entity = 'client' as const;

  // TODO: change implementation
  findMany = async (): Promise<Entity.Client[]> => {
    try {
      return Promise.resolve(clients as Entity.Client[]);
    } catch (error) {
      throw new Error(`Unable to list entities of type '${this.entity}'`, {
        cause: error,
      });
    }
  };

  // TODO: change implementation
  get = async (id: Entity.Client['id']): Promise<Nullable<Entity.Client>> => {
    try {
      return await Promise.resolve(
        (clients as Entity.Client[]).find((client) => client.id === id)
      );
    } catch (error) {
      throw new Error('Unable to find client', { cause: error });
    }
  };
}
