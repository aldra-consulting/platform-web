import groq from 'groq';

import { type Sanity } from '@project/types';
import { isDefined } from '@project/utils/common';

import SanityRepository from '..';
import { SanityDocumentNotFoundError } from '../errors';

export default class MissionSanityRepository extends SanityRepository<Sanity.Document.Mission> {
  protected type = 'mission' as const;

  findMany = async (): Promise<Sanity.Document.Mission[]> => {
    try {
      const query = groq`
        *[_type == $type] {
          ...,
          "id": _id,
          client-> {
            ...,
            "id": _id
          }
        }
      `;

      return await this.client.fetch<Sanity.Document.Mission[]>(query, {
        type: this.type,
      });
    } catch (error) {
      throw new Error(`Unable to find documents of type '${this.type}'`, {
        cause: error,
      });
    }
  };

  findByIdOrThrow = async (
    id: Sanity.Document.Mission['id']
  ): Promise<Sanity.Document.Mission> => {
    const query = groq`
      *[_type == $type && _id == $id] {
        ...,
        "id": _id,
        client-> {
          ...,
          "id": _id
        }
      }
    `;

    const [document] = await this.client.fetch<[Sanity.Document.Mission]>(
      query,
      { type: this.type, id }
    );

    if (!isDefined(document)) {
      throw new SanityDocumentNotFoundError<Sanity.Document.Mission>(
        id,
        this.type
      );
    }

    return document;
  };
}
