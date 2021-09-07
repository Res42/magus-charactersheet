import { TulajdonsagType, Tulajdonsagok, tulajdonsagNoveles } from './tulajdonsag';
import { KarakterMapper } from './model';
import { KepzettsegType } from './kepzettseg';
import { mapObjectValues } from '../utils';

export interface Szintlepes extends Partial<Tulajdonsagok> {
  mana?: number;
  kegy?: number;
  ke?: number;
  ce?: number;
  te?: number;
  ve?: number;
  fp?: number;
  pszi?: number;
  kepzettsegek?: KepzettsegSzintLepes[];
}

export interface KepzettsegSzintLepes {
  kepzettseg: KepzettsegType;
  szint?: number;
  szazalek?: number;
  kp: number;
  /** 4-es szintre lépéskor vagy 80% elérése esetén kap a karakter egy extra statot. */
  tulajdonsag?: TulajdonsagType;
}

export function getKapOfSzintlepes(szintlepes: Szintlepes): number {
  return (
    (szintlepes.mana ?? 0) * 3 +
    (szintlepes.kegy ?? 0) * 3 +
    (szintlepes.ke ?? 0) * 2 +
    (szintlepes.ce ?? 0) * 2 +
    (szintlepes.te ?? 0) * 2 +
    (szintlepes.ve ?? 0) * 2 +
    (szintlepes.fp ?? 0) +
    (szintlepes.pszi ?? 0) * 2 +
    (szintlepes.kepzettsegek ?? []).map((k) => k.kp).reduce((sum, kp) => sum + kp, 0) +
    (szintlepes.ero ?? 0) * 20 +
    (szintlepes.gyorsasag ?? 0) * 20 +
    (szintlepes.ugyesseg ?? 0) * 20 +
    (szintlepes.allokepesseg ?? 0) * 20 +
    (szintlepes.karizma ?? 0) * 20 +
    (szintlepes.egeszseg ?? 0) * 20 +
    (szintlepes.intelligencia ?? 0) * 20 +
    (szintlepes.akaratero ?? 0) * 20 +
    (szintlepes.asztral ?? 0) * 20 +
    (szintlepes.erzekeles ?? 0) * 20
  );
}

function validateSzintlepes(szintlepes: Szintlepes): KarakterMapper {
  return (karakter) => {
    const kapOfSzintlepes = getKapOfSzintlepes(szintlepes);
    if (kapOfSzintlepes !== karakter.szintenkentiKap) {
      throw new Error(
        `A szintlépés nem tartalmaz megfelelő mennyiségű KAP-ot. Az elkölthető KAP: ${karakter.szintenkentiKap}, a szintlépés KAP-ja: ${kapOfSzintlepes}.`
      );
    }

    return karakter;
  };
}

function mapSzintlepes(szintlepes: Szintlepes): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    szint: karakter.szint + 1,
    maxMana: karakter.maxMana + (szintlepes.mana ?? 0),
    maxKegy: karakter.maxKegy + (szintlepes.kegy ?? 0),
    ke: karakter.ke + (szintlepes.ke ?? 0),
    ce: karakter.ce + (szintlepes.ce ?? 0),
    te: karakter.te + (szintlepes.te ?? 0),
    ve: karakter.ve + (szintlepes.ve ?? 0),
    maxFp: karakter.maxFp + (szintlepes.fp ?? 0),
    maxPszi: karakter.maxPszi + (szintlepes.pszi ?? 0),
    tulajdonsagok: mapObjectValues(karakter.tulajdonsagok, (tulajdonsag) => tulajdonsagNoveles(karakter, tulajdonsag, szintlepes[tulajdonsag] ?? 0)),
    // TODO: képzettség szintlépés
  });
}

export function mapSzintlepesek(szintlepesek: Szintlepes[]): KarakterMapper[] {
  return szintlepesek.flatMap((szintlepes) => [validateSzintlepes(szintlepes), mapSzintlepes(szintlepes)]);
}
