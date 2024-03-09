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

export const globalObject = () => {
  if (isDefined(globalThis.window)) {
    return globalThis.window;
  }

  if (isDefined(globalThis.process)) {
    return globalThis.process;
  }

  return undefined;
};
