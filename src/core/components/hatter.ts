import { KepzettsegType, Oktatasok, mergeOktatasok } from './kepzettseg';
import { TulajdonsagType, Tulajdonsagok, tulajdonsagLimitNoveles, tulajdonsagNoveles } from './tulajdonsag';
import { KarakterMapperFn } from './model';
import { mapObjectValues } from '../utils';

export interface Hatter {
  nev: string;
  kap: number;
  szintenkentiAsztralTME?: number;
  szintenkentiMentalTME?: number;
  oktatasok?: Oktatasok;
}

function mapHatter(hatter: Hatter): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    hatterek: [...karakter.hatterek, hatter.nev],
    szintenkentiKap: karakter.szintenkentiKap - hatter.kap,
    szintenkentiAsztralTME: karakter.szintenkentiAsztralTME + (hatter.szintenkentiAsztralTME ?? 0),
    szintenkentiMentalTME: karakter.szintenkentiMentalTME + (hatter.szintenkentiMentalTME ?? 0),
  });
}

export interface Faj {
  nev: string;
  kap: number;
  tulajdonsagLimitek: Tulajdonsagok;
  oktatasok?: Oktatasok;
  ce?: number;
  // TODO: elf/félelf nekromancia elleni gyengeség
}

function validateFaj(hatterek: Hatterek[]): KarakterMapperFn {
  return (karakter) => {
    const fajok = hatterek.filter(isFaj);

    if (fajok.length !== 1) {
      throw new Error(`Nem pontosan 1 faj lett megadva háttérnek. Jelenleg ennyi faj van megadva: ${fajok.length}.`);
    }

    return karakter;
  };
}

function mapFaj(faj: Faj): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    faj: faj.nev,
    szintenkentiKap: karakter.szintenkentiKap - faj.kap,
    tulajdonsagLimitek: mapObjectValues(faj.tulajdonsagLimitek, (tulajdonsag, ertek) =>
      tulajdonsagLimitNoveles(karakter, tulajdonsag, ertek)
    ),
    ce: karakter.ce + (faj.ce ?? 0),
    oktatasok: mergeOktatasok(karakter.oktatasok, faj.oktatasok),
  });
}

export interface Adottsag {
  nev: string;
  kap: number;
  tulajdonsag: TulajdonsagType;
}

function mapAdottsag(adottsag: Adottsag): KarakterMapperFn {
  return (karakter) => {
    // mivel itt a limit is nő, ezért az új limittel kell majd számolni a `tulajdonsagNoveles`-nél, mert a karakterben levő limit még a régi
    const ujTulajdonsagLimit = tulajdonsagLimitNoveles(karakter, adottsag.tulajdonsag, adottsag.kap);

    return {
      ...karakter,
      hatterek: [...karakter.hatterek, adottsag.nev],
      szintenkentiKap: karakter.szintenkentiKap - adottsag.kap,
      tulajdonsagLimitek: {
        ...karakter.tulajdonsagLimitek,
        [adottsag.tulajdonsag]: ujTulajdonsagLimit,
      },
      tulajdonsagok: {
        ...karakter.tulajdonsagok,
        [adottsag.tulajdonsag]: tulajdonsagNoveles(karakter, adottsag.tulajdonsag, adottsag.kap, ujTulajdonsagLimit),
      },
    };
  };
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
  oktatasok: Oktatasok;
}

function mapIskola(iskola: Iskola): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    kaszt: [...karakter.kaszt, iskola.nev],
    szintenkentiKap: karakter.szintenkentiKap - iskola.kap,
    oktatasok: mergeOktatasok(karakter.oktatasok, iskola.oktatasok),
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

function getHatterMapper(hatter: Hatterek): KarakterMapperFn {
  if (isFaj(hatter)) return mapFaj(hatter);
  if (isAdottsag(hatter)) return mapAdottsag(hatter);
  if (isIskola(hatter)) return mapIskola(hatter);

  return mapHatter(hatter);
}

/**
 * Általános háttér sort-oló funkció a hátterek megfelelő sorrendben történő futtatásához.
 * A faj típusú háttérnek kell először lefutnia, hogy az utána levő adottság hátterek ne rontsák el a tulajdonság limitek miatti számolásokat.
 * A többi fajta elemmel nem csinál semmit, ugyanolyan sorrendben maradnak.
 */
function sortHatterek(a: Hatterek, b: Hatterek): number {
  if (a === b) return 0;
  if (isFaj(a)) return -1;
  if (isFaj(b)) return 1;

  return 0;
}

export function mapHatterek(hatterek: Hatterek[]): KarakterMapperFn[] {
  return [validateFaj(hatterek), ...hatterek.sort(sortHatterek).map(getHatterMapper)];
}
