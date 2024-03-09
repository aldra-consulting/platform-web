import { type Hashable } from '@project/types';

import { assertDefined } from '../common';

export const checkEnvironmentVariables = <T extends object>(
  env: T,
  keys: (keyof T)[]
): T => {
  keys.forEach((key) => assertDefined(env[key] as Hashable, String(key)));

  Object.entries(env).forEach(([key, value]) => {
    assertDefined(key, key);
    assertDefined(value, `env['${key}']`);
  });

  return env;
};
