import groq from 'groq';

import { type Sanity } from '@project/types';
import { isDefined } from '@project/utils/common';

import SanityRepository from '..';
import { SanityDocumentNotFoundError } from '../errors';

export default class ClientSanityRepository extends SanityRepository<Sanity.Document.Client> {
  protected type = 'client' as const;

  findMany = async (): Promise<Sanity.Document.Client[]> => {
    try {
      const query = groq`
        *[_type == $type] {
          ...,
          "id": _id
        }
      `;

      return await this.client.fetch<Sanity.Document.Client[]>(query, {
        type: this.type,
      });
    } catch (error) {
      throw new Error(`Unable to find documents of type '${this.type}'`, {
        cause: error,
      });
    }
  };

  findByIdOrThrow = async (
    id: Sanity.Document.Client['id']
  ): Promise<Sanity.Document.Client> => {
    const query = groq`
      *[_type == $type && _id == $id] {
        ...,
        "id": _id
      }
    `;

    const [document] = await this.client.fetch<[Sanity.Document.Client]>(
      query,
      { type: this.type, id }
    );

    if (!isDefined(document)) {
      throw new SanityDocumentNotFoundError<Sanity.Document.Client>(
        id,
        this.type
      );
    }

    return document;
  };
}
