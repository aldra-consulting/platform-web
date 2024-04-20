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

  findWithBookmarkByIdOrThrow = async (
    id: Entity.Mission['id']
  ): Promise<Entity.Mission> =>
    Promise.all([
      this.#repository.findByIdOrThrow(id),
      this.#listBookmarks(),
    ]).then(([mission, bookmarks]) => ({
      ...this.#converter.convert(mission),
      isBookmarked: bookmarks.includes(mission.id),
    }));

  findManyForClientWithBookmarks = async (
    id: ID.Client
  ): Promise<Entity.Mission[]> =>
    this.#repository instanceof MissionSanityRepository
      ? Promise.all([
          this.#repository.findManyForClient(id),
          this.#listBookmarks(),
        ]).then(([missions, bookmarks]) =>
          missions.map(this.#converter.convert).map((mission) => ({
            ...mission,
            isBookmarked: bookmarks.includes(mission.id),
          }))
        )
      : [];

  findManyWithBookmarks = async (): Promise<Entity.Mission[]> =>
    Promise.all([this.#repository.findMany(), this.#listBookmarks()]).then(
      ([missions, bookmarks]) =>
        missions.map(this.#converter.convert).map((mission) => ({
          ...mission,
          isBookmarked: bookmarks.includes(mission.id),
        }))
    );

  toggleBookmark = async (
    id: Entity.Mission['id']
  ): Promise<Nullable<boolean>> => {
    try {
      const mutation = gql`
        mutation ToggleBookmark($input: ToggleBookmarkInput!) {
          isBookmarked: toggleBookmark(input: $input)
        }
      `;

      return await this.#graphqlClientSupplier(this.#tokenSupplier)
        .request<{
          isBookmarked: Nullable<boolean>;
        }>(mutation, {
          input: { missionId: id },
        })
        .then(({ isBookmarked }) => isBookmarked);
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
