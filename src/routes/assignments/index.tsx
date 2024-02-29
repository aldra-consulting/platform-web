import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Page from '@project/components/page';
import { useClientResource } from '@project/hooks';
import { AssignmentService } from '@project/services';

import Assignments from './components/assignments';
import Breadcrumbs from './components/breadcrumbs';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const resource = useClientResource($(() => new AssignmentService().list()));

  return (
    <Page>
      <Breadcrumbs q:slot='breadcrumbs' />
      <ClientResource
        resource={resource}
        onPending={() => null}
        onResolved={(assignments) =>
          assignments.length > 0 ? (
            <Assignments assignments={assignments} />
          ) : (
            <div data-slot='no-assignments'>
              <p>Ingen oppdrag funnet</p>
            </div>
          )
        }
      />
    </Page>
  );
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
