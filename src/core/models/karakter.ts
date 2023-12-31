import { Hatterek, KarakterHatterek } from './hatter';
import { Kepzettsegek } from './kepzettseg';
import { Oktatasok } from './oktatas';
import { Szintlepes } from './szintlepes';
import { Tulajdonsagok } from './tulajdonsag';

export const DEFAULT_KAP = 50;
export const DEFAULT_VE = 60;
export const MAX_TULAJDONSAG_SZINT = 20;
export const MAX_TULAJDONSAG_PONT = 135;

export type KarakterMapperFn = (karakter: Karakter) => Karakter;

export interface InitKarakter {
  nev: string;
  jellem?: string;
  hatterek: Hatterek[];
  tulajdonsagok: Tulajdonsagok;
  szintlepesek: Szintlepes[];
}

export interface Karakter {
  nev: string;
  jellem: string;
  faj: string;
  kaszt: string[];
  szintenkentiKap: number;
  tulajdonsagLimitek: Tulajdonsagok;
  tulajdonsagok: Tulajdonsagok;
  hatterek: KarakterHatterek;
  szint: number;
  ke: number;
  te: number;
  ce: number;
  ve: number;
  maxEp: number;
  maxFp: number;
  maxPszi: number;
  maxMana: number;
  maxKegy: number;
  asztralTME: number;
  mentalTME: number;
  szintenkentiAsztralTME: number;
  szintenkentiMentalTME: number;
  szintenkentiKegy: number;
  szintenkentiPszi: number;
  szintenkentiFp: number;
  oktatasok: Oktatasok;
  kepzettsegek: Kepzettsegek;
}

export function emptykarakter(): Karakter {
  return {
    nev: '',
    jellem: '',
    faj: '',
    kaszt: [],
    szintenkentiKap: DEFAULT_KAP,
    hatterek: {},
    szint: 0,
    tulajdonsagLimitek: {
      ero: 0,
      gyorsasag: 0,
      ugyesseg: 0,
      allokepesseg: 0,
      egeszseg: 0,
      karizma: 0,
      intelligencia: 0,
      akaratero: 0,
      asztral: 0,
      erzekeles: 0,
    },
    tulajdonsagok: {
      ero: 0,
      gyorsasag: 0,
      ugyesseg: 0,
      allokepesseg: 0,
      egeszseg: 0,
      karizma: 0,
      intelligencia: 0,
      akaratero: 0,
      asztral: 0,
      erzekeles: 0,
    },
    maxEp: 0,
    maxFp: 0,
    maxPszi: 0,
    maxMana: 0,
    maxKegy: 0,
    ke: 0,
    te: 0,
    ce: 0,
    ve: DEFAULT_VE,
    asztralTME: 0,
    mentalTME: 0,
    szintenkentiAsztralTME: 0,
    szintenkentiMentalTME: 0,
    szintenkentiKegy: 0,
    szintenkentiPszi: 0,
    szintenkentiFp: 0,
    oktatasok: {},
    kepzettsegek: {},
  };
}
