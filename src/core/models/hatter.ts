import { Kepzettseg } from './kepzettseg';
import { Oktatasok } from './oktatas';
import { Tulajdonsagok, TulajdonsagType } from './tulajdonsag';

export interface Hatter {
  nev: string;
  kap: number;
  szintenkentiAsztralTME?: number;
  szintenkentiMentalTME?: number;
  oktatasok?: Oktatasok;
  oktatasOsszeadodikFajiOktatassal?: boolean;
}

export interface Faj {
  nev: string;
  kap: number;
  tulajdonsagLimitek: Tulajdonsagok;
  oktatasok?: Oktatasok;
  ce?: number;
  // TODO: elf/félelf nekromancia elleni gyengeség
}

export interface Adottsag {
  nev: string;
  kap: number;
  tulajdonsag: TulajdonsagType;
}

export interface AlapKepzettseg {
  kepzettseg: Kepzettseg;
  szint?: number;
  szazalek?: number;
}

export interface Iskola {
  nev: string;
  kap: number;
  kepzettsegek: AlapKepzettseg[];
  oktatasok: Oktatasok;
}

export interface SajatKultura {
  kepzettsegek: AlapKepzettseg[];
}

export type Hatterek = Faj | Adottsag | Hatter | Iskola | SajatKultura;

export function isFaj(hatter: Hatterek): hatter is Faj {
  return (hatter as Faj).tulajdonsagLimitek != null;
}

export function isAdottsag(hatter: Hatterek): hatter is Adottsag {
  return (hatter as Adottsag).tulajdonsag != null;
}

export function isIskola(hatter: Hatterek): hatter is Iskola {
  return (hatter as Iskola).oktatasok != null;
}

export function isSajatKultura(hatter: Hatterek): hatter is SajatKultura {
  return (hatter as SajatKultura).kepzettsegek != null;
}
