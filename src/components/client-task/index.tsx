import { type JSXOutput } from '@builder.io/qwik';

import { type ClientTask } from '@project/hooks';

interface Props {
  task: ClientTask;
  onPending?: () => JSXOutput;
  onIdle: () => JSXOutput;
  onRejected?: (error: Error) => JSXOutput;
}

export default ({ task, onPending, onIdle, onRejected }: Props) => {
  switch (task.status) {
    case 'pending':
      return onPending ? <>{onPending()}</> : null;
    case 'idle':
      return <>{onIdle()}</>;
    case 'rejected':
      return onRejected ? <>{onRejected(task.error)}</> : null;
    default:
      return null;
  }
};
