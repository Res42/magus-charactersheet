import { TulajdonsagType } from './tulajdonsag';
import { mergeWith } from '../utils';

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
  UdvariEtikettIntrika = 'udvariEtikettIntrika',

  Demonologia = 'demonologia',
  Dragakomagia = 'dragakomagia',
  Magasmagia = 'magasmagia',
  Nekromancia = 'nekromancia',
  OselemiMagia = 'oselemiMagia',
  Pszi = 'pszi',
  Runamagia = 'runamagia',
  TapasztalatiMagia = 'tapasztalatiMagia',
}

export function alkepzettsegNev(kepzettsegType: KepzettsegType, alkepzettseg: string | undefined): string {
  return alkepzettseg ? `${kepzettsegType} (${alkepzettseg})` : kepzettsegType;
}

interface KepzettsegBase {
  kepzettsegType: KepzettsegType;
  nev: string;
  eros?: KepzettsegType[];
  erosOperator?: 'and' | 'or';
  gyenge?: KepzettsegType[];
  gyengeOperator?: 'and' | 'or';
  tulajdonsag?: TulajdonsagType[];
}

export interface FokosKepzettseg extends KepzettsegBase {
  fokok: [number, number, number, number, number];
}

export interface SzazalekosKepzettseg extends KepzettsegBase {
  szazalekPerKp: number;
}

export type Kepzettseg = FokosKepzettseg | SzazalekosKepzettseg;

/** Képzettség név - oktatási KP / százalék bónusz (NEM OKTATÁSI SZINT!) map. */
export type Oktatasok = { [key in string]?: number };

export type Kepzettsegek = Record<string, number>;

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
