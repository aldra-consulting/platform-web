import { useResource$ } from '@builder.io/qwik';

import { type Assignment } from '@project/types';

export const useAssignments = () => {
  const resource = useResource$<Assignment[]>(async () => {
    try {
      return Promise.resolve([
        {
          id: 'assignment-1',
          client: {
            id: 'client-1',
            name: 'Client 1',
          },
          role: 'Role 1',
        },
        {
          id: 'assignment-2',
          client: {
            id: 'client-2',
            name: 'Client 2',
          },
          role: 'Role 2',
        },
        {
          id: 'assignment-3',
          client: {
            id: 'client-3',
            name: 'Client 3',
          },
          role: 'Role 3',
        },
        {
          id: 'assignment-4',
          client: {
            id: 'client-4',
            name: 'Client 4',
          },
          role: 'Role 4',
        },
        {
          id: 'assignment-5',
          client: {
            id: 'client-5',
            name: 'Client 5',
          },
          role: 'Role 5',
        },
        {
          id: 'assignment-6',
          client: {
            id: 'client-6',
            name: 'Client 6',
          },
          role: 'Role 6',
        },
        {
          id: 'assignment-7',
          client: {
            id: 'client-7',
            name: 'Client 7',
          },
          role: 'Role 7',
        },
        {
          id: 'assignment-8',
          client: {
            id: 'client-8',
            name: 'Client 8',
          },
          role: 'Role 8',
        },
        {
          id: 'assignment-9',
          client: {
            id: 'client-9',
            name: 'Client 9',
          },
          role: 'Role 9',
        },
        {
          id: 'assignment-10',
          client: {
            id: 'client-10',
            name: 'Client 10',
          },
          role: 'Role 10',
        },
      ]);
    } catch (error) {
      return [];
    }
  });

  return {
    resource,
  } as const;
};
