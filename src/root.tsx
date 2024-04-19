import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';

import { AuthProvider } from '@project/providers';

import RouterHead from './components/router-head';
import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <RouterHead />
      </head>
      <body>
        <AuthProvider>
          <RouterOutlet />
        </AuthProvider>
      </body>
    </QwikCityProvider>
  );
});
