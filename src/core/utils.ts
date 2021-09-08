export function mapObjectValues<T, TResult, TKey extends string>(
  obj: Record<TKey, T>,
  mapperFn: (key: TKey, value: T, obj?: Record<TKey, T>) => TResult
): Record<TKey, TResult> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, mapperFn(key as TKey, value as T, obj)])
  ) as Record<TKey, TResult>;
}

export function mergeWith<T, TResult, TKey extends string>(
  obj1: Record<TKey, T>,
  obj2: Record<TKey, T>,
  callbackFn: (value1: T | undefined, value2: T | undefined, key: TKey) => TResult
): Record<TKey, TResult> {
  const allKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])] as TKey[];

  return allKeys.reduce((obj, key) => {
    obj[key] = callbackFn(obj1[key], obj2[key], key);
    return obj;
  }, {} as Record<TKey, TResult>);
}
