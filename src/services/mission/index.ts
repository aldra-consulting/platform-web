import { type GraphQLClient, gql } from 'graphql-request';

import { MissionSanityRepository } from '@project/repository';
import {
  type Sanity,
  type Entity,
  type Repository,
  type Converter,
  type Nullable,
  type ID,
  type Functional,
} from '@project/types';

export default class MissionEnityService {
  #repository: Repository<Sanity.Document.Mission>;

  #converter: Converter<Sanity.Document.Mission, Entity.Mission>;

  #tokenSupplier: Functional.Supplier<Promise<string>>;

  #graphqlClientSupplier: Functional.Function<
    Functional.Supplier<Promise<string>>,
    GraphQLClient
  >;

  constructor(
    repository: Repository<Sanity.Document.Mission>,
    converter: Converter<Sanity.Document.Mission, Entity.Mission>,
    tokenSupplier: Functional.Supplier<Promise<string>>,
    graphqlClientSupplier: Functional.Function<
      Functional.Supplier<Promise<string>>,
      GraphQLClient
    >
  ) {
    this.#repository = repository;
    this.#converter = converter;
    this.#tokenSupplier = tokenSupplier;
    this.#graphqlClientSupplier = graphqlClientSupplier;
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
  ): Promise<Nullable<boolean>> => {
    try {
      await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(id);
        }, 500);
      });

      return Math.random() > 0.5;
    } catch (error) {
      throw new Error('Unable to toggle mission bookmark', { cause: error });
    }
  };

  #listBookmarks = async (): Promise<ID.Mission[]> =>
    this.#graphqlClientSupplier(this.#tokenSupplier)
      .request<{
        bookmarks: ID.Mission[];
      }>(gql`
        query ListBookmarks {
          bookmarks: listBookmarks
        }
      `)
      .then(({ bookmarks }) => bookmarks);
}
