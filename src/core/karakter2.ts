import { Adottsag, mapAdottsag } from './components/adottsag';
import { Faj, mapFaj } from './components/faj';
import { Hatter, mapHatter } from './components/hatter';
import { Iskola, mapIskola } from './components/iskola';
import { ITulajdonsagok, TULAJDONSAG_MAPPERS } from './components/tulajdonsag';
import { DEFAULT_KAP, DEFAULT_VE } from './constants';

export type KarakterMapper = (karakter: IKarakter) => IKarakter;

export interface IInitKarakter {
  nev: string;
  hatterek: Hatterek[];
  tulajdonsagok: ITulajdonsagok;
}

export type Hatterek = Faj | Adottsag | Hatter | Iskola;

export function isFaj(hatter: Hatterek): hatter is Faj {
  return (hatter as Faj).tulajdonsagLimitek != null;
}

export function isAdottsag(hatter: Hatterek): hatter is Adottsag {
  return (hatter as Adottsag).tulajdonsag != null;
}

export function isIskola(hatter: Hatterek): hatter is Iskola {
  return (hatter as Iskola).kepzettsegek != null;
}

export function getHatterMapper(hatter: Hatterek) {
  if (isFaj(hatter)) {
    return mapFaj(hatter);
  } else if (isAdottsag(hatter)) {
    return mapAdottsag(hatter);
  } else if (isIskola(hatter)) {
    return mapIskola(hatter);
  } else {
    return mapHatter(hatter);
  }
}

export interface IKarakter {
  nev: string;
  faj: string;
  kaszt: string[];
  szintenkentiKap: number;
  tulajdonsagLimitek: ITulajdonsagok;
  tulajdonsagok: ITulajdonsagok;
  hatterek: string[];
  szint: number;
  ke: number;
  te: number;
  ce: number;
  ve: number;
  maxEp: number;
  maxFp: number;
  maxPszi: number;
}

export function emptykarakter(): IKarakter {
  return {
    nev: '',
    faj: '',
    kaszt: [],
    szintenkentiKap: DEFAULT_KAP,
    hatterek: [],
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
    ke: 0,
    te: 0,
    ce: 0,
    ve: DEFAULT_VE,
  };
}

export function createKarakter(init: IInitKarakter): IKarakter {
  let karakter: IKarakter = { ...emptykarakter(), nev: init.nev, tulajdonsagok: init.tulajdonsagok };

  const mappers = [
    ...init.hatterek.map(getHatterMapper),
    // TODO: szintlépés mapper
    // TODO: státusz mapper
    ...TULAJDONSAG_MAPPERS,
    // TODO: másodlagos stat mapper
    // TODO: equipment mapper
  ];

  for (const mapper of mappers) {
    karakter = mapper(karakter);
  }

  return karakter;
}
