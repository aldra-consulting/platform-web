import { type Entity, type Nullable } from '@project/types';

export default class AssignmentService {
  toggleBookmark = async (
    id: Entity.Assignment['id']
  ): Promise<Nullable<Entity.Bookmark>> => {
    // TODO: change implementation
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
