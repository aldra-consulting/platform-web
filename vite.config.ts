import { resolve } from 'path';

import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { environment } from './vite/plugins';

export default defineConfig(({ mode }) => ({
  base: '/',
  server: { port: 8004 },
  plugins: [
    environment({ mode }),
    qwikCity({ trailingSlash: false }),
    qwikVite({
      client: {
        outDir: 'lib',
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [{ find: '@project', replacement: resolve(__dirname, 'src') }],
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
}));
