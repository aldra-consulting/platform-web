import { $, component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  type StaticGenerateHandler,
} from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Page from '@project/components/page';
import Redirect from '@project/components/redirect';
import { useAssignmentId, useClientResource } from '@project/hooks';
import { AssignmentProvider } from '@project/providers';
import { AssignmentService } from '@project/services';

import Assignment from './components/assignment';
import Breadcrumbs from './components/breadcrumbs';

export default component$(() => {
  const id = useAssignmentId();

  const resource = useClientResource(
    $(() => new AssignmentService().findByIdOrThrow(id))
  );

  return (
    <ClientResource
      resource={resource}
      onPending={() => null}
      onRejected={() => <Redirect to='/assignments' />}
      onResolved={(assignment) => (
        <AssignmentProvider assignment={assignment}>
          <Page>
            <Breadcrumbs q:slot='breadcrumbs' />
            <Assignment />
          </Page>
        </AssignmentProvider>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => ({
  params: (await new AssignmentService().list()).map(
    ({ id: assignmentId }) => ({ assignmentId })
  ),
});

export const head: DocumentHead = {
  title: 'Oppdrag | Platform | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra Platform hjelper selvstendige spesialister med å finne deres neste oppdrag.',
    },
  ],
};
