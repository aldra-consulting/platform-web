import { type Entity } from '@project/types';

const assignmentStatusOrder: Record<Entity.Assignment['status'], number> = {
  active: 2,
  concluded: 1,
  cancelled: 0,
};

export const byStatus = (
  { status: a }: Entity.Assignment,
  { status: b }: Entity.Assignment
): number => {
  const compareA = assignmentStatusOrder[a];
  const compareB = assignmentStatusOrder[b];

  if (compareA < compareB) {
    return 1;
  }

  if (compareA > compareB) {
    return -1;
  }

  return 0;
};
