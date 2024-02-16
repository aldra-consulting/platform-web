import { type Service, type Entity, type Nullable } from '@project/types';

import assignments from './assignments.json';

export default class AssignmentService implements Service.Assignment {
  // TODO: change implementation
  list = async (): Promise<Entity.Assignment[]> => {
    try {
      return await Promise.resolve(assignments as Entity.Assignment[]);
    } catch (error) {
      throw new Error('Unable to list assignments', { cause: error });
    }
  };

  // TODO: change implementation
  toggleBookmark = async (
    id: Entity.Assignment['id']
  ): Promise<Nullable<Entity.Bookmark>> => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      return Math.random() > 0.5 ? await Promise.resolve({ id }) : undefined;
    } catch (error) {
      throw new Error('Unable to toggle assignment bookmark', { cause: error });
    }
  };
}
