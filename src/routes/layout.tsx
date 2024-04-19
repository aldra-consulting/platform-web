import { component$, Slot, useErrorBoundary } from '@builder.io/qwik';

export default component$(() => {
  useErrorBoundary();

  return <Slot />;
});
