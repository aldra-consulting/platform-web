import builder from '@sanity/image-url';

import { client } from '@project/utils/client';

export default () => ({
  image: (image: string) =>
    builder({ clientConfig: client().sanity().config() }).image(image),
});
