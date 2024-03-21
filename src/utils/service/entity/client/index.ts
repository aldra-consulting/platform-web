import { SanityClientDocumentToClientEntityConverter } from '@project/converters';
import { ClientSanityRepository } from '@project/repository';
import { ClientEntityService } from '@project/services';
import { client } from '@project/utils/client';

export default () =>
  new ClientEntityService(
    new ClientSanityRepository(client().sanity()),
    new SanityClientDocumentToClientEntityConverter()
  );
