import { type Hashable } from '@project/types';

/**
 * A type guard that checks whether provided value is non-nullable and allows
 * TypeScript compiler to correctly infer value type in further usage of the value.
 *
 * @function
 * @template T
 * @param {T} value
 *
 * @returns {boolean} Returns `true` if provided value is non-nullable, otherwise `false`
 */
export function isDefined<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export const isBrowser = () =>
  isDefined(globalThis.window) && isDefined(globalThis.window.document);

export const isNode = () =>
  isDefined(globalThis.process) &&
  isDefined(globalThis.process.versions) &&
  isDefined(globalThis.process.versions.node);

export const globalObject = () => {
  if (isBrowser()) {
    return globalThis.window;
  }

  if (isNode()) {
    return globalThis.process;
  }

  return undefined;
};

export function assertDefined<T extends Hashable>(
  value: T,
  subject?: string
): asserts value is NonNullable<T> {
  if (!isDefined(value)) {
    throw new Error(
      isDefined(subject)
        ? `Expected '${subject}' to be defined, but received '${String(value)}'`
        : `Expected a defined value, but received '${String(value)}'`
    );
  }
}

export const assertRequired = <T extends Partial<object>>(
  object: T,
  keys: (keyof T)[]
): Required<T> => {
  keys.forEach((key) => assertDefined(object[key] as Hashable, String(key)));

  Object.entries(object).forEach(([key, value]) => {
    assertDefined(key, key);
    assertDefined(value, `object['${key}']`);
  });

  return object as Required<T>;
};
