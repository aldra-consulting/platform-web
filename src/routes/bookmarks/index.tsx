import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import ClientResource from '@project/components/client-resource';
import Loader from '@project/components/loader';
import Page from '@project/components/page';
import { useClientResource, useMissionBookmarksContext } from '@project/hooks';
import { service, CSSUtil, NumberUtil } from '@project/utils';

import Breadcrumbs from './components/breadcrumbs';
import Missions from './components/missions';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { addAll } = useMissionBookmarksContext();

  const resource = useClientResource(
    $(async () => {
      const bookmarkedMissions = await service()
        .entity()
        .mission()
        .findManyWithBookmarks()
        .then((missions) =>
          missions.filter(({ isBookmarked }) => isBookmarked)
        );

      await addAll(bookmarkedMissions);

      return bookmarkedMissions;
    })
  );

  return (
    <ClientResource
      resource={resource}
      onPending={() => (
        <Page>
          <Breadcrumbs q:slot='breadcrumbs' />
          <div data-slot='loading-screen'>
            <div data-slot='loader'>
              <Loader
                color='blue'
                thickness={CSSUtil.length().px(NumberUtil.nonZero(4))}
              />
            </div>
          </div>
        </Page>
      )}
      onResolved={(bookmarkedMissions) => (
        <Page>
          <Breadcrumbs q:slot='breadcrumbs' />
          {bookmarkedMissions.length > 0 ? (
            <Missions missions={bookmarkedMissions} />
          ) : (
            <div data-slot='no-missions'>
              <p>Ingen bokmerker funnet</p>
            </div>
          )}
        </Page>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: 'Bokmerker | Platform | Aldra | IT-spesialister i verdensklasse',
  meta: [
    {
      name: 'description',
      content:
        'Aldra Platform hjelper selvstendige spesialister med å finne deres neste oppdrag.',
    },
  ],
};
