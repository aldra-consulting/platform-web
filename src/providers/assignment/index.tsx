import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import {
  AssignmentContext,
  type AssignmentStore as Store,
} from '@project/context';
import { AssignmentEntityService } from '@project/services';
import { type Entity } from '@project/types';

export interface Props {
  assignment: Entity.Assignment;
}

const service = new AssignmentEntityService();

export default component$<Props>(({ assignment }) => {
  const store = useStore<Store>({
    assignment,
    isActive: assignment.status === 'active',
    toggleBookmark: $(async function run(this: Store) {
      try {
        this.assignment.bookmark =
          (await service.toggleBookmark(this.assignment.id)) ?? undefined;
      } catch (error) {
        // TODO: handle errors
      }
    }),
  });

  useContextProvider(AssignmentContext, store);

  return <Slot />;
});
