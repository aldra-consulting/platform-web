import { component$, useStyles$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';

import { AuthProvider, MissionBookmarksProvider } from '@project/providers';

import RouterHead from './components/router-head';
import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body>
        <AuthProvider>
          <MissionBookmarksProvider>
            <RouterOutlet />
          </MissionBookmarksProvider>
        </AuthProvider>
      </body>
    </QwikCityProvider>
  );
});
