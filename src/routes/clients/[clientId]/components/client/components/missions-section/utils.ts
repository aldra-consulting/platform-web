import { type Entity } from '@project/types';

const missionStatusOrder: Record<Entity.Mission['status'], number> = {
  active: 2,
  concluded: 1,
  cancelled: 0,
};

export const byStatus = (
  { status: a }: Entity.Mission,
  { status: b }: Entity.Mission
): number => {
  const compareA = missionStatusOrder[a];
  const compareB = missionStatusOrder[b];

  if (compareA < compareB) {
    return 1;
  }

  if (compareA > compareB) {
    return -1;
  }

  return 0;
};
