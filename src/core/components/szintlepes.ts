import { mapObjectValues } from '../utils';
import { getOktatasBonusz, isFokosKepzettseg, Kepzettseg, SzazalekosKepzettseg } from './kepzettseg';
import { Karakter, KarakterMapperFn } from './model';
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

export interface KepzettsegSzintlepesResult {
  ujSzint: number;
  shouldAddTulajdonsag: boolean;
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

function mapSzintlepes(szintlepes: Szintlepes): KarakterMapperFn[] {
  // Sorrend:
  //  1. tulajdonságok
  //  2. képzettségek a megfelelő sorrendben: hogy ha kapna belőle tulajdonságot, akkor azt egy másik képzettségnél már figyelembe vegye
  //  3. összes többi dolog, főleg a "szintenkénti X" hozzáadása
  return [
    (karakter) => ({
      ...karakter,
      tulajdonsagok: mapObjectValues(karakter.tulajdonsagok, (tulajdonsag) =>
        tulajdonsagNoveles(karakter, tulajdonsag, szintlepes[tulajdonsag] ?? 0)
      ),
    }),
    // TODO: képzettség sorrendezés, bónusz tulajdonságok miatt
    ...(szintlepes.kepzettsegek?.map(kepzettsegSzintlepes) ?? []),
    (karakter) => ({
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
      asztralTME: karakter.asztralTME + karakter.szintenkentiAsztralTME,
      mentalTME: karakter.mentalTME + karakter.szintenkentiMentalTME,
    }),
  ];
}

function kepzettsegSzintlepes(szintlepes: KepzettsegSzintlepes): KarakterMapperFn {
  return (karakter) => {
    const { ujSzint, shouldAddTulajdonsag } = isFokosKepzettseg(szintlepes.kepzettseg)
      ? fokosKepzettsegSzintlepes(karakter, szintlepes)
      : szazalekosKepzettsegSzintlepes(karakter, szintlepes);

    if (shouldAddTulajdonsag && szintlepes.tulajdonsag == null && szintlepes.kepzettseg.tulajdonsag?.length) {
      throw new Error(
        `A '${szintlepes.kepzettseg.nev}' képzettségnövelés bónusz tulajdonságot ad, de ez nem lett megadva!`
      );
    }

    const tulajdonsag = shouldAddTulajdonsag
      ? { [szintlepes.tulajdonsag!]: tulajdonsagNoveles(karakter, szintlepes.tulajdonsag!, 1) }
      : {};

    return {
      ...karakter,
      kepzettsegek: {
        ...karakter.kepzettsegek,
        [szintlepes.kepzettseg.nev]: ujSzint,
      },
      tulajdonsagok: {
        ...karakter.tulajdonsagok,
        ...tulajdonsag,
      },
    };
  };
}

function fokosKepzettsegSzintlepes(karakter: Karakter, szintlepes: KepzettsegSzintlepes): KepzettsegSzintlepesResult {
  if (!isFokosKepzettseg(szintlepes.kepzettseg)) {
    throw new Error('Ez a képzettség nem fokos, nem lehet így növelni a szintjét.');
  }
  // TODO: refaktor, nagyon csúnya
  // TODO: oktatás számolás rossz
  let kp = szintlepes.kp;
  const regiSzint = karakter.kepzettsegek[szintlepes.kepzettseg.nev] ?? 0;
  let aktualisSzint = karakter.kepzettsegek[szintlepes.kepzettseg.nev] ?? 0;
  const oktatasBonusz = getOktatasBonusz(karakter.oktatasok, szintlepes.kepzettseg.nev);
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

  if ((karakter.kepzettsegek[szintlepes.kepzettseg.nev] ?? 0) === aktualisSzint) {
    console.warn(
      `A megadott ${szintlepes.kp} KP-ból nem sikerült a '${szintlepes.kepzettseg.nev}' képzettségben fokot növelni. A szükséges KP ${kovetkezoSzinthezSzuksegesKp}.`
    );
  }

  return { ujSzint: aktualisSzint, shouldAddTulajdonsag: aktualisSzint >= 4 && regiSzint < 4 };
}

function szazalekosKepzettsegSzintlepes(
  karakter: Karakter,
  szintlepes: KepzettsegSzintlepes
): KepzettsegSzintlepesResult {
  // TODO: ez nem teljesen korrekt számolás, mert az oktatás 4 pl csak 80%ig ad bónuszt, utána nem
  const oktatasBonusz = karakter.oktatasok[szintlepes.kepzettseg.nev] ?? 0;
  const regiSzazalek = karakter.kepzettsegek[szintlepes.kepzettseg.nev] ?? 0;
  const ujSzazalek =
    regiSzazalek + szintlepes.kp * ((szintlepes.kepzettseg as SzazalekosKepzettseg).szazalekPerKp + oktatasBonusz);

  return {
    ujSzint: ujSzazalek,
    shouldAddTulajdonsag: ujSzazalek >= 80 && regiSzazalek < 80,
  };
}

export function mapSzintlepesek(szintlepesek: Szintlepes[]): KarakterMapperFn[] {
  return szintlepesek.flatMap((szintlepes) => [validateSzintlepes(szintlepes), ...mapSzintlepes(szintlepes)]);
}
