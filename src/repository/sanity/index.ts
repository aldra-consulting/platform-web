import { type SanityClient } from '@sanity/client';

import { type Repository, type Sanity } from '@project/types';

export default abstract class SanityRepository<T extends Sanity.Document>
  implements Repository<T>
{
  protected abstract type: Sanity.Document.Type;

  protected client: SanityClient;

  constructor(client: SanityClient) {
    this.client = client;
  }

  abstract findMany: () => Promise<T[]>;

  abstract findByIdOrThrow: (id: T['id']) => Promise<T>;
}
