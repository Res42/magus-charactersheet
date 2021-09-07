import { MAX_TULAJDONSAG_SZINT, KarakterMapper } from './model';
import { KepzettsegType } from './kepzettseg';
import { Tulajdonsagok, TulajdonsagType } from './tulajdonsag';

export interface Hatter {
  nev: string;
  kap: number;
}

export function mapHatter(hatter: Hatter): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    hatterek: [...karakter.hatterek, hatter.nev],
    szintenkentiKap: karakter.szintenkentiKap - hatter.kap,
  });
}

export interface Faj {
  nev: string;
  kap: number;
  tulajdonsagLimitek: Tulajdonsagok;
}

export function validateFaj(hatterek: Hatterek[]): KarakterMapper {
  return (karakter) => {
    const fajok = hatterek.filter(isFaj);

    if (fajok.length !== 1) {
      // ha már van besettelve valami truthy (a default üres string, ezért azon nem akad meg)
      // akkor több, mint 1 fajt adott meg, ilyet nem lehet
      throw new Error(`Nem pontosan 1 faj lett megadva háttérnek. Jelenleg ennyi faj van megadva: ${fajok.length}.`);
    }

    return karakter;
  };
}

export function mapFaj(faj: Faj): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    faj: faj.nev,
    szintenkentiKap: karakter.szintenkentiKap - faj.kap,
    tulajdonsagLimitek: Object.fromEntries(
      Object.entries(faj.tulajdonsagLimitek).map(([tulajdonsag, ertek]) => [
        tulajdonsag,
        Math.max(karakter.tulajdonsagLimitek[tulajdonsag as keyof Tulajdonsagok] + ertek, MAX_TULAJDONSAG_SZINT),
      ])
    ) as Tulajdonsagok,
  });
}

export interface Adottsag {
  nev: string;
  kap: number;
  tulajdonsag: TulajdonsagType;
}

export function mapAdottsag(adottsag: Adottsag): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    hatterek: [...karakter.hatterek, adottsag.nev],
    szintenkentiKap: karakter.szintenkentiKap - adottsag.kap,
    tulajdonsagLimitek: {
      ...karakter.tulajdonsagLimitek,
      [adottsag.tulajdonsag]: Math.max(
        karakter.tulajdonsagLimitek[adottsag.tulajdonsag] + adottsag.kap,
        MAX_TULAJDONSAG_SZINT
      ),
    },
  });
}

export interface IskolaAlapKepzettseg {
  kepzettseg: KepzettsegType;
  szint?: number;
  szazalek?: number;
}

export interface Iskola {
  nev: string;
  kap: number;
  kepzettsegek: IskolaAlapKepzettseg[];
  // TODO: oktatás szintet is tárolni
  oktatasok: KepzettsegType[];
}

export function mapIskola(iskola: Iskola): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    kaszt: [...karakter.kaszt, iskola.nev],
    szintenkentiKap: karakter.szintenkentiKap - iskola.kap,
  });
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

function getHatterMapper(hatter: Hatterek): KarakterMapper {
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

export function mapHatterek(hatterek: Hatterek[]): KarakterMapper[] {
  return [validateFaj(hatterek), ...hatterek.map(getHatterMapper)];
}
