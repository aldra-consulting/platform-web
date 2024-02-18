import { type Service, type Entity } from '@project/types';

export default class RoleService implements Service.Role {
  // TODO: change implementation
  apply = async (id: Entity.Role['id']): Promise<void> => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      return await Promise.resolve({ id }).then();
    } catch (error) {
      throw new Error('Unable to apply for role', { cause: error });
    }
  };

  // TODO: change implementation
  withdraw = async (id: Entity.Role['id']): Promise<void> => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      return await Promise.resolve({ id }).then();
    } catch (error) {
      throw new Error('Unable to withdraw from role', { cause: error });
    }
  };
}
