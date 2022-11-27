import { mergeWith } from '../utils';
import { KarakterMapperFn } from './model';
import { TulajdonsagType } from './tulajdonsag';

export enum KepzettsegType {
  Fajdalomtures = 'Fájdalomtűrés',
  Fegyverhasznalat = 'Fegyverhasználat',
  Fegyverismeret = 'Fegyverismeret',
  Hadvezetes = 'Hadvezetés',
  HarciLaz = 'Harci láz',
  Harcmuveszet = 'Harcművészet',
  HarcteriGyakorlat = 'Harctéri gyakorlat',
  Ketkezesharc = 'Kétkezesharc',
  Pajzshasznalat = 'Pajzshasználat',
  PusztakezesHarc = 'Pusztakezes harc',
  Pusztitas = 'Pusztítás',
  Taktika = 'Taktika',
  Vakharc = 'Vakharc',
  Vertviselet = 'Vértviselet',

  AlcazasAlruha = 'Álcázás/álruha',
  Hamisitas = 'Hamisítás',
  Jelbeszed = 'Jelbeszéd',
  KocsmaiVerekedes = 'Kocsmai verekedés',
  MeregkeveresSemlegesites = 'Méregkeverés/semlegesítés',
  Orvtamadas = 'Orvtámadás',
  Kinzas = 'Kínzás',
  Szabadulomuveszet = 'Szabadulóművészet',
  Szerencsejatek = 'Szerencsejáték',
  Csapdakereses = 'Csapdakeresés',
  Lopodzas = 'Lopódzás',
  Rejtozes = 'Rejtőzés',
  Rejtekhelykutatas = 'Rejtekhelykutatás',
  Zarnyitas = 'Zárnyitás',
  Zsebmetszes = 'Zsebmetszés',
  Veszelyerzek = 'Veszélyérzék',

  Allatismeret = 'Állatismeret',
  CsapdaallitasLeszedes = 'Csapdaállítás/leszedés',
  Csomozas = 'Csomozás',
  Ertekbecsles = 'Értékbecslés',
  Futas = 'Futás',
  Hajozas = 'Hajozás',
  Hangutanzas = 'Hangutánzás',
  Helyismeret = 'Helyismeret',
  Idomitas = 'Idomítás',
  Idojoslas = 'Időjóslás',
  Kocsihajtas = 'Kocsihajtás',
  Lovaglas = 'Lovaglás',
  Nyomolvasas = 'Nyomolvasás',
  Szakma = 'Szakma',
  Uszas = 'Úszás',
  Vadonjaras = 'Vadonjárás',
  Akrobatika = 'Akrobatika',
  Eses = 'Esés',
  Maszas = 'Mászás',

  Alkimia = 'Alkímia',
  Elettan = 'Élettan',
  Epiteszet = 'Építészet',
  Herbalizmus = 'Herbalizmus',
  IrasOlvasas = 'Írás/Olvasás',
  JogTorvenykezes = 'Jog/Törvénykezés',
  Legendaismeret = 'Legendaismeret',
  Mechanika = 'Mechanika',
  Oktatas = 'Oktatás',
  Orvoslas = 'Orvoslás',
  OsiNyelv = 'Ősi nyelv',
  SzamtanMertan = 'Számtan/Mértan',
  Terkepeszet = 'Térképészet',
  Tortenelem = 'Történelem',
  Vallasismeret = 'Vallásismeret',

  Ekesszolas = 'Ékesszólás',
  Heraldika = 'Heraldika',
  Kultura = 'Kultúra',
  Lelektan = 'Lélektan',
  Muveszetek = 'Művészetek',
  Nyelvtudas = 'Nyelvtudás',
  Parbaj = 'Párbaj',
  PolitikaDiplomacia = 'Politika/diplomácia',
  SzexualisKultura = 'Szexuális kultúra',
  Szineszet = 'Színészet',
  UdvariEtikettIntrika = 'Udvari etikett/intrika',

  Demonologia = 'Démonológia',
  Dragakomagia = 'Drágakőmágia',
  Magasmagia = 'Magasmágia',
  Nekromancia = 'Nekromancia',
  OselemiMagia = 'Őselemi Mágia',
  Pszi = 'Pszi',
  Runamagia = 'Rúnamágia',
  TapasztalatiMagia = 'Tapasztalati Mágia',
}

export const HARCI_KEPZETTSEG_TYPES = [
  KepzettsegType.Fajdalomtures,
  KepzettsegType.Fegyverhasznalat,
  KepzettsegType.Fegyverismeret,
  KepzettsegType.Hadvezetes,
  KepzettsegType.HarciLaz,
  KepzettsegType.Harcmuveszet,
  KepzettsegType.HarcteriGyakorlat,
  KepzettsegType.Ketkezesharc,
  KepzettsegType.Pajzshasznalat,
  KepzettsegType.PusztakezesHarc,
  KepzettsegType.Pusztitas,
  KepzettsegType.Taktika,
  KepzettsegType.Vakharc,
  KepzettsegType.Vertviselet,
] as const;

export const ALVILAGI_KEPZETTSEG_TYPES = [
  KepzettsegType.AlcazasAlruha,
  KepzettsegType.Hamisitas,
  KepzettsegType.Jelbeszed,
  KepzettsegType.KocsmaiVerekedes,
  KepzettsegType.MeregkeveresSemlegesites,
  KepzettsegType.Orvtamadas,
  KepzettsegType.Kinzas,
  KepzettsegType.Szabadulomuveszet,
  KepzettsegType.Szerencsejatek,
  KepzettsegType.Csapdakereses,
  KepzettsegType.Lopodzas,
  KepzettsegType.Rejtozes,
  KepzettsegType.Rejtekhelykutatas,
  KepzettsegType.Zarnyitas,
  KepzettsegType.Zsebmetszes,
  KepzettsegType.Veszelyerzek,
] as const;

export const VILAGI_KEPZETTSEG_TYPES = [
  KepzettsegType.Allatismeret,
  KepzettsegType.CsapdaallitasLeszedes,
  KepzettsegType.Csomozas,
  KepzettsegType.Ertekbecsles,
  KepzettsegType.Futas,
  KepzettsegType.Hajozas,
  KepzettsegType.Hangutanzas,
  KepzettsegType.Helyismeret,
  KepzettsegType.Idomitas,
  KepzettsegType.Idojoslas,
  KepzettsegType.Kocsihajtas,
  KepzettsegType.Lovaglas,
  KepzettsegType.Nyomolvasas,
  KepzettsegType.Szakma,
  KepzettsegType.Uszas,
  KepzettsegType.Vadonjaras,
  KepzettsegType.Akrobatika,
  KepzettsegType.Eses,
  KepzettsegType.Maszas,
] as const;

export const TUDOMANYOS_KEPZETTSEG_TYPES = [
  KepzettsegType.Alkimia,
  KepzettsegType.Elettan,
  KepzettsegType.Epiteszet,
  KepzettsegType.Herbalizmus,
  KepzettsegType.IrasOlvasas,
  KepzettsegType.JogTorvenykezes,
  KepzettsegType.Legendaismeret,
  KepzettsegType.Mechanika,
  KepzettsegType.Oktatas,
  KepzettsegType.Orvoslas,
  KepzettsegType.OsiNyelv,
  KepzettsegType.SzamtanMertan,
  KepzettsegType.Terkepeszet,
  KepzettsegType.Tortenelem,
  KepzettsegType.Vallasismeret,
] as const;

export const SZOCIALIS_KEPZETTSEG_TYPES = [
  KepzettsegType.Ekesszolas,
  KepzettsegType.Heraldika,
  KepzettsegType.Kultura,
  KepzettsegType.Lelektan,
  KepzettsegType.Muveszetek,
  KepzettsegType.Nyelvtudas,
  KepzettsegType.Parbaj,
  KepzettsegType.PolitikaDiplomacia,
  KepzettsegType.SzexualisKultura,
  KepzettsegType.Szineszet,
  KepzettsegType.UdvariEtikettIntrika,
] as const;

export const MISZTIKUS_KEPZETTSEG_TYPES = [
  KepzettsegType.Demonologia,
  KepzettsegType.Dragakomagia,
  KepzettsegType.Magasmagia,
  KepzettsegType.Nekromancia,
  KepzettsegType.OselemiMagia,
  KepzettsegType.Pszi,
  KepzettsegType.Runamagia,
  KepzettsegType.TapasztalatiMagia,
] as const;

export function alkepzettsegNev(kepzettsegType: KepzettsegType, alkepzettseg: string | undefined): string {
  return alkepzettseg ? `${kepzettsegType} (${alkepzettseg})` : kepzettsegType;
}

interface KepzettsegBase {
  kepzettsegType: KepzettsegType;
  nev: string;
  eros?: string[];
  erosOperator?: 'and' | 'or';
  gyenge?: string[];
  gyengeOperator?: 'and' | 'or';
  tulajdonsag?: TulajdonsagType[];
}

export interface FokosKepzettseg extends KepzettsegBase {
  fokok: readonly [number, number, number, number, number];
  szintenkentiBonusz?: (tapasztalatiSzint: number, kepzettsegSzint: number) => KarakterMapperFn;
}

export interface SzazalekosKepzettseg extends KepzettsegBase {
  szazalekPerKp: number;
}

export type Kepzettseg = FokosKepzettseg | SzazalekosKepzettseg;
export type Kepzettsegek = { [key in string]?: number };

export function isFokosKepzettseg(kepzettseg: Kepzettseg): kepzettseg is FokosKepzettseg {
  return (kepzettseg as FokosKepzettseg).fokok != null;
}

export function isSzazalekosKepzettseg(kepzettseg: Kepzettseg): kepzettseg is SzazalekosKepzettseg {
  return (kepzettseg as SzazalekosKepzettseg).szazalekPerKp != null;
}

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
  if (o1 == null) return o2;
  if (o2 == null) return o1;

  const operation: (v1: number | undefined, v2: number | undefined) => number = osszeadodik
    ? (v1, v2) => (v1 ?? 0) + (v2 ?? 0)
    : (v1, v2) => Math.max(v1 ?? 0, v2 ?? 0);

  return mergeWith(o1, o2, operation);
}

export function getOktatasBonusz(oktatasok: Oktatasok, kepzettseg: string): number {
  return Object.entries(oktatasok).filter(([key]) => kepzettseg.includes(key))?.[0][1] ?? 0;
}
