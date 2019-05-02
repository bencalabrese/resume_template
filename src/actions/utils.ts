import { find, without } from "lodash";

export function separate<T>(
  items: T[],
  callback: (value: T) => boolean
): [T, T[]] {
  const hit = find(items, callback);
  const misses = without(items, hit);
  return [hit, misses];
}
