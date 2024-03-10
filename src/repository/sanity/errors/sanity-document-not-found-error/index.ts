import { type Sanity } from '@project/types';

export default class<T extends Sanity.Document> extends Error {
  constructor(id: T['id'], type: T['_type'], options?: ErrorOptions) {
    super(
      `Unable to find document of type '${String(type)}' with ID '${id}'`,
      options
    );

    this.name = 'SanityDocumentNotFoundError';
  }
}
