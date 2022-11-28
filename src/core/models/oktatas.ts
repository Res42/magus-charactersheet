import { mergeWith, MergeWithFn } from '../utils/utils';

/** Képzettség név - oktatási KP / százalék bónusz (NEM OKTATÁSI SZINT!) map. */
export type Oktatasok = { [key in string]?: number };

export function mergeOktatasok(o1: Oktatasok, o2: Oktatasok, osszeadodik?: boolean): Oktatasok;
export function mergeOktatasok(o1: Oktatasok | undefined, o2: Oktatasok, osszeadodik?: boolean): Oktatasok;
export function mergeOktatasok(o1: Oktatasok, o2: Oktatasok | undefined, osszeadodik?: boolean): Oktatasok;
export function mergeOktatasok(o1: Oktatasok | undefined, o2: Oktatasok | undefined, osszeadodik?: boolean): undefined;
export function mergeOktatasok(
  o1: Oktatasok | undefined,
  o2: Oktatasok | undefined,
  osszeadodik = false
): Oktatasok | undefined {
  if (o1 == null && o2 == null) return undefined;
  if (o1 == null) return { ...o2 };
  if (o2 == null) return { ...o1 };

  const operation: MergeWithFn<number, number, string> = osszeadodik
    ? (v1, v2) => (v1 ?? 0) + (v2 ?? 0)
    : (v1, v2) => Math.max(v1 ?? 0, v2 ?? 0);

  return mergeWith(o1, o2, operation);
}

export function getOktatasBonusz(oktatasok: Oktatasok, kepzettseg: string): number {
  return Object.entries(oktatasok).filter(([key]) => kepzettseg.includes(key))?.[0]?.[1] ?? 0;
}
