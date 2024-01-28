import { useResource$ } from '@builder.io/qwik';

import { type Assignment } from '@project/types';

export const useAssignments = () => {
  const resource = useResource$<Assignment[]>(async () => {
    try {
      return Promise.resolve([
        {
          id: 'assignment-1',
          assignor: {
            id: 'assignor-1',
            name: 'Assignor 1',
          },
          role: 'Role 1',
        },
        {
          id: 'assignment-2',
          assignor: {
            id: 'assignor-2',
            name: 'Assignor 2',
          },
          role: 'Role 2',
        },
        {
          id: 'assignment-3',
          assignor: {
            id: 'assignor-3',
            name: 'Assignor 3',
          },
          role: 'Role 3',
        },
        {
          id: 'assignment-4',
          assignor: {
            id: 'assignor-4',
            name: 'Assignor 4',
          },
          role: 'Role 4',
        },
        {
          id: 'assignment-5',
          assignor: {
            id: 'assignor-5',
            name: 'Assignor 5',
          },
          role: 'Role 5',
        },
        {
          id: 'assignment-6',
          assignor: {
            id: 'assignor-6',
            name: 'Assignor 6',
          },
          role: 'Role 6',
        },
        {
          id: 'assignment-7',
          assignor: {
            id: 'assignor-7',
            name: 'Assignor 7',
          },
          role: 'Role 7',
        },
        {
          id: 'assignment-8',
          assignor: {
            id: 'assignor-8',
            name: 'Assignor 8',
          },
          role: 'Role 8',
        },
        {
          id: 'assignment-9',
          assignor: {
            id: 'assignor-9',
            name: 'Assignor 9',
          },
          role: 'Role 9',
        },
        {
          id: 'assignment-10',
          assignor: {
            id: 'assignor-10',
            name: 'Assignor 10',
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
