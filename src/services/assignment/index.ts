import { type Service, type Entity, type Nullable } from '@project/types';

import assignments from './assignments.json';
import { AssignmentNotFoundError } from './errors';

export default class AssignmentEnityService implements Service.Assignment {
  // TODO: change implementation
  list = async (): Promise<Entity.Assignment[]> => {
    try {
      return await Promise.resolve(assignments as Entity.Assignment[]);
    } catch (error) {
      throw new Error('Unable to list assignments', { cause: error });
    }
  };

  // TODO: change implementation
  get = async (
    id: Entity.Assignment['id']
  ): Promise<Nullable<Entity.Assignment>> => {
    try {
      return await Promise.resolve(
        (assignments as Entity.Assignment[]).find(
          (assignment) => assignment.id === id
        )
      );
    } catch (error) {
      throw new Error('Unable to find assignment', { cause: error });
    }
  };

  // TODO: change implementation
  findByIdOrThrow = async (
    id: Entity.Assignment['id']
  ): Promise<Entity.Assignment> => {
    const assignment = (assignments as Entity.Assignment[]).find(
      ({ id: assignmentId }) => assignmentId === id
    );

    if (!assignment) {
      throw new AssignmentNotFoundError(id);
    }

    return Promise.resolve(assignment);
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
