import { GraphQLClient } from 'graphql-request';

import env from '@project/env';
import { type Functional } from '@project/types';

export default () => {
  const { GRAPHQL_API_URL: url } = env();

  return (tokenSupplier: Functional.Supplier<Promise<string>>) =>
    new GraphQLClient(url, {
      requestMiddleware: async (request) => ({
        ...request,
        headers: {
          ...request.headers,
          authorization: await tokenSupplier(),
        },
      }),
    });
};
