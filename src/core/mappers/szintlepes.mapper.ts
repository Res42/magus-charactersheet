import { Karakter, KarakterMapperFn } from '../models/karakter';
import { SzazalekosKepzettseg, getSzintenkentiBonuszFn, isFokosKepzettseg } from '../models/kepzettseg';
import { getOktatasBonusz } from '../models/oktatas';
import { KepzettsegSzintlepes, KepzettsegSzintlepesResult, Szintlepes, getKapOfSzintlepes } from '../models/szintlepes';
import { tulajdonsagNoveles } from '../models/tulajdonsag';
import { mapObjectValues } from '../utils/utils';

function validateSzintlepes(szintlepes: Szintlepes, index: number): KarakterMapperFn {
  return (karakter) => {
    const kapOfSzintlepes = getKapOfSzintlepes(szintlepes);
    if (kapOfSzintlepes !== karakter.szintenkentiKap) {
      console.warn(
        `A(z) ${index + 1}. szintlépés nem tartalmaz megfelelő mennyiségű KAP-ot. Az elkölthető KAP: ${
          karakter.szintenkentiKap
        }, a szintlépés KAP-ja: ${kapOfSzintlepes}.`
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
      maxKegy: karakter.maxKegy + (szintlepes.kegy ?? 0) + karakter.szintenkentiKegy,
      ke: karakter.ke + (szintlepes.ke ?? 0),
      ce: karakter.ce + (szintlepes.ce ?? 0),
      te: karakter.te + (szintlepes.te ?? 0),
      ve: karakter.ve + (szintlepes.ve ?? 0),
      maxFp: karakter.maxFp + (szintlepes.fp ?? 0) + karakter.szintenkentiFp,
      maxPszi: karakter.maxPszi + (szintlepes.pszi ?? 0) + karakter.szintenkentiPszi,
      asztralTME: karakter.asztralTME + karakter.szintenkentiAsztralTME,
      mentalTME: karakter.mentalTME + karakter.szintenkentiMentalTME,
    }),
  ];
}

function kepzettsegSzintlepes(szintlepes: KepzettsegSzintlepes): KarakterMapperFn {
  return (karakter) => {
    const regiSzint = karakter.kepzettsegek[szintlepes.kepzettseg.nev] ?? 0;
    const { ujSzint, shouldAddTulajdonsag } = isFokosKepzettseg(szintlepes.kepzettseg)
      ? fokosKepzettsegSzintlepes(karakter, szintlepes)
      : szazalekosKepzettsegSzintlepes(karakter, szintlepes);

    if (shouldAddTulajdonsag && szintlepes.tulajdonsag == null && szintlepes.kepzettseg.tulajdonsag?.length) {
      throw new Error(
        `A '${szintlepes.kepzettseg.nev}' képzettségnövelés bónusz tulajdonságot ad, de ez nem lett megadva!`
      );
    }

    const tulajdonsag =
      shouldAddTulajdonsag && szintlepes.tulajdonsag != null
        ? { [szintlepes.tulajdonsag]: tulajdonsagNoveles(karakter, szintlepes.tulajdonsag, 1) }
        : {};

    const bonusz = getSzintenkentiBonuszFn(szintlepes.kepzettseg)(regiSzint, ujSzint);

    return bonusz({
      ...karakter,
      kepzettsegek: {
        ...karakter.kepzettsegek,
        [szintlepes.kepzettseg.nev]: ujSzint,
      },
      tulajdonsagok: {
        ...karakter.tulajdonsagok,
        ...tulajdonsag,
      },
    });
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
  let kovetkezoSzinthezSzuksegesKp = Math.max(
    1,
    szintlepes.kepzettseg.fokok[aktualisSzint] -
      (aktualisSzint > 0 ? szintlepes.kepzettseg.fokok[aktualisSzint - 1] : 0) -
      oktatasBonusz
  );

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
  return szintlepesek.flatMap((szintlepes, index) => [
    validateSzintlepes(szintlepes, index),
    ...mapSzintlepes(szintlepes),
  ]);
}
