import { TulajdonsagType } from './tulajdonsag';
import { mergeWith } from '../utils';

export enum KepzettsegType {
  Fajdalomtures = 'fajdalomtures',
  Fegyverhasznalat = 'fegyverhasznalat',
  Fegyverismeret = 'fegyverismeret',
  Hadvezetes = 'hadvezetes',
  HarciLaz = 'harciLaz',
  Harcmuveszet = 'harcmuveszet',
  HarcteriGyakorlat = 'harcteriGyakorlat',
  Ketkezesharc = 'ketkezesharc',
  Pajzshasznalat = 'pajzshasznalat',
  PusztakezesHarc = 'pusztakezesHarc',
  Pusztitas = 'pusztitas',
  Taktika = 'taktika',
  Vakharc = 'vakharc',
  Vertviselet = 'vertviselet',

  AlcazasAlruha = 'alcazasAlruha',
  Hamisitas = 'hamisitas',
  Jelbeszed = 'jelbeszed',
  KocsmaiVerekedes = 'kocsmaiVerekedes',
  MeregkeveresSemlegesites = 'meregkeveresSemlegesites',
  Orvtamadas = 'orvtamadas',
  Kinzas = 'kinzas',
  Szabadulomuveszet = 'szabadulomuveszet',
  Szerencsejatek = 'szerencsejatek',
  Csapdakereses = 'csapdakereses',
  Lopodzas = 'lopodzas',
  Rejtozes = 'Rejtozes',
  Rejtekhelykutatas = 'rejtekhelykutatas',
  Zarnyitas = 'zarnyitas',
  Zsebmetszes = 'zsebmetszes',
  Veszelyerzek = 'veszelyerzek',

  Allatismeret = 'allatismeret',
  CsapdaallitasLeszedes = 'csapdaallitasLeszedes',
  Csomozas = 'csomozas',
  Ertekbecsles = 'ertekbecsles',
  Futas = 'futas',
  Hajozas = 'hajozas',
  Hangutanzas = 'hangutanzas',
  Helyismeret = 'helyismeret',
  Idomitas = 'idomitas',
  Idojoslas = 'idojoslas',
  Kocsihajtas = 'kocsihajtas',
  Lovaglas = 'lovaglas',
  Nyomolvasas = 'nyomolvasas',
  Szakma = 'szakma',
  Uszas = 'uszas',
  Vadonjaras = 'vadonjaras',
  Akrobatika = 'akrobatika',
  Eses = 'eses',
  Maszas = 'maszas',

  Alkimia = 'alkimia',
  Elettan = 'elettan',
  Epiteszet = 'epiteszet',
  Herbalizmus = 'herbalizmus',
  IrasOlvasas = 'irasOlvasas',
  JogTorvenykezes = 'jogTorvenykezes',
  Legendaismeret = 'legendaismeret',
  Mechanika = 'mechanika',
  Oktatas = 'oktatas',
  Orvoslas = 'orvoslas',
  OsiNyelv = 'osiNyelv',
  SzamtanMertan = 'szamtanMertan',
  Terkepeszet = 'terkepeszet',
  Tortenelem = 'tortenelem',
  Vallasismeret = 'vallasismeret',

  Ekesszolas = 'ekesszolas',
  Heraldika = 'heraldika',
  Kultura = 'kultura',
  Lelektan = 'lelektan',
  Muveszetek = 'muveszetek',
  Nyelvtudas = 'nyelvtudas',
  Parbaj = 'parbaj',
  PolitikaDiplomacia = 'politikaDiplomacia',
  SzexualisKultura = 'szexualisKultura',
  Szineszet = 'szineszet',
  UdvariEtikettIntrika = 'udvariEtikettIntrika',

  Demonologia = 'demonologia',
  Dragakomagia = 'dragakomagia',
  Magasmagia = 'magasmagia',
  Nekromancia = 'nekromancia',
  OselemiMagia = 'oselemiMagia',
  Pszi = 'pszi',
  Runamagia = 'runamagia',
  TapasztalatiMagia = 'tapasztalatiMagia',

  // TODO: hogy ábrázolni az alképzettséges képzettségeket? ez külön meg van nevezve a törpénél
  MuveszetekSzobraszat = 'muveszetekSzobraszat',
}

interface KepzettsegBase {
  kepzettsegType: KepzettsegType;
  eros?: KepzettsegType[];
  erosOperator?: 'and' | 'or';
  gyenge?: KepzettsegType[];
  gyengeOperator?: 'and' | 'or';
  tulajdonsag: TulajdonsagType[];
}

export interface FokosKepzettseg extends KepzettsegBase {
  elsoFok: number;
  masodikFok: number;
  harmadikFok: number;
  negyedikFok: number;
  otodikFok: number;
}

export interface SzazalekosKepzettseg extends KepzettsegBase {
  szazalekPerKap: number;
}

export type Kepzettseg = FokosKepzettseg | SzazalekosKepzettseg;

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
