import { join } from 'path';
import { cwd } from 'process';

import { loadEnv, type ConfigEnv, type Plugin } from 'vite';

interface Props {
  mode: ConfigEnv['mode'];
}

export default ({ mode }: Props) =>
  ({
    name: 'environment',
    config: () => {
      Object.assign(process.env, loadEnv(mode, join(cwd(), 'env'), ''));
    },
  }) satisfies Plugin;
