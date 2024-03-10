import { type Entity, type Nullable } from '@project/types';

import { MissionNotFoundError } from './errors';
import missions from './missions.json';

export default class MissionEnityService {
  // TODO: change implementation
  findMany = async (): Promise<Entity.Mission[]> => {
    try {
      return await Promise.resolve(missions as Entity.Mission[]);
    } catch (error) {
      throw new Error('Unable to list missions', { cause: error });
    }
  };

  // TODO: change implementation
  findByIdOrThrow = async (
    id: Entity.Mission['id']
  ): Promise<Entity.Mission> => {
    const mission = (missions as Entity.Mission[]).find(
      ({ id: missionId }) => missionId === id
    );

    if (!mission) {
      throw new MissionNotFoundError(id);
    }

    return Promise.resolve(mission);
  };

  // TODO: change implementation
  toggleBookmark = async (
    id: Entity.Mission['id']
  ): Promise<Nullable<Entity.Bookmark>> => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      return Math.random() > 0.5 ? await Promise.resolve({ id }) : undefined;
    } catch (error) {
      throw new Error('Unable to toggle mission bookmark', { cause: error });
    }
  };
}
