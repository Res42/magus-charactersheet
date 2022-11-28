import {
  Adottsag,
  AlapKepzettseg,
  Faj,
  Hatter,
  Hatterek,
  isAdottsag,
  isFaj,
  isFokosAlapKepzettseg,
  isIskola,
  Iskola,
  isSajatKultura,
  SajatKultura,
} from '../models/hatter';
import { KarakterMapperFn } from '../models/karakter';
import { getSzintenkentiBonuszFn } from '../models/kepzettseg';
import { mergeOktatasok } from '../models/oktatas';
import { tulajdonsagLimitNoveles, tulajdonsagNoveles } from '../models/tulajdonsag';

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
      tulajdonsagLimitek: { ...faj.tulajdonsagLimitek },
      ce: karakter.ce + (faj.ce ?? 0),
      oktatasok: mergeOktatasok(karakter.oktatasok, faj.oktatasok),
    };
  };
}

function mapAdottsag(adottsag: Adottsag): KarakterMapperFn[] {
  return [
    // mivel itt a limit is nő, ezért először azt állítjuk be, hogy utána a tulajdonság növelés már az új limittel számoljon
    (karakter) => ({
      ...karakter,
      hatterek: [...karakter.hatterek, adottsag.nev],
      szintenkentiKap: karakter.szintenkentiKap - adottsag.kap,
      tulajdonsagLimitek: {
        ...karakter.tulajdonsagLimitek,
        [adottsag.tulajdonsag]: tulajdonsagLimitNoveles(karakter, adottsag.tulajdonsag, adottsag.kap),
      },
    }),
    (karakter) => ({
      ...karakter,
      tulajdonsagok: {
        ...karakter.tulajdonsagok,
        [adottsag.tulajdonsag]: tulajdonsagNoveles(karakter, adottsag.tulajdonsag, adottsag.kap),
      },
    }),
  ];
}

function mapIskola(iskola: Iskola): KarakterMapperFn[] {
  return [
    (karakter) => ({
      ...karakter,
      kaszt: [...karakter.kaszt, iskola.nev],
      szintenkentiKap: karakter.szintenkentiKap - iskola.kap,
      oktatasok: mergeOktatasok(karakter.oktatasok, iskola.oktatasok),
    }),
    ...iskola.kepzettsegek.map(addKepzettseg),
  ];
}

function addKepzettseg(kepzettseg: AlapKepzettseg): KarakterMapperFn {
  return (karakter) => {
    const regiSzint = karakter.kepzettsegek[kepzettseg.kepzettseg.nev] ?? 0;
    const ujSzint = isFokosAlapKepzettseg(kepzettseg) ? kepzettseg.szint : regiSzint + kepzettseg.szazalek;
    const bonusz = getSzintenkentiBonuszFn(kepzettseg.kepzettseg)(regiSzint, ujSzint);

    return bonusz({
      ...karakter,
      kepzettsegek: {
        ...karakter.kepzettsegek,
        [kepzettseg.kepzettseg.nev]: ujSzint,
      },
    });
  };
}

function mapSajatKultura(sajatKultura: SajatKultura): KarakterMapperFn[] {
  return sajatKultura.kepzettsegek.map(addKepzettseg);
}

function isOktatasOsszeadodikFajiOktatassalHatter(
  hatter: Hatterek
): hatter is Hatter & { oktatasOsszeadodikFajiOktatassal: true } {
  return (hatter as Hatter).oktatasOsszeadodikFajiOktatassal === true;
}

function getHatterMapper(hatter: Hatterek): KarakterMapperFn[] {
  if (isFaj(hatter)) return [mapFaj(hatter)];
  if (isAdottsag(hatter)) return mapAdottsag(hatter);
  if (isIskola(hatter)) return mapIskola(hatter);
  if (isSajatKultura(hatter)) return mapSajatKultura(hatter);

  return [mapHatter(hatter)];
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
  return [validateFaj(hatterek), ...hatterek.sort(sortHatterek).flatMap(getHatterMapper)];
}
