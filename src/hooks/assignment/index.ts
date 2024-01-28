import { useResource$ } from '@builder.io/qwik';

import { type Assignment } from '@project/types';

export const useAssignment = (id: string) => {
  const resource = useResource$<Assignment | null>(async () => {
    try {
      return Promise.resolve({
        id: `assignment-${id}`,
        client: {
          id: `client-${id}`,
          name: `Client ${id}`,
        },
        role: `Role ${id}`,
      });
    } catch (error) {
      return null;
    }
  });

  return {
    resource,
  } as const;
};
