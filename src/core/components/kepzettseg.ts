import { mergeWith } from '../utils';

export enum KepzettsegType {
  Fegyverhasznalat,
  AlcazasAlruha,
  Mechanika,
  SzamtanMertan,
  Ertekbecsles,
  Orvtamadas,
  Jelbeszed,
  Szabadulomuveszet,
  Csomozas,
  Lelektan,
  Rejtekhelykutatas,
  Zarnyitas,
  Zsebmetszes,
  Lopodzas,
  Rejtozes,
  Maszas,
  Eses,
  Akrobatika,
  Csapdakereses,
  Veszelyerzek,
  Allatismeret,
  Idomitas,
  Erdojaras,
  Lovaglas,
  Epiteszet,
  Terkepeszet,
  // TODO: hogy ábrázolni az alképzettséges képzettségeket?
  MuveszetekSzobraszat,
  Szakma,
  Ekesszolas,
  Heraldika,
  Kultura,
  Muveszetek,
  Nyelvtudas,
  Parbaj,
  PolitikaDiplomacia,
  SzexualisKultura,
  Szineszet,
  UdvariEtikettIntrika,
}

/** Képzettség - oktatási szint map. */
export type Oktatasok = { [key in KepzettsegType]?: number };

export function mergeOktatasok(o1: Oktatasok, o2: Oktatasok): Oktatasok;
export function mergeOktatasok(o1: Oktatasok | undefined, o2: Oktatasok): Oktatasok;
export function mergeOktatasok(o1: Oktatasok, o2: Oktatasok | undefined): Oktatasok;
export function mergeOktatasok(o1: Oktatasok | undefined, o2: Oktatasok | undefined): undefined;
export function mergeOktatasok(o1: Oktatasok | undefined, o2: Oktatasok | undefined): Oktatasok | undefined {
  if (o1 == null && o2 == null) return undefined;
  if (o1 == null) return o2;
  if (o2 == null) return o1;

  return mergeWith(o1, o2, (v1, v2) => (v1 ?? 0) + (v2 ?? 0));
}
