import { mapObjectValues } from '../utils';
import { isFokosKepzettseg, Kepzettseg, Kepzettsegek, mergeOktatasok, Oktatasok } from './kepzettseg';
import { KarakterMapperFn } from './model';
import { tulajdonsagLimitNoveles, tulajdonsagNoveles, Tulajdonsagok, TulajdonsagType } from './tulajdonsag';

export interface Hatter {
  nev: string;
  kap: number;
  szintenkentiAsztralTME?: number;
  szintenkentiMentalTME?: number;
  oktatasok?: Oktatasok;
  oktatasOsszeadodikFajiOktatassal?: boolean;
}

function mapHatter(hatter: Hatter): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    hatterek: [...karakter.hatterek, hatter.nev],
    szintenkentiKap: karakter.szintenkentiKap - hatter.kap,
    szintenkentiAsztralTME: karakter.szintenkentiAsztralTME + (hatter.szintenkentiAsztralTME ?? 0),
    szintenkentiMentalTME: karakter.szintenkentiMentalTME + (hatter.szintenkentiMentalTME ?? 0),
    oktatasok: mergeOktatasok(karakter.oktatasok, hatter.oktatasok, hatter.oktatasOsszeadodikFajiOktatassal),
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
  return (karakter) => {
    return {
      ...karakter,
      faj: faj.nev,
      szintenkentiKap: karakter.szintenkentiKap - faj.kap,
      tulajdonsagLimitek: mapObjectValues(faj.tulajdonsagLimitek, (tulajdonsag, ertek) =>
        tulajdonsagLimitNoveles(karakter, tulajdonsag, ertek)
      ),
      ce: karakter.ce + (faj.ce ?? 0),
      oktatasok: mergeOktatasok(karakter.oktatasok, faj.oktatasok),
    };
  };
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

function mapIskola(iskola: Iskola): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    kaszt: [...karakter.kaszt, iskola.nev],
    szintenkentiKap: karakter.szintenkentiKap - iskola.kap,
    oktatasok: mergeOktatasok(karakter.oktatasok, iskola.oktatasok),
    kepzettsegek: iskola.kepzettsegek.reduce(
      (kepzettsegek, kepzettseg) => addKepzettseg(kepzettsegek, kepzettseg),
      karakter.kepzettsegek
    ),
  });
}

function addKepzettseg(karakterKepzettsegek: Kepzettsegek, kepzettseg: AlapKepzettseg): Kepzettsegek {
  if (isFokosKepzettseg(kepzettseg.kepzettseg)) {
    return {
      ...karakterKepzettsegek,
      [kepzettseg.kepzettseg.nev]: kepzettseg.szint ?? 0,
    };
  }

  return {
    ...karakterKepzettsegek,
    [kepzettseg.kepzettseg.nev]: (karakterKepzettsegek[kepzettseg.kepzettseg.nev] ?? 0) + (kepzettseg.szazalek ?? 0),
  };
}

export interface SajatKultura {
  kepzettsegek: AlapKepzettseg[];
}

export function mapSajatKultura(sajatKultura: SajatKultura): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    kepzettsegek: sajatKultura.kepzettsegek.reduce(
      (kepzettsegek, kepzettseg) => addKepzettseg(kepzettsegek, kepzettseg),
      karakter.kepzettsegek
    ),
  });
}

export type Hatterek = Faj | Adottsag | Hatter | Iskola | SajatKultura;

function isFaj(hatter: Hatterek): hatter is Faj {
  return (hatter as Faj).tulajdonsagLimitek != null;
}

function isAdottsag(hatter: Hatterek): hatter is Adottsag {
  return (hatter as Adottsag).tulajdonsag != null;
}

function isIskola(hatter: Hatterek): hatter is Iskola {
  return (hatter as Iskola).oktatasok != null;
}

function isSajatKultura(hatter: Hatterek): hatter is SajatKultura {
  return (hatter as SajatKultura).kepzettsegek != null;
}

function isOktatasOsszeadodikFajiOktatassalHatter(
  hatter: Hatterek
): hatter is Hatter & { oktatasOsszeadodikFajiOktatassal: true } {
  return (hatter as Hatter).oktatasOsszeadodikFajiOktatassal === true;
}

function getHatterMapper(hatter: Hatterek): KarakterMapperFn {
  if (isFaj(hatter)) return mapFaj(hatter);
  if (isAdottsag(hatter)) return mapAdottsag(hatter);
  if (isIskola(hatter)) return mapIskola(hatter);
  if (isSajatKultura(hatter)) return mapSajatKultura(hatter);

  return mapHatter(hatter);
}

function sortHatterek(a: Hatterek, b: Hatterek): number {
  if (a === b) return 0;

  if (isFaj(a)) return -1;
  if (isFaj(b)) return 1;

  if (isOktatasOsszeadodikFajiOktatassalHatter(a)) return -1;
  if (isOktatasOsszeadodikFajiOktatassalHatter(b)) return 1;

  if (isIskola(a)) return -1;
  if (isIskola(b)) return 1;

  return 0;
}

/**
 * hátterek futtatásának sorrendje:
 * 0. validáció
 * 1. faj
 * 2. `oktatasOsszeadodikFajiOktatassal: true` háttér, rögtön a fajok után kell futtatni,
 *    hogy máshonnan kapott oktatással ne kombózzon össze, ilyen pl. a nemesi vér
 * 3. iskola (figyelni az iskola által adott `oktatasOsszeadodikFajiOktatassal: true` hátterekre!)
 * 4. többi háttér
 */
export function mapHatterek(hatterek: Hatterek[]): KarakterMapperFn[] {
  return [validateFaj(hatterek), ...hatterek.sort(sortHatterek).map(getHatterMapper)];
}
