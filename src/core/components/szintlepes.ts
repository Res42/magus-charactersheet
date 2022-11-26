import { mapObjectValues } from '../utils';
import { getOktatasBonusz, isFokosKepzettseg, Kepzettseg, Kepzettsegek, Oktatasok } from './kepzettseg';
import { KarakterMapperFn } from './model';
import { tulajdonsagNoveles, Tulajdonsagok, TulajdonsagType } from './tulajdonsag';

export interface Szintlepes extends Partial<Tulajdonsagok> {
  mana?: number;
  kegy?: number;
  ke?: number;
  ce?: number;
  te?: number;
  ve?: number;
  fp?: number;
  pszi?: number;
  kepzettsegek?: KepzettsegSzintlepes[];
}

export interface KepzettsegSzintlepes {
  kepzettseg: Kepzettseg;
  kp: number;
  /** 4-es szintre lépéskor vagy 80% elérése esetén kap a karakter egy extra tulajdonság pontot. */
  tulajdonsag?: TulajdonsagType;
}

function getKapOfSzintlepes(szintlepes: Szintlepes): number {
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

function validateSzintlepes(szintlepes: Szintlepes): KarakterMapperFn {
  return (karakter) => {
    const kapOfSzintlepes = getKapOfSzintlepes(szintlepes);
    if (kapOfSzintlepes !== karakter.szintenkentiKap) {
      console.warn(
        `A szintlépés nem tartalmaz megfelelő mennyiségű KAP-ot. Az elkölthető KAP: ${karakter.szintenkentiKap}, a szintlépés KAP-ja: ${kapOfSzintlepes}.`
      );
    }

    return karakter;
  };
}

function mapSzintlepes(szintlepes: Szintlepes): KarakterMapperFn {
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
    tulajdonsagok: mapObjectValues(karakter.tulajdonsagok, (tulajdonsag) =>
      tulajdonsagNoveles(
        karakter,
        tulajdonsag,
        (szintlepes[tulajdonsag] ?? 0) +
          (szintlepes.kepzettsegek?.filter((k) => k.tulajdonsag === tulajdonsag).length ?? 0)
      )
    ),
    asztralTME: karakter.asztralTME + karakter.szintenkentiAsztralTME,
    mentalTME: karakter.mentalTME + karakter.szintenkentiMentalTME,
    kepzettsegek:
      szintlepes.kepzettsegek?.reduce(
        (kepzettsegek, ujKepzettseg) => kepzettsegSzintlepes(kepzettsegek, karakter.oktatasok, ujKepzettseg),
        karakter.kepzettsegek
      ) ?? karakter.kepzettsegek,
    // TODO: képzettség szintlépés
  });
}

function kepzettsegSzintlepes(
  kepzettsegek: Kepzettsegek,
  oktatasok: Oktatasok,
  szintlepes: KepzettsegSzintlepes
): Kepzettsegek {
  if (isFokosKepzettseg(szintlepes.kepzettseg)) {
    return {
      ...kepzettsegek,
      [szintlepes.kepzettseg.nev]: fokosKepzettsegUjSzint(kepzettsegek, oktatasok, szintlepes),
    };
  }

  return {
    ...kepzettsegek,
    // TODO: oktatás
    [szintlepes.kepzettseg.nev]:
      (kepzettsegek[szintlepes.kepzettseg.nev] ?? 0) + szintlepes.kp * szintlepes.kepzettseg.szazalekPerKp,
  };
}

function fokosKepzettsegUjSzint(
  kepzettsegek: Kepzettsegek,
  oktatasok: Oktatasok,
  szintlepes: KepzettsegSzintlepes
): number {
  if (!isFokosKepzettseg(szintlepes.kepzettseg)) {
    throw new Error('Ez a képzettség nem fokos, nem lehet így növelni a szintjét.');
  }
  // TODO: refaktor, nagyon csúnya
  // TODO: oktatás számolás rossz
  let kp = szintlepes.kp;
  let aktualisSzint = kepzettsegek[szintlepes.kepzettseg.nev] ?? 0;
  const oktatasBonusz = getOktatasBonusz(oktatasok, szintlepes.kepzettseg.nev);
  let kovetkezoSzinthezSzuksegesKp =
    szintlepes.kepzettseg.fokok[aktualisSzint] -
    (aktualisSzint > 0 ? szintlepes.kepzettseg.fokok[aktualisSzint - 1] : 0) -
    oktatasBonusz;

  while (kp >= kovetkezoSzinthezSzuksegesKp) {
    kp -= kovetkezoSzinthezSzuksegesKp;
    aktualisSzint++;
    kovetkezoSzinthezSzuksegesKp =
      szintlepes.kepzettseg.fokok[aktualisSzint] -
      (aktualisSzint > 0 ? szintlepes.kepzettseg.fokok[aktualisSzint - 1] : 0) -
      oktatasBonusz;
  }

  if ((kepzettsegek[szintlepes.kepzettseg.nev] ?? 0) === aktualisSzint) {
    console.warn(
      `A megadott ${szintlepes.kp} KP-ból nem sikerült a '${szintlepes.kepzettseg.nev}' képzettségben fokot növelni. A szükséges KP ${kovetkezoSzinthezSzuksegesKp}.`
    );
  }

  return aktualisSzint;
}

export function mapSzintlepesek(szintlepesek: Szintlepes[]): KarakterMapperFn[] {
  return szintlepesek.flatMap((szintlepes) => [validateSzintlepes(szintlepes), mapSzintlepes(szintlepes)]);
}
