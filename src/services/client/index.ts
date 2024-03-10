import {
  type Sanity,
  type Entity,
  type Repository,
  type Converter,
} from '@project/types';

export default class ClientEntityService {
  #repository: Repository<Sanity.Document.Client>;

  #converter: Converter<Sanity.Document.Client, Entity.Client>;

  constructor(
    repository: Repository<Sanity.Document.Client>,
    converter: Converter<Sanity.Document.Client, Entity.Client>
  ) {
    this.#repository = repository;
    this.#converter = converter;
  }

  findMany = async (): Promise<Entity.Client[]> =>
    (await this.#repository.findMany()).map(this.#converter.convert);

  findByIdOrThrow = async (id: Entity.Client['id']): Promise<Entity.Client> =>
    this.#repository.findByIdOrThrow(id).then(this.#converter.convert);
}
