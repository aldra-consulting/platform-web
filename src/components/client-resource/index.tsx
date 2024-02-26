import { type JSXOutput } from '@builder.io/qwik';

import { type ClientResource } from '@project/hooks';

interface Props<T extends Awaited<unknown>> {
  resource: ClientResource<T>;
  onPending?: () => JSXOutput;
  onResolved: (value: Awaited<T>) => JSXOutput;
  onRejected?: (error: Error) => JSXOutput;
}

export default <T extends Awaited<unknown>>({
  resource,
  onPending,
  onResolved,
  onRejected,
}: Props<T>) => {
  switch (resource.status) {
    case 'pending':
      return onPending ? <>{onPending()}</> : null;
    case 'resolved':
      return <>{onResolved(resource.value as Awaited<T>)}</>;
    case 'rejected':
      return onRejected ? <>{onRejected(resource.error)}</> : null;
    default:
      return null;
  }
};
