import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';

import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => ({
  ssr: { external: ['node:async_hooks'] },
  build: {
    ssr: true,
    rollupOptions: {
      input: ['@qwik-city-plan'],
    },
  },
  plugins: [
    staticAdapter({
      origin: 'https://www.platform.aldra.no',
      emit404Pages: false,
      exclude: ['/*/components/*'],
    }),
  ],
}));
