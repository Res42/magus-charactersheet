export function mapObjectValues<T, TResult, TKey extends string>(
  obj: Record<TKey, T>,
  mapperFn: (key: TKey, value: T, obj?: Record<TKey, T>) => TResult
): Record<TKey, TResult> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, mapperFn(key as TKey, value as T, obj)])) as Record<TKey, TResult>;
}
