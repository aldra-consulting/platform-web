import { useLocation } from '@builder.io/qwik-city';

import { isDefined } from '@project/utils';

export const useDefinedParam = <T extends string = string>(name: string): T => {
  const {
    params: { [name]: value },
  } = useLocation();

  if (isDefined(value)) {
    return value as T;
  }

  throw Error(`URL parameter "${name}" is not defined`);
};
