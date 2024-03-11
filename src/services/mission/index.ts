import { MissionSanityRepository } from '@project/repository';
import {
  type Sanity,
  type Entity,
  type Repository,
  type Converter,
  type Nullable,
  type ID,
} from '@project/types';

export default class MissionEnityService {
  #repository: Repository<Sanity.Document.Mission>;

  #converter: Converter<Sanity.Document.Mission, Entity.Mission>;

  constructor(
    repository: Repository<Sanity.Document.Mission>,
    converter: Converter<Sanity.Document.Mission, Entity.Mission>
  ) {
    this.#repository = repository;
    this.#converter = converter;
  }

  findMany = async (): Promise<Entity.Mission[]> =>
    (await this.#repository.findMany()).map(this.#converter.convert);

  findByIdOrThrow = async (id: Entity.Mission['id']): Promise<Entity.Mission> =>
    this.#repository.findByIdOrThrow(id).then(this.#converter.convert);

  findManyForClient = async (id: ID.Client): Promise<Entity.Mission[]> =>
    this.#repository instanceof MissionSanityRepository
      ? (await this.#repository.findManyForClient(id)).map(
          this.#converter.convert
        )
      : [];

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
