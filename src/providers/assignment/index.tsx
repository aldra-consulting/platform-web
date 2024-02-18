import {
  $,
  component$,
  useContextProvider,
  useStore,
  Slot,
} from '@builder.io/qwik';

import { AssignmentContext, type AssignmentStore } from '@project/context';
import { AssignmentService } from '@project/services';
import { type Entity } from '@project/types';

export interface Props {
  assignment: Entity.Assignment;
}

const service = new AssignmentService();

export default component$<Props>(({ assignment }) => {
  useContextProvider(
    AssignmentContext,
    useStore<AssignmentStore>({
      assignment,
      isActive: assignment.status === 'active',
      toggleBookmark: $(async function run(this: AssignmentStore) {
        try {
          this.assignment.bookmark =
            (await service.toggleBookmark(this.assignment.id)) ?? undefined;
        } catch (error) {
          // TODO: handle errors
        }
      }),
    })
  );

  return <Slot />;
});
