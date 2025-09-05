export type MergeWithFn<T, TResult, TKey extends string | number> = (
  value1: T | undefined,
  value2: T | undefined,
  key: TKey
) => TResult;

export function mergeWith<T, TResult, TKey extends string | number>(
  obj1: Partial<Record<TKey, T>>,
  obj2: Partial<Record<TKey, T>>,
  callbackFn: MergeWithFn<T, TResult, TKey>
): Record<TKey, TResult> {
  const allKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])] as TKey[];

  return allKeys.reduce(
    (obj, key) => {
      obj[key] = callbackFn(obj1[key], obj2[key], key);
      return obj;
    },
    {} as Record<TKey, TResult>
  );
}

export function identity<T>(value: T): T {
  return value;
}
