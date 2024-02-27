import { useContext } from '@builder.io/qwik';

import { AssignmentContext } from '@project/context';

export const useAssignmentContext = () => useContext(AssignmentContext);
