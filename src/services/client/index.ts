import { type Service, type Entity, type Nullable } from '@project/types';

import clients from './clients.json';

export default class ClientService implements Service.Client {
  // TODO: change implementation
  list = async (): Promise<Entity.Client[]> => {
    try {
      return await Promise.resolve(clients as Entity.Client[]);
    } catch (error) {
      throw new Error('Unable to list clients', { cause: error });
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
