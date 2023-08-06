import { FokosKepzettseg, SzazalekosKepzettseg } from './kepzettseg';
import { Oktatasok } from './oktatas';
import { TulajdonsagType, Tulajdonsagok } from './tulajdonsag';

export interface Hatter {
  readonly nev: string;
  readonly kap: number;
  readonly szintenkentiAsztralTME?: number;
  readonly szintenkentiMentalTME?: number;
  readonly oktatasok?: Oktatasok;
  readonly oktatasOsszeadodikFajiOktatassal?: boolean;
}

export interface Faj {
  readonly nev: string;
  readonly kap: number;
  readonly tulajdonsagLimitek: Tulajdonsagok;
  readonly oktatasok?: Oktatasok;
  readonly ce?: number;
  // TODO: elf/félelf nekromancia elleni gyengeség
}

export interface Adottsag {
  readonly nev: string;
  readonly kap: number;
  readonly tulajdonsag: TulajdonsagType;
}

export interface FokosAlapKepzettseg {
  readonly kepzettseg: FokosKepzettseg;
  readonly szint: number;
}

export interface SzazalekosAlapKepzettseg {
  readonly kepzettseg: SzazalekosKepzettseg;
  readonly szazalek: number;
}

export type AlapKepzettseg = FokosAlapKepzettseg | SzazalekosAlapKepzettseg;

export function isFokosAlapKepzettseg(alapKepzettseg: AlapKepzettseg): alapKepzettseg is FokosAlapKepzettseg {
  return (alapKepzettseg as FokosAlapKepzettseg).szint != null;
}

export function isSzazalekosAlapKepzettseg(alapKepzettseg: AlapKepzettseg): alapKepzettseg is SzazalekosAlapKepzettseg {
  return (alapKepzettseg as SzazalekosAlapKepzettseg).szazalek != null;
}

export interface Iskola {
  readonly nev: string;
  readonly kap: number;
  readonly kepzettsegek: AlapKepzettseg[];
  readonly hatterek?: Hatter[];
  readonly oktatasok: Oktatasok;
  // TODO: tiltott képzettségek kezelése
  readonly tiltottKepzettsegek?: string[];
}

export interface SajatKultura {
  readonly kepzettsegek: AlapKepzettseg[];
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

/** Háttér név -> szint dictionary. */
export type KarakterHatterek = Record<string, number>;
