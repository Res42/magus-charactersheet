/** UTK + HBG alapján iskolák. */

import { AlapKepzettseg, Iskola } from '../models/hatter';
import {
  ALVILAGI_KEPZETTSEG_TYPES,
  AlkepzettsegNev,
  HARCI_KEPZETTSEG_TYPES,
  KepzettsegType,
  MISZTIKUS_KEPZETTSEG_TYPES,
  SZOCIALIS_KEPZETTSEG_TYPES,
  TUDOMANYOS_KEPZETTSEG_TYPES,
  VILAGI_KEPZETTSEG_TYPES,
  alkepzettsegNev,
} from '../models/kepzettseg';
import { Oktatasok, mergeOktatasok } from '../models/oktatas';
import { mapObjectValues } from '../utils/utils';
import { kegyelt, magiatagadas, magikusFogekonysag, nemesiVer, psziErzekenyseg, vagyon } from './hatterek';
import {
  akrobatika,
  alcazasAlruha,
  alkimia,
  allatismeret,
  csapdaallitasLeszedes,
  csapdakereses,
  csomozas,
  ekesszolas,
  elettan,
  ertekbecsles,
  eses,
  fajdalomtures,
  fegyverhasznalat,
  fegyverismeret,
  futas,
  hadvezetes,
  hajozas,
  hamisitas,
  harciLaz,
  harcmuveszet,
  harcteriGyakorlat,
  heraldika,
  herbalizmus,
  idojoslas,
  idomitas,
  irasOlvasas,
  jelbeszed,
  jogTorvenykezes,
  kinzas,
  kocsmaiVerekedes,
  kultura,
  legendaismeret,
  lelektan,
  lopodzas,
  lovaglas,
  magasmagia,
  maszas,
  mechanika,
  meregkeveresSemlegesites,
  muveszetek,
  nekromancia,
  nyelvtudas,
  nyomolvasas,
  oktatas,
  orvoslas,
  orvtamadas,
  oselemiMagia,
  osiNyelv,
  pajzshasznalat,
  parbaj,
  politikaDiplomacia,
  pszi,
  pusztakezesHarc,
  pusztitas,
  rejtekhelykutatas,
  rejtozes,
  szabadulomuveszet,
  szakma,
  szamtanMertan,
  szerencsejatek,
  szexualisKultura,
  taktika,
  tapasztalatiMagia,
  terkepeszet,
  tortenelem,
  udvariEtikettIntrika,
  uszas,
  vadonjaras,
  vallasismeret,
  vertviselet,
  veszelyerzek,
  zarnyitas,
  zsebmetszes,
} from './kepzettsegek';

// TODO: alap felszerelések
// TODO: X. szint felett valamit kap az iskolától

/* #region Harcos */

export interface HarcosOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2_1: string;
  fegyverhasznalat2_2: string;
  fegyverhasznalat2_3: string;
}

export function harcos(options: HarcosOptions): Iskola {
  return {
    nev: 'Harcos',
    kap: 4,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat3), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_1), szint: 2 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_2), szint: 2 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_3), szint: 2 },
      { kepzettseg: fegyverismeret, szint: 2 },
      { kepzettseg: fajdalomtures, szint: 2 },
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: pajzshasznalat, szint: 2 },
      { kepzettseg: allatismeret('hátasok'), szint: 1 },
      { kepzettseg: lovaglas, szint: 2 },
      { kepzettseg: futas, szint: 2 },
      { kepzettseg: maszas, szazalek: 15 },
      { kepzettseg: eses, szazalek: 15 },
      { kepzettseg: akrobatika, szazalek: 15 },
    ],
    oktatasok: {
      [KepzettsegType.Akrobatika]: 2,
      [KepzettsegType.Allatismeret]: 2,
      [KepzettsegType.Eses]: 2,
      [KepzettsegType.Fajdalomtures]: 2,
      [KepzettsegType.Fegyverhasznalat]: 2,
      [KepzettsegType.Fegyverismeret]: 2,
      [KepzettsegType.Futas]: 2,
      [KepzettsegType.HarcteriGyakorlat]: 2,
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.HarciLaz]: 2,
      [KepzettsegType.Lelektan]: 2,
      [KepzettsegType.Lovaglas]: 2,
      [KepzettsegType.Maszas]: 2,
      [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
      [KepzettsegType.Pajzshasznalat]: 2,
      [KepzettsegType.PusztakezesHarc]: 2,
      [KepzettsegType.SzamtanMertan]: 2,
      [KepzettsegType.Taktika]: 2,
      [KepzettsegType.Terkepeszet]: 2,
      [KepzettsegType.Uszas]: 2,
      [KepzettsegType.Vertviselet]: 2,
    },
  };
}

export interface HarcosAmazonOptions {
  allatismeret2: string;
  torzsiOktatasok: Oktatasok;
}

export function harcosAmazon(options: HarcosAmazonOptions): Iskola {
  return {
    nev: 'Harcos (Amazon)',
    kap: 6,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat('emrelin kard'), szint: 3 },
      { kepzettseg: fegyverhasznalat('hajítófegyverek'), szint: 2 },
      { kepzettseg: fegyverhasznalat('íjak'), szint: 2 },
      { kepzettseg: fegyverismeret, szint: 2 },
      { kepzettseg: fajdalomtures, szint: 2 },
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: futas, szint: 2 },
      { kepzettseg: uszas, szint: 2 },
      { kepzettseg: vadonjaras('mérsékelt égövi erdő'), szint: 2 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: allatismeret(options.allatismeret2), szint: 2 },
      { kepzettseg: idojoslas, szint: 2 },
      { kepzettseg: lelektan, szint: 1 },
      { kepzettseg: lelektan, szint: 1 },
      { kepzettseg: udvariEtikettIntrika, szint: 1 },
      { kepzettseg: maszas, szazalek: 10 },
      { kepzettseg: eses, szazalek: 10 },
      { kepzettseg: akrobatika, szazalek: 10 },
    ],
    oktatasok: options.torzsiOktatasok,
  };
}

export interface HarcosBarbarOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2_1: string;
  fegyverhasznalat2_2: string;
  allatismeret2: string;
  magiatagadas?: Parameters<typeof magiatagadas>[0];
}

export function harcosBarbar(options: HarcosBarbarOptions): Iskola {
  return {
    nev: 'Harcos (Barbár)',
    kap: 7,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat3), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_1), szint: 2 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_2), szint: 2 },
      { kepzettseg: fajdalomtures, szint: 3 },
      { kepzettseg: harcteriGyakorlat, szint: 3 },
      { kepzettseg: harciLaz, szint: 2 },
      { kepzettseg: pusztakezesHarc(undefined), szint: 2 },
      { kepzettseg: fegyverismeret, szint: 2 },
      { kepzettseg: futas, szint: 2 },
      { kepzettseg: uszas, szint: 2 },
      { kepzettseg: vadonjaras('keleti sztyeppék'), szint: 2 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: allatismeret(options.allatismeret2), szint: 2 },
      { kepzettseg: szakma('vadászat'), szint: 2 },
    ],
    oktatasok: Object.fromEntries([...HARCI_KEPZETTSEG_TYPES, ...VILAGI_KEPZETTSEG_TYPES].map((kt) => [kt, 2])),
    hatterek: options.magiatagadas ? [magiatagadas(options.magiatagadas)] : [],
  };
}

export const harcosErigowiSzamszerijasz: Iskola = {
  nev: 'Harcos (Erigowi Számszeríjász)',
  kap: 4,
  kepzettsegek: [
    { kepzettseg: fegyverhasznalat('vadász számszeríj'), szint: 3 },
    { kepzettseg: fegyverhasznalat('egykezes kardok'), szint: 2 },
    { kepzettseg: fegyverismeret, szint: 2 },
    { kepzettseg: csapdaallitasLeszedes, szint: 1 },
    { kepzettseg: futas, szint: 2 },
    { kepzettseg: uszas, szint: 2 },
    { kepzettseg: vadonjaras('mérsékelt égövi erdő'), szint: 2 },
    { kepzettseg: nyomolvasas, szint: 2 },
    { kepzettseg: kocsmaiVerekedes, szint: 1 },
    { kepzettseg: jelbeszed, szint: 1 },
    { kepzettseg: lopodzas, szazalek: 25 },
    { kepzettseg: rejtozes, szazalek: 25 },
  ],
  oktatasok: {
    [KepzettsegType.Akrobatika]: 2,
    [KepzettsegType.CsapdaallitasLeszedes]: 2,
    [KepzettsegType.Eses]: 2,
    [KepzettsegType.Fajdalomtures]: 2,
    [KepzettsegType.Fegyverhasznalat]: 2,
    [KepzettsegType.Fegyverismeret]: 2,
    [KepzettsegType.Futas]: 2,
    [KepzettsegType.Hadvezetes]: 2,
    [KepzettsegType.HarcteriGyakorlat]: 2,
    [KepzettsegType.Jelbeszed]: 2,
    [KepzettsegType.Lelektan]: 2,
    [KepzettsegType.Maszas]: 2,
    [KepzettsegType.Mechanika]: 2,
    [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
    [KepzettsegType.Nyomolvasas]: 2,
    [KepzettsegType.SzamtanMertan]: 2,
    [KepzettsegType.Taktika]: 2,
    [KepzettsegType.Terkepeszet]: 2,
    [KepzettsegType.Uszas]: 2,
    [KepzettsegType.Vadonjaras]: 2,
  },
};

export const harcosSiedon: Iskola = {
  nev: 'Harcos (Siedon)',
  kap: 5,
  kepzettsegek: [
    { kepzettseg: fegyverhasznalat('ramiera'), szint: 3 },
    { kepzettseg: fegyverhasznalat('tőr jellegű fegyverek'), szint: 2 },
    { kepzettseg: fegyverhasznalat('egykezes kardok'), szint: 2 },
    { kepzettseg: orvtamadas, szint: 2 },
    { kepzettseg: fegyverismeret, szint: 2 },
    { kepzettseg: elettan, szint: 1 },
    { kepzettseg: udvariEtikettIntrika, szint: 2 },
    { kepzettseg: uszas, szint: 2 },
    { kepzettseg: heraldika, szint: 1 },
    { kepzettseg: parbaj, szint: 2 },
    { kepzettseg: irasOlvasas, szint: 2 },
    { kepzettseg: fajdalomtures, szint: 2 },
    { kepzettseg: lopodzas, szazalek: 15 },
  ],
  oktatasok: {
    [KepzettsegType.Akrobatika]: 2,
    [KepzettsegType.AlcazasAlruha]: 2,
    [KepzettsegType.Csapdakereses]: 2,
    [KepzettsegType.Csomozas]: 2,
    [KepzettsegType.Elettan]: 2,
    [KepzettsegType.Eses]: 2,
    [KepzettsegType.Fajdalomtures]: 2,
    [KepzettsegType.Fegyverhasznalat]: 2,
    [KepzettsegType.Fegyverismeret]: 2,
    [KepzettsegType.HarcteriGyakorlat]: 2,
    [KepzettsegType.Heraldika]: 2,
    [KepzettsegType.IrasOlvasas]: 2,
    [KepzettsegType.Ketkezesharc]: 2,
    [KepzettsegType.Kultura]: 2,
    [KepzettsegType.Lopodzas]: 2,
    [KepzettsegType.Maszas]: 2,
    [KepzettsegType.Orvtamadas]: 2,
    [KepzettsegType.Parbaj]: 2,
    [KepzettsegType.Rejtekhelykutatas]: 2,
    [KepzettsegType.Rejtozes]: 2,
    [KepzettsegType.Szabadulomuveszet]: 2,
    [KepzettsegType.UdvariEtikettIntrika]: 2,
    [KepzettsegType.Vertviselet]: 2,
    [KepzettsegType.Zarnyitas]: 2,
  },
  hatterek: [nemesiVer],
};

export const harcosPredociVertes: Iskola = {
  nev: 'Harcos (Predoci Vértes)',
  kap: 5,
  kepzettsegek: [
    { kepzettseg: fegyverhasznalat('nehézlovas kopja'), szint: 3 },
    { kepzettseg: fegyverhasznalat('egykezes kardok'), szint: 2 },
    { kepzettseg: fegyverhasznalat('tőr jellegű fegyverek'), szint: 2 },
    { kepzettseg: fegyverismeret, szint: 2 },
    { kepzettseg: harcteriGyakorlat, szint: 2 },
    { kepzettseg: pajzshasznalat, szint: 2 },
    { kepzettseg: vertviselet, szint: 3 },
    { kepzettseg: taktika, szint: 2 },
    { kepzettseg: lovaglas, szint: 3 },
    { kepzettseg: heraldika, szint: 2 },
    { kepzettseg: udvariEtikettIntrika, szint: 2 },
    { kepzettseg: allatismeret('hátas állatok'), szint: 2 },
  ],
  oktatasok: {
    [KepzettsegType.Allatismeret]: 2,
    [KepzettsegType.Eses]: 2,
    [KepzettsegType.Fajdalomtures]: 2,
    [KepzettsegType.Fegyverhasznalat]: 2,
    [KepzettsegType.Fegyverismeret]: 2,
    [KepzettsegType.Hadvezetes]: 2,
    [KepzettsegType.HarcteriGyakorlat]: 2,
    [KepzettsegType.Heraldika]: 2,
    [KepzettsegType.Idomitas]: 2,
    [KepzettsegType.IrasOlvasas]: 2,
    [KepzettsegType.Kultura]: 2,
    [KepzettsegType.Lelektan]: 2,
    [KepzettsegType.Lovaglas]: 2,
    [KepzettsegType.Maszas]: 2,
    [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
    [alkepzettsegNev(KepzettsegType.Muveszetek, 'Irodalom')]: 2,
    [KepzettsegType.Parbaj]: 2,
    [KepzettsegType.SzamtanMertan]: 2,
    [KepzettsegType.Taktika]: 2,
    [KepzettsegType.Terkepeszet]: 2,
    [KepzettsegType.UdvariEtikettIntrika]: 2,
    [KepzettsegType.Uszas]: 2,
    [KepzettsegType.Vertviselet]: 2,
  },
  hatterek: [nemesiVer],
  // TODO: nincs CÉ-je (I. hátrány)
};

/* #endregion */

/* #region Lovag */

export interface LovagOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2_1: string;
  fegyverhasznalat2_2: string;
  extraOktatasok?: Partial<
    Record<
      | KepzettsegType.Herbalizmus
      | KepzettsegType.JogTorvenykezes
      | KepzettsegType.Orvoslas
      | KepzettsegType.OsiNyelv
      | AlkepzettsegNev<KepzettsegType.Szakma, 'Pénzügyek'>
      | KepzettsegType.Pszi
      | KepzettsegType.Pusztitas,
      boolean
    >
  >;
}

export function lovag(options: LovagOptions): Iskola {
  return {
    nev: 'Lovag',
    kap: 6,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat3), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_1), szint: 2 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_2), szint: 2 },
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: fegyverismeret, szint: 2 },
      { kepzettseg: vertviselet, szint: 3 },
      { kepzettseg: hadvezetes, szint: 1 },
      { kepzettseg: lovaglas, szint: 3 },
      { kepzettseg: udvariEtikettIntrika, szint: 2 },
      { kepzettseg: heraldika, szint: 2 },
      { kepzettseg: parbaj, szint: 2 },
      { kepzettseg: allatismeret('hátas állatok'), szint: 2 },
      { kepzettseg: tortenelem, szint: 2 },
      { kepzettseg: irasOlvasas, szint: 2 },
    ],
    oktatasok: mergeOktatasok(
      {
        [KepzettsegType.Allatismeret]: 2,
        [KepzettsegType.Elettan]: 2,
        [KepzettsegType.Eses]: 2,
        [KepzettsegType.Fajdalomtures]: 2,
        [KepzettsegType.Fegyverhasznalat]: 2,
        [KepzettsegType.Fegyverismeret]: 2,
        [KepzettsegType.Hadvezetes]: 2,
        [KepzettsegType.HarcteriGyakorlat]: 2,
        [KepzettsegType.Heraldika]: 2,
        [KepzettsegType.IrasOlvasas]: 2,
        [KepzettsegType.Kultura]: 2,
        [KepzettsegType.Lelektan]: 2,
        [KepzettsegType.Lovaglas]: 2,
        [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
        [KepzettsegType.Nyelvtudas]: 2,
        [KepzettsegType.Pajzshasznalat]: 2,
        [KepzettsegType.Parbaj]: 2,
        [KepzettsegType.SzamtanMertan]: 2,
        [KepzettsegType.Taktika]: 2,
        [KepzettsegType.Terkepeszet]: 2,
        [KepzettsegType.Tortenelem]: 2,
        [KepzettsegType.UdvariEtikettIntrika]: 2,
        [KepzettsegType.Vertviselet]: 2,
      },
      mapObjectValues((options.extraOktatasok ?? {}) as Oktatasok, (_, v) => (v ? 2 : undefined))
    ),
    hatterek: [nemesiVer],
  };
}

export interface LovagFeketerendOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2: string;
}

export function lovagFeketerend(options: LovagFeketerendOptions): Iskola {
  return {
    nev: 'Lovag (Feketerend)',
    kap: 8,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat3), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: pajzshasznalat, szint: 2 },
      { kepzettseg: fajdalomtures, szint: 2 },
      { kepzettseg: fegyverismeret, szint: 2 },
      { kepzettseg: vertviselet, szint: 3 },
      { kepzettseg: hadvezetes, szint: 1 },
      { kepzettseg: lovaglas, szint: 3 },
      { kepzettseg: udvariEtikettIntrika, szint: 2 },
      { kepzettseg: heraldika, szint: 2 },
      { kepzettseg: parbaj, szint: 1 },
      { kepzettseg: tortenelem, szint: 2 },
      { kepzettseg: irasOlvasas, szint: 2 },
      { kepzettseg: vallasismeret('Ranagol'), szint: 2 },
      { kepzettseg: osiNyelv('aquir'), szint: 2 },
    ],
    oktatasok: {
      [KepzettsegType.Allatismeret]: 2,
      [KepzettsegType.Elettan]: 2,
      [KepzettsegType.Eses]: 2,
      [KepzettsegType.Fajdalomtures]: 2,
      [KepzettsegType.Fegyverhasznalat]: 2,
      [KepzettsegType.Fegyverismeret]: 2,
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.HarcteriGyakorlat]: 2,
      [KepzettsegType.Heraldika]: 2,
      [KepzettsegType.IrasOlvasas]: 2,
      [KepzettsegType.Kultura]: 2,
      [KepzettsegType.Lelektan]: 2,
      [KepzettsegType.Lovaglas]: 2,
      [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
      [KepzettsegType.Nyelvtudas]: 2,
      [alkepzettsegNev(KepzettsegType.OsiNyelv, 'aquir')]: 2,
      [KepzettsegType.Pajzshasznalat]: 2,
      [KepzettsegType.Parbaj]: 2,
      [alkepzettsegNev(KepzettsegType.Pszi, 'pyarroni')]: 2,
      [KepzettsegType.Pusztitas]: 2,
      [KepzettsegType.SzamtanMertan]: 2,
      [KepzettsegType.Taktika]: 2,
      [KepzettsegType.Terkepeszet]: 2,
      [KepzettsegType.Tortenelem]: 2,
      [KepzettsegType.UdvariEtikettIntrika]: 2,
      [KepzettsegType.Vertviselet]: 2,
    },
    hatterek: [vagyon(1)],
  };
}

export interface LovagMaricoConRaboraOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2: string;
}

export function lovagMaricoConRabora(options: LovagMaricoConRaboraOptions): Iskola {
  return {
    nev: 'Lovag (Marico con Rabora)',
    kap: 7,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat3), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: pajzshasznalat, szint: 3 },
      { kepzettseg: fegyverismeret, szint: 2 },
      { kepzettseg: vertviselet, szint: 2 },
      { kepzettseg: hadvezetes, szint: 1 },
      { kepzettseg: lovaglas, szint: 3 },
      { kepzettseg: udvariEtikettIntrika, szint: 2 },
      { kepzettseg: heraldika, szint: 2 },
      { kepzettseg: parbaj, szint: 1 },
      { kepzettseg: tortenelem, szint: 2 },
      { kepzettseg: irasOlvasas, szint: 2 },
      { kepzettseg: vallasismeret('Ranagol'), szint: 3 },
      { kepzettseg: osiNyelv('aquir'), szint: 2 },
    ],
    oktatasok: mergeOktatasok(
      {
        [KepzettsegType.Allatismeret]: 2,
        [KepzettsegType.Eses]: 2,
        [KepzettsegType.Fajdalomtures]: 2,
        [KepzettsegType.Fegyverhasznalat]: 2,
        [KepzettsegType.Fegyverismeret]: 2,
        [KepzettsegType.Hadvezetes]: 2,
        [KepzettsegType.HarcteriGyakorlat]: 2,
        [KepzettsegType.Heraldika]: 2,
        [KepzettsegType.IrasOlvasas]: 2,
        [KepzettsegType.Kultura]: 2,
        [KepzettsegType.Legendaismeret]: 2,
        [KepzettsegType.Lelektan]: 2,
        [KepzettsegType.Lovaglas]: 2,
        [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
        [KepzettsegType.Nyelvtudas]: 2,
        [KepzettsegType.Pajzshasznalat]: 2,
        [KepzettsegType.Parbaj]: 2,
        [alkepzettsegNev(KepzettsegType.Pszi, 'pyarroni')]: 2,
        [KepzettsegType.SzamtanMertan]: 2,
        [KepzettsegType.Taktika]: 2,
        [KepzettsegType.Terkepeszet]: 2,
        [KepzettsegType.Tortenelem]: 2,
        [KepzettsegType.UdvariEtikettIntrika]: 2,
        [KepzettsegType.Vallasismeret]: 2,
        [KepzettsegType.Vertviselet]: 2,
      },
      Object.fromEntries([...TUDOMANYOS_KEPZETTSEG_TYPES, ...ALVILAGI_KEPZETTSEG_TYPES].map((kt) => [kt, 1]))
    ),
  };
}

export interface LovagIstenKardjaOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2: string;
}

function lovagIstenKardjaKepzettsegek(options: LovagIstenKardjaOptions): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverhasznalat3), szint: 3 },
    { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
    { kepzettseg: harcteriGyakorlat, szint: 2 },
    { kepzettseg: pajzshasznalat, szint: 2 },
    { kepzettseg: fegyverismeret, szint: 2 },
    { kepzettseg: vertviselet, szint: 3 },
    { kepzettseg: hadvezetes, szint: 1 },
    { kepzettseg: lovaglas, szint: 3 },
    { kepzettseg: udvariEtikettIntrika, szint: 2 },
    { kepzettseg: heraldika, szint: 2 },
    { kepzettseg: parbaj, szint: 1 },
    { kepzettseg: tortenelem, szint: 2 },
    { kepzettseg: irasOlvasas, szint: 2 },
    { kepzettseg: vallasismeret('Domvik'), szint: 3 },
    { kepzettseg: osiNyelv('lingua domini'), szint: 2 },
  ];
}

const LOVAGI_ISTEN_KARDJA_OKTATASOK: Oktatasok = {
  [KepzettsegType.Allatismeret]: 2,
  [KepzettsegType.Eses]: 2,
  [KepzettsegType.Fajdalomtures]: 2,
  [KepzettsegType.Fegyverhasznalat]: 2,
  [KepzettsegType.Fegyverismeret]: 2,
  [KepzettsegType.Hadvezetes]: 2,
  [KepzettsegType.HarcteriGyakorlat]: 2,
  [KepzettsegType.Heraldika]: 2,
  [KepzettsegType.IrasOlvasas]: 2,
  [KepzettsegType.Kultura]: 2,
  [KepzettsegType.Legendaismeret]: 2,
  [KepzettsegType.Lelektan]: 2,
  [KepzettsegType.Lovaglas]: 2,
  [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
  [KepzettsegType.Nyelvtudas]: 2,
  [alkepzettsegNev(KepzettsegType.OsiNyelv, 'ligua domini')]: 2,
  [KepzettsegType.Pajzshasznalat]: 2,
  [KepzettsegType.Parbaj]: 2,
  [alkepzettsegNev(KepzettsegType.Pszi, 'pyarroni')]: 2,
  [KepzettsegType.SzamtanMertan]: 2,
  [KepzettsegType.Taktika]: 2,
  [KepzettsegType.Terkepeszet]: 2,
  [KepzettsegType.Tortenelem]: 2,
  [KepzettsegType.UdvariEtikettIntrika]: 2,
  [KepzettsegType.Vallasismeret]: 2,
  [KepzettsegType.Vertviselet]: 2,
};

export function lovagIstenKardjaElsoArc(options: LovagIstenKardjaOptions): Iskola {
  return {
    nev: 'Lovag (Isten Kardja Első Arc)',
    kap: 8,
    kepzettsegek: [
      ...lovagIstenKardjaKepzettsegek(options),
      { kepzettseg: orvoslas, szint: 2 },
      { kepzettseg: elettan, szint: 2 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: lelektan, szint: 2 },
    ],
    oktatasok: mergeOktatasok(LOVAGI_ISTEN_KARDJA_OKTATASOK, {
      [KepzettsegType.Orvoslas]: 2,
      [KepzettsegType.Elettan]: 2,
      [KepzettsegType.Herbalizmus]: 2,
      [KepzettsegType.Lelektan]: 2,
    }),
  };
}

export function lovagIstenKardjaMasodikArc(options: LovagIstenKardjaOptions): Iskola {
  return {
    nev: 'Lovag (Isten Kardja Második Arc)',
    kap: 7,
    kepzettsegek: [
      ...lovagIstenKardjaKepzettsegek(options),
      { kepzettseg: lelektan, szint: 3 },
      { kepzettseg: szakma('Pénzügyek'), szint: 2 },
      { kepzettseg: szamtanMertan, szint: 2 },
    ],
    oktatasok: mergeOktatasok(LOVAGI_ISTEN_KARDJA_OKTATASOK, {
      [KepzettsegType.Lelektan]: 2,
      [alkepzettsegNev(KepzettsegType.Szakma, 'Pénzügyek')]: 2,
      [KepzettsegType.SzamtanMertan]: 2,
    }),
  };
}

export function lovagIstenKardjaHarmadikArc(options: LovagIstenKardjaOptions): Iskola {
  return {
    nev: 'Lovag (Isten Kardja Harmadik Arc)',
    kap: 8,
    kepzettsegek: [
      ...lovagIstenKardjaKepzettsegek(options),
      { kepzettseg: pusztitas, szint: 3 },
      { kepzettseg: elettan, szint: 3 },
    ],
    oktatasok: mergeOktatasok(LOVAGI_ISTEN_KARDJA_OKTATASOK, {
      [KepzettsegType.Pusztitas]: 2,
      [KepzettsegType.Elettan]: 2,
    }),
  };
}

export function lovagIstenKardjaNegyedikArc(options: LovagIstenKardjaOptions): Iskola {
  return {
    nev: 'Lovag (Isten Kardja Negyedik Arc)',
    kap: 8,
    kepzettsegek: [
      ...lovagIstenKardjaKepzettsegek(options),
      { kepzettseg: orvoslas, szint: 3 },
      { kepzettseg: elettan, szint: 3 },
      { kepzettseg: herbalizmus, szint: 3 },
    ],
    oktatasok: mergeOktatasok(LOVAGI_ISTEN_KARDJA_OKTATASOK, {
      [KepzettsegType.Orvoslas]: 2,
      [KepzettsegType.Elettan]: 2,
      [KepzettsegType.Herbalizmus]: 2,
    }),
  };
}
export function lovagIstenKardjaOtodikArc(options: LovagIstenKardjaOptions): Iskola {
  return {
    nev: 'Lovag (Isten Kardja Ötödik Arc)',
    kap: 7,
    kepzettsegek: [
      ...lovagIstenKardjaKepzettsegek(options),
      { kepzettseg: oktatas, szint: 3 },
      { kepzettseg: lelektan, szint: 2 },
    ],
    oktatasok: mergeOktatasok(LOVAGI_ISTEN_KARDJA_OKTATASOK, {
      [KepzettsegType.Oktatas]: 2,
      [KepzettsegType.Lelektan]: 2,
    }),
  };
}

export function lovagIstenKardjaHatodikkArc(options: LovagIstenKardjaOptions): Iskola {
  return {
    nev: 'Lovag (Isten Kardja Hatodik Arc)',
    kap: 7,
    kepzettsegek: [
      ...lovagIstenKardjaKepzettsegek(options),
      { kepzettseg: lelektan, szint: 3 },
      { kepzettseg: vallasismeret('Ranagol'), szint: 3 },
    ],
    oktatasok: mergeOktatasok(LOVAGI_ISTEN_KARDJA_OKTATASOK, {
      [KepzettsegType.Lelektan]: 2,
    }),
  };
}

export interface LovagErigowiKradOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2: string;
}

export function lovagErigowiKrad(options: LovagErigowiKradOptions): Iskola {
  return {
    nev: 'Lovag (Erigowi Krad)',
    kap: 8,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat3), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: fegyverismeret, szint: 2 },
      { kepzettseg: vertviselet, szint: 3 },
      { kepzettseg: hadvezetes, szint: 3 },
      { kepzettseg: lovaglas, szint: 3 },
      { kepzettseg: udvariEtikettIntrika, szint: 2 },
      { kepzettseg: heraldika, szint: 2 },
      { kepzettseg: parbaj, szint: 1 },
      { kepzettseg: lelektan, szint: 2 },
      { kepzettseg: tortenelem, szint: 3 },
      { kepzettseg: irasOlvasas, szint: 2 },
      { kepzettseg: szamtanMertan, szint: 2 },
      { kepzettseg: terkepeszet, szint: 2 },
    ],
    oktatasok: mergeOktatasok(
      {
        [KepzettsegType.Allatismeret]: 2,
        [KepzettsegType.Eses]: 2,
        [KepzettsegType.Fajdalomtures]: 2,
        [KepzettsegType.Fegyverhasznalat]: 2,
        [KepzettsegType.Fegyverismeret]: 2,
        [KepzettsegType.Hadvezetes]: 2,
        [KepzettsegType.HarcteriGyakorlat]: 2,
        [KepzettsegType.Heraldika]: 2,
        [KepzettsegType.IrasOlvasas]: 2,
        [KepzettsegType.Kultura]: 2,
        [KepzettsegType.Legendaismeret]: 2,
        [KepzettsegType.Lelektan]: 2,
        [KepzettsegType.Lovaglas]: 2,
        [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
        [KepzettsegType.Pajzshasznalat]: 2,
        [KepzettsegType.Parbaj]: 2,
        [alkepzettsegNev(KepzettsegType.Pszi, 'pyarroni')]: 2,
        [KepzettsegType.SzamtanMertan]: 2,
        [KepzettsegType.Taktika]: 2,
        [KepzettsegType.Terkepeszet]: 2,
        [KepzettsegType.Tortenelem]: 2,
        [KepzettsegType.UdvariEtikettIntrika]: 2,
        [KepzettsegType.Vallasismeret]: 2,
        [KepzettsegType.Vertviselet]: 2,
      },
      Object.fromEntries([...TUDOMANYOS_KEPZETTSEG_TYPES, ...MISZTIKUS_KEPZETTSEG_TYPES].map((kt) => [kt, 1]))
    ),
  };
}

/* #endregion */

/* #region TODO: Fejvadász */

export interface FejvadaszHarcosOptions {
  fegyverhasznalat3: string;
  fegyverhasznalat2: string;
}

export function fejvadaszHarcos(options: FejvadaszHarcosOptions): Iskola {
  return {
    nev: 'Fejvadász (Harcos)',
    kap: 7,
    hatterek: [psziErzekenyseg],
    kepzettsegek: [],
    oktatasok: {},
  };
}

export const fejvadaszOrgyilkos: Iskola = {
  nev: 'Fejvadász (Orgyilkos)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszFelderito: Iskola = {
  nev: 'Fejvadász (Felderítő)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszTestor: Iskola = {
  nev: 'Fejvadász (Testőr)',
  kap: 7,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszVertestverHarcos: Iskola = {
  nev: 'Fejvadász (Vértestvér, Harcos)',
  kap: 7,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszVertestverOrgyilkos: Iskola = {
  nev: 'Fejvadász (Vértestvér, Orgyilkos)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszVertestverFelderito: Iskola = {
  nev: 'Fejvadász (Vértestvér, Felderítő)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszVertestverTestor: Iskola = {
  nev: 'Fejvadász (Vértestvér, Testőr)',
  kap: 7,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanHarcos: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Harcos)',
  kap: 7,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanOrgyilkos: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Orgyilkos)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanFelderito: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Felderítő)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanTestor: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Testőr)',
  kap: 7,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekHarcos: Iskola = {
  nev: 'Fejvadász (Ikrek, Harcos)',
  kap: 7,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekOrgyilkos: Iskola = {
  nev: 'Fejvadász (Ikrek, Orgyilkos)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekFelderito: Iskola = {
  nev: 'Fejvadász (Ikrek, Felderítő)',
  kap: 8,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekTestor: Iskola = {
  nev: 'Fejvadász (Ikrek, Testőr)',
  kap: 7,
  hatterek: [psziErzekenyseg],
  kepzettsegek: [],
  oktatasok: {},
};

/* #endregion */

/* #region Tolvaj */

const TOLVAJ_OKTATASOK: Oktatasok = {
  [KepzettsegType.Akrobatika]: 2,
  [KepzettsegType.AlcazasAlruha]: 2,
  [KepzettsegType.Csapdakereses]: 2,
  [KepzettsegType.Csomozas]: 2,
  [KepzettsegType.Ekesszolas]: 2,
  [KepzettsegType.Elettan]: 2,
  [KepzettsegType.Epiteszet]: 2,
  [KepzettsegType.Ertekbecsles]: 2,
  [KepzettsegType.Eses]: 2,
  [KepzettsegType.Fegyverhasznalat]: 2,
  [KepzettsegType.Hamisitas]: 2,
  [KepzettsegType.Helyismeret]: 2,
  [KepzettsegType.Heraldika]: 2,
  [KepzettsegType.IrasOlvasas]: 2,
  [KepzettsegType.Jelbeszed]: 2,
  [KepzettsegType.Ketkezesharc]: 2,
  [KepzettsegType.KocsmaiVerekedes]: 2,
  [KepzettsegType.Kultura]: 2,
  [KepzettsegType.Legendaismeret]: 2,
  [KepzettsegType.Lelektan]: 2,
  [KepzettsegType.Lopodzas]: 2,
  [KepzettsegType.Maszas]: 2,
  [KepzettsegType.Mechanika]: 2,
  [KepzettsegType.Muveszetek]: 2,
  [KepzettsegType.Nyomolvasas]: 2,
  [KepzettsegType.Orvtamadas]: 2,
  [KepzettsegType.Rejtekhelykutatas]: 2,
  [KepzettsegType.Rejtozes]: 2,
  [KepzettsegType.Szabadulomuveszet]: 2,
  [KepzettsegType.SzamtanMertan]: 2,
  [KepzettsegType.Szerencsejatek]: 2,
  [KepzettsegType.Szineszet]: 2,
  [KepzettsegType.UdvariEtikettIntrika]: 2,
  [KepzettsegType.Zarnyitas]: 2,
  [KepzettsegType.Zsebmetszes]: 2,
};

export interface TolvajKepzettsegekOptions {
  fegyverhasznalat2: string;
}

function tolvajKepzettsegek(options: TolvajKepzettsegekOptions): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
    { kepzettseg: lelektan, szint: 1 },
    { kepzettseg: csomozas, szint: 2 },
    { kepzettseg: ertekbecsles, szint: 2 },
    { kepzettseg: alcazasAlruha, szint: 2 },
    { kepzettseg: jelbeszed, szint: 1 },
    { kepzettseg: orvtamadas, szint: 1 },
    { kepzettseg: szabadulomuveszet, szint: 1 },
    { kepzettseg: szerencsejatek, szint: 1 },
    { kepzettseg: mechanika, szint: 2 },
    { kepzettseg: szamtanMertan, szint: 2 },
    { kepzettseg: rejtekhelykutatas, szazalek: 15 },
    { kepzettseg: zarnyitas, szazalek: 15 },
    { kepzettseg: zsebmetszes, szazalek: 15 },
    { kepzettseg: lopodzas, szazalek: 15 },
    { kepzettseg: rejtozes, szazalek: 15 },
    { kepzettseg: maszas, szazalek: 15 },
    { kepzettseg: eses, szazalek: 15 },
    { kepzettseg: akrobatika, szazalek: 15 },
    { kepzettseg: csapdakereses, szazalek: 15 },
  ];
}

export interface ZsebesTolvajKepzettsegekOptions {
  fegyverhasznalat2: string;
}

function zsebesTolvajKepzettsegek(options: ZsebesTolvajKepzettsegekOptions): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
    { kepzettseg: alcazasAlruha, szint: 2 },
    { kepzettseg: mechanika, szint: 2 },
    { kepzettseg: szamtanMertan, szint: 2 },
    { kepzettseg: ertekbecsles, szint: 2 },
    { kepzettseg: orvtamadas, szint: 1 },
    { kepzettseg: jelbeszed, szint: 1 },
    { kepzettseg: szabadulomuveszet, szint: 1 },
    { kepzettseg: csomozas, szint: 1 },
    { kepzettseg: szerencsejatek, szint: 1 },
    { kepzettseg: lelektan, szint: 1 },
    { kepzettseg: rejtekhelykutatas, szazalek: 15 },
    { kepzettseg: zarnyitas, szazalek: 15 },
    { kepzettseg: zsebmetszes, szazalek: 45 },
    { kepzettseg: lopodzas, szazalek: 30 },
    { kepzettseg: rejtozes, szazalek: 15 },
    { kepzettseg: maszas, szazalek: 15 },
    { kepzettseg: eses, szazalek: 15 },
    { kepzettseg: akrobatika, szazalek: 15 },
  ];
}

export interface HamisitoTolvajKepzettsegekOptions {
  fegyverhasznalat2: string;
  szakma2: string;
  muveszetek2: string;
}

function hamisitoTolvajKepzettsegek(options: HamisitoTolvajKepzettsegekOptions): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
    { kepzettseg: hamisitas, szint: 3 },
    { kepzettseg: mechanika, szint: 2 },
    { kepzettseg: szamtanMertan, szint: 2 },
    { kepzettseg: ertekbecsles, szint: 3 },
    { kepzettseg: ekesszolas, szint: 2 },
    { kepzettseg: szakma(options.szakma2), szint: 2 },
    { kepzettseg: csomozas, szint: 1 },
    { kepzettseg: lelektan, szint: 1 },
    { kepzettseg: heraldika, szint: 2 },
    { kepzettseg: muveszetek(options.muveszetek2), szint: 2 },
    { kepzettseg: irasOlvasas, szint: 3 },
    { kepzettseg: rejtekhelykutatas, szazalek: 10 },
    { kepzettseg: zarnyitas, szazalek: 10 },
    { kepzettseg: lopodzas, szazalek: 10 },
    { kepzettseg: rejtozes, szazalek: 10 },
    { kepzettseg: maszas, szazalek: 10 },
    { kepzettseg: eses, szazalek: 10 },
    { kepzettseg: akrobatika, szazalek: 10 },
  ];
}

export interface BesurranoTolvajKepzettsegekOptions {
  fegyverhasznalat2: string;
}

function besurranoTolvajKepzettsegek(options: BesurranoTolvajKepzettsegekOptions): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
    { kepzettseg: alcazasAlruha, szint: 2 },
    { kepzettseg: mechanika, szint: 2 },
    { kepzettseg: szamtanMertan, szint: 2 },
    { kepzettseg: ertekbecsles, szint: 3 },
    { kepzettseg: orvtamadas, szint: 1 },
    { kepzettseg: jelbeszed, szint: 1 },
    { kepzettseg: szabadulomuveszet, szint: 1 },
    { kepzettseg: csomozas, szint: 1 },
    { kepzettseg: lelektan, szint: 1 },
    { kepzettseg: rejtekhelykutatas, szazalek: 30 },
    { kepzettseg: zarnyitas, szazalek: 30 },
    { kepzettseg: zsebmetszes, szazalek: 10 },
    { kepzettseg: lopodzas, szazalek: 30 },
    { kepzettseg: rejtozes, szazalek: 30 },
    { kepzettseg: maszas, szazalek: 30 },
    { kepzettseg: eses, szazalek: 15 },
    { kepzettseg: akrobatika, szazalek: 30 },
    { kepzettseg: csapdakereses, szazalek: 20 },
    { kepzettseg: veszelyerzek, szazalek: 15 },
  ];
}

export function tolvaj(options: TolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj',
    kap: 5,
    kepzettsegek: tolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajZsebes(options: ZsebesTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Zsebes)',
    kap: 5,
    kepzettsegek: zsebesTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajHamisito(options: HamisitoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Hamisító)',
    kap: 6,
    kepzettsegek: hamisitoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Besurranó)',
    kap: 6,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajKobrak(options: TolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Kobrák)',
    kap: 6,
    kepzettsegek: tolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajKobrakZsebes(options: ZsebesTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Kobrák, Zsebes)',
    kap: 6,
    kepzettsegek: zsebesTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajKobrakHamisito(options: HamisitoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Kobrák, Hamisító)',
    kap: 6,
    kepzettsegek: hamisitoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajKobrakBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Kobrák, Besurranó)',
    kap: 7,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajTalavarCsodamuvesei(options: TolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Talavar csodaművesei)',
    kap: 6,
    kepzettsegek: tolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajTalavarCsodamuveseiZsebes(options: ZsebesTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Talavar csodaművesei, Zsebes)',
    kap: 6,
    kepzettsegek: zsebesTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajTalavarCsodamuveseiHamisito(options: HamisitoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Talavar csodaművesei, Hamisító)',
    kap: 7,
    kepzettsegek: hamisitoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajTalavarCsodamuveseiBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Talavar csodaművesei, Besurranó)',
    kap: 7,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajSzurkecsuklyasok(options: TolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Szürkecsuklyások)',
    kap: 5,
    kepzettsegek: tolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajSzurkecsuklyasokZsebes(options: ZsebesTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Szürkecsuklyások, Zsebes)',
    kap: 6,
    kepzettsegek: zsebesTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajSzurkecsuklyasokHamisito(options: HamisitoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Szürkecsuklyások, Hamisító)',
    kap: 6,
    kepzettsegek: hamisitoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export function tolvajSzurkecsuklyasokBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Szürkecsuklyások, Besurranó)',
    kap: 6,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

/* #endregion */

/* #region Bárd */

export interface BardOptions {
  fegyverhasznalat2: string;
  muveszetek3_1: 'Éneklés' | 'Zenélés';
  muveszetek3_2: string;
  anyanyelv: string;
  szulofoldKultura: string;
  pyarroniPsziOktatas?: boolean;
}

export function bard(options: BardOptions): Iskola {
  return {
    nev: 'Bárd',
    kap: 5,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: szexualisKultura, szint: 2 },
      { kepzettseg: muveszetek(options.muveszetek3_1), szint: 3 },
      { kepzettseg: muveszetek(options.muveszetek3_2), szint: 3 },
      { kepzettseg: nyelvtudas(options.anyanyelv), szint: 4 },
      { kepzettseg: kultura(options.szulofoldKultura), szint: 4 },
      { kepzettseg: legendaismeret, szint: 3 },
      { kepzettseg: tapasztalatiMagia('bárd'), szint: 3 },
      { kepzettseg: lopodzas, szazalek: 10 },
      { kepzettseg: rejtozes, szazalek: 10 },
    ],
    oktatasok: mergeOktatasok(
      {
        [KepzettsegType.AlcazasAlruha]: 2,
        [KepzettsegType.Ekesszolas]: 2,
        [KepzettsegType.Ertekbecsles]: 2,
        [KepzettsegType.Fegyverhasznalat]: 2,
        [KepzettsegType.IrasOlvasas]: 2,
        [KepzettsegType.Heraldika]: 2,
        [KepzettsegType.KocsmaiVerekedes]: 2,
        [KepzettsegType.Kultura]: 2,
        [KepzettsegType.Legendaismeret]: 2,
        [KepzettsegType.Lelektan]: 2,
        [KepzettsegType.Lopodzas]: 2,
        [KepzettsegType.Muveszetek]: 2,
        [KepzettsegType.Nyelvtudas]: 2,
        [KepzettsegType.Parbaj]: 2,
        [KepzettsegType.Rejtekhelykutatas]: 2,
        [KepzettsegType.Rejtozes]: 2,
        [KepzettsegType.Szerencsejatek]: 2,
        [KepzettsegType.SzexualisKultura]: 2,
        [KepzettsegType.Szineszet]: 2,
        [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'bárd')]: 2,
        [KepzettsegType.Tortenelem]: 2,
        [KepzettsegType.UdvariEtikettIntrika]: 2,
        [KepzettsegType.Zarnyitas]: 2,
      },
      options.pyarroniPsziOktatas ? { [alkepzettsegNev(KepzettsegType.Pszi, 'pyarroni')]: 2 } : {}
    ),
    hatterek: [magikusFogekonysag],
  };
}

export interface BardAszisziEnekmondoOptions {
  fegyverhasznalat2: string;
}

export function bardAszisziEnekmondo(options: BardAszisziEnekmondoOptions): Iskola {
  return {
    nev: 'Bárd (Asziszi Énekmondó)',
    kap: 5,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: fegyverhasznalat('dobófegyverek'), szint: 2 },
      { kepzettseg: kocsmaiVerekedes, szint: 2 },
      { kepzettseg: ertekbecsles, szint: 1 },
      { kepzettseg: szerencsejatek, szint: 2 },
      { kepzettseg: legendaismeret, szint: 1 },
      { kepzettseg: muveszetek('Éneklés'), szint: 1 },
      { kepzettseg: muveszetek('Zenélés'), szint: 1 },
      { kepzettseg: szexualisKultura, szint: 2 },
      { kepzettseg: lelektan, szint: 1 },
      { kepzettseg: tapasztalatiMagia('bárd'), szint: 3 },
      { kepzettseg: akrobatika, szazalek: 10 },
      { kepzettseg: lopodzas, szazalek: 10 },
      { kepzettseg: rejtozes, szazalek: 10 },
      { kepzettseg: zsebmetszes, szazalek: 10 },
      { kepzettseg: csapdakereses, szazalek: 10 },
      { kepzettseg: rejtekhelykutatas, szazalek: 10 },
    ],
    oktatasok: {
      [KepzettsegType.Akrobatika]: 2,
      [KepzettsegType.AlcazasAlruha]: 2,
      [KepzettsegType.Csapdakereses]: 2,
      [KepzettsegType.Csomozas]: 2,
      [KepzettsegType.Ertekbecsles]: 2,
      [KepzettsegType.Fegyverhasznalat]: 2,
      [KepzettsegType.Hamisitas]: 2,
      [KepzettsegType.Heraldika]: 2,
      [KepzettsegType.IrasOlvasas]: 2,
      [KepzettsegType.Kocsihajtas]: 2,
      [KepzettsegType.KocsmaiVerekedes]: 2,
      [KepzettsegType.Kultura]: 2,
      [KepzettsegType.Legendaismeret]: 2,
      [KepzettsegType.Lelektan]: 2,
      [KepzettsegType.Lopodzas]: 2,
      [KepzettsegType.Muveszetek]: 2,
      [KepzettsegType.Rejtekhelykutatas]: 2,
      [KepzettsegType.Rejtozes]: 2,
      [KepzettsegType.Szabadulomuveszet]: 2,
      [KepzettsegType.Szerencsejatek]: 2,
      [KepzettsegType.SzexualisKultura]: 2,
      [KepzettsegType.Szineszet]: 2,
      [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'bárd')]: 2,
      [KepzettsegType.Tortenelem]: 2,
      [KepzettsegType.Zarnyitas]: 2,
      [KepzettsegType.Zsebmetszes]: 2,
    },
    hatterek: [magikusFogekonysag],
  };
}

export const bardLombhullasArvai: Iskola = {
  nev: 'Bárd (Lombhullás Árvái)',
  kap: 6,
  kepzettsegek: [
    { kepzettseg: fegyverhasznalat('egykezes kardok'), szint: 2 },
    { kepzettseg: fegyverhasznalat('tőr jellegű fegyverek'), szint: 2 },
    { kepzettseg: muveszetek('Éneklés'), szint: 3 },
    { kepzettseg: muveszetek('Zenélés'), szint: 2 },
    // TODO: ez nem az alap színészet képesség kéne legyen?
    { kepzettseg: muveszetek('Színészet'), szint: 2 },
    { kepzettseg: muveszetek('Irodalom'), szint: 2 },
    { kepzettseg: parbaj, szint: 2 },
    { kepzettseg: udvariEtikettIntrika, szint: 2 },
    { kepzettseg: heraldika, szint: 1 },
    { kepzettseg: irasOlvasas, szint: 2 },
    { kepzettseg: legendaismeret, szint: 2 },
  ],
  oktatasok: {
    [KepzettsegType.Akrobatika]: 2,
    [KepzettsegType.Ertekbecsles]: 2,
    [KepzettsegType.Fegyverhasznalat]: 2,
    [KepzettsegType.Heraldika]: 2,
    [KepzettsegType.IrasOlvasas]: 2,
    [KepzettsegType.Legendaismeret]: 2,
    [KepzettsegType.Lelektan]: 2,
    [KepzettsegType.Lopodzas]: 2,
    [KepzettsegType.Muveszetek]: 2,
    [KepzettsegType.Nyelvtudas]: 2,
    [KepzettsegType.Rejtekhelykutatas]: 2,
    [KepzettsegType.Rejtozes]: 2,
    [KepzettsegType.Szerencsejatek]: 2,
    [KepzettsegType.SzexualisKultura]: 2,
    [KepzettsegType.Szineszet]: 2,
    [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'bárd')]: 2,
    [KepzettsegType.Tortenelem]: 2,
  },
  hatterek: [magikusFogekonysag, nemesiVer],
  tiltottKepzettsegek: [
    KepzettsegType.KocsmaiVerekedes,
    KepzettsegType.Orvtamadas,
    KepzettsegType.MeregkeveresSemlegesites,
    KepzettsegType.Zsebmetszes,
    KepzettsegType.Szakma,
  ],
};

export interface BardVandorloDalnokOptions {}

export function bardVandorloDalnok(options: BardVandorloDalnokOptions): Iskola {
  return {
    nev: 'Bárd (Vándorló dalnok)',
    kap: 5,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat('egykezes kardok'), szint: 2 },
      { kepzettseg: fegyverhasznalat('dobófegyverek'), szint: 2 },
      { kepzettseg: lovaglas, szint: 3 },
      { kepzettseg: idomitas, szint: 2 },
      { kepzettseg: allatismeret('hátas állatok'), szint: 2 },
      { kepzettseg: vadonjaras('mérsékelt égövi erdő'), szint: 2 },
      { kepzettseg: nyomolvasas, szint: 2 },
      { kepzettseg: herbalizmus, szint: 1 },
      { kepzettseg: legendaismeret, szint: 2 },
      { kepzettseg: muveszetek('Éneklés'), szint: 2 },
      { kepzettseg: muveszetek('Zenélés'), szint: 2 },
      { kepzettseg: tapasztalatiMagia('bárd'), szint: 3 },
      { kepzettseg: maszas, szazalek: 10 },
      { kepzettseg: eses, szazalek: 10 },
      { kepzettseg: akrobatika, szazalek: 10 },
    ],
    oktatasok: {
      [KepzettsegType.Akrobatika]: 2,
      [KepzettsegType.Allatismeret]: 2,
      [KepzettsegType.Csomozas]: 2,
      [KepzettsegType.Ertekbecsles]: 2,
      [KepzettsegType.Eses]: 2,
      [KepzettsegType.Fegyverhasznalat]: 2,
      [KepzettsegType.Hangutanzas]: 2,
      [KepzettsegType.HarcteriGyakorlat]: 2,
      [KepzettsegType.Herbalizmus]: 2,
      [KepzettsegType.Idomitas]: 2,
      [KepzettsegType.KocsmaiVerekedes]: 2,
      [KepzettsegType.Kultura]: 2,
      [KepzettsegType.Legendaismeret]: 2,
      [KepzettsegType.Lelektan]: 2,
      [KepzettsegType.Lopodzas]: 2,
      [KepzettsegType.Maszas]: 2,
      [alkepzettsegNev(KepzettsegType.Muveszetek, 'Éneklés')]: 2,
      [alkepzettsegNev(KepzettsegType.Muveszetek, 'Zenélés')]: 2,
      [KepzettsegType.Parbaj]: 2,
      [KepzettsegType.Rejtozes]: 2,
      [KepzettsegType.SzexualisKultura]: 2,
      [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'bárd')]: 2,
      [KepzettsegType.Vadonjaras]: 2,
    },
    hatterek: [magikusFogekonysag],
    tiltottKepzettsegek: [
      KepzettsegType.Kinzas,
      KepzettsegType.Pusztitas,
      KepzettsegType.Orvtamadas,
      KepzettsegType.MeregkeveresSemlegesites,
      KepzettsegType.Zsebmetszes,
    ],
  };
}

export const bardSotet: Iskola = {
  nev: 'Bárd (Sötét bárd)',
  kap: 5,
  kepzettsegek: [
    { kepzettseg: fegyverhasznalat('egykezes kardok'), szint: 2 },
    { kepzettseg: fegyverhasznalat('tőr jellegű fegyverek'), szint: 2 },
    { kepzettseg: kinzas, szint: 2 },
    { kepzettseg: orvtamadas, szint: 2 },
    { kepzettseg: tapasztalatiMagia('bárd'), szint: 3 },
    { kepzettseg: elettan, szint: 2 },
    { kepzettseg: irasOlvasas, szint: 2 },
    { kepzettseg: udvariEtikettIntrika, szint: 2 },
    { kepzettseg: lelektan, szint: 1 },
    { kepzettseg: vallasismeret('Ranagol'), szint: 1 },
    { kepzettseg: alcazasAlruha, szint: 1 },
    { kepzettseg: muveszetek('Éneklés'), szint: 2 },
    { kepzettseg: muveszetek('Zenélés'), szint: 2 },
    { kepzettseg: muveszetek('Szobrászat'), szint: 1 },
    { kepzettseg: muveszetek('Irodalom'), szint: 1 },
    { kepzettseg: lopodzas, szazalek: 10 },
    { kepzettseg: rejtozes, szazalek: 10 },
  ],
  oktatasok: {
    [KepzettsegType.Fegyverhasznalat]: 2,
    [KepzettsegType.Vallasismeret]: 2,
    [KepzettsegType.Kinzas]: 2,
    [KepzettsegType.Lelektan]: 2,
    [KepzettsegType.Muveszetek]: 2,
    [KepzettsegType.Szineszet]: 2,
    [KepzettsegType.AlcazasAlruha]: 2,
    [KepzettsegType.Orvtamadas]: 2,
    [KepzettsegType.Lopodzas]: 2,
    [KepzettsegType.Rejtozes]: 2,
    [KepzettsegType.Ketkezesharc]: 2,
    [KepzettsegType.Kultura]: 2,
    [KepzettsegType.Elettan]: 2,
    [KepzettsegType.IrasOlvasas]: 2,
    [KepzettsegType.Legendaismeret]: 2,
    [KepzettsegType.Tortenelem]: 2,
    [KepzettsegType.UdvariEtikettIntrika]: 2,
    [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'bárd')]: 2,
  },
  hatterek: [magikusFogekonysag],
};

/* #endregion */

/* #region Harcművész */

const HARCMUVESZ_KEPZETTSEGEK: AlapKepzettseg[] = [
  { kepzettseg: pszi('Slan Út'), szint: 3 },
  { kepzettseg: irasOlvasas, szint: 1 },
  { kepzettseg: orvoslas, szint: 2 },
  { kepzettseg: elettan, szint: 2 },
  { kepzettseg: herbalizmus, szint: 2 },
  { kepzettseg: eses, szazalek: 10 },
  { kepzettseg: akrobatika, szazalek: 10 },
];

const HARCMUVESZ_OKTATASOK: Oktatasok = {
  [KepzettsegType.Akrobatika]: 2,
  [KepzettsegType.Elettan]: 2,
  [KepzettsegType.Eses]: 2,
  [KepzettsegType.Fajdalomtures]: 2,
  [KepzettsegType.Fegyverismeret]: 2,
  [KepzettsegType.Futas]: 2,
  [KepzettsegType.Harcmuveszet]: 2,
  [KepzettsegType.HarcteriGyakorlat]: 2,
  [KepzettsegType.Herbalizmus]: 2,
  [KepzettsegType.IrasOlvasas]: 2,
  [KepzettsegType.Ketkezesharc]: 2,
  [KepzettsegType.Kultura]: 2,
  [KepzettsegType.Muveszetek]: 2,
  [KepzettsegType.Nyelvtudas]: 2,
  [KepzettsegType.Orvoslas]: 2,
  [KepzettsegType.Parbaj]: 2,
  [alkepzettsegNev(KepzettsegType.Pszi, 'Slan Út')]: 2,
  [KepzettsegType.UdvariEtikettIntrika]: 2,
  [KepzettsegType.Vakharc]: 2,
  [KepzettsegType.Vertviselet]: 2,
};

export interface HarcmuveszOptions {
  harcmuveszFegyver: string;
}

export function harcmuveszShienKaTo(options: HarcmuveszOptions): Iskola {
  return {
    nev: 'Harcművész (Shien-ka-to)',
    kap: 7,
    kepzettsegek: [
      { kepzettseg: harcmuveszet('Shien-ka-to'), szint: 3 },
      { kepzettseg: harcmuveszet(options.harcmuveszFegyver), szint: 3 },
      ...HARCMUVESZ_KEPZETTSEGEK,
    ],
    oktatasok: HARCMUVESZ_OKTATASOK,
    hatterek: [psziErzekenyseg],
  };
}

export function harcmuveszDartNidKinito(options: HarcmuveszOptions): Iskola {
  return {
    nev: 'Harcművész (Dart-nid-kinito)',
    kap: 5,
    kepzettsegek: [
      { kepzettseg: harcmuveszet('Dart-nid-kinito'), szint: 3 },
      { kepzettseg: harcmuveszet(options.harcmuveszFegyver), szint: 3 },
      ...HARCMUVESZ_KEPZETTSEGEK,
    ],
    oktatasok: mergeOktatasok(HARCMUVESZ_OKTATASOK, {
      [KepzettsegType.Nekromancia]: 1,
      [KepzettsegType.Demonologia]: 1,
      [alkepzettsegNev(KepzettsegType.OsiNyelv, 'kyr')]: 1,
    }),
    hatterek: [psziErzekenyseg],
  };
}

export function harcmuveszAvadKaKinito(options: HarcmuveszOptions): Iskola {
  return {
    nev: 'Harcművész (Avad-ka-kinito)',
    kap: 7,
    kepzettsegek: [
      { kepzettseg: harcmuveszet('Avad-ka-kinito'), szint: 3 },
      { kepzettseg: harcmuveszet(options.harcmuveszFegyver), szint: 3 },
      ...HARCMUVESZ_KEPZETTSEGEK,
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: vertviselet, szint: 2 },
      { kepzettseg: hadvezetes, szint: 2 },
    ],
    oktatasok: mergeOktatasok(HARCMUVESZ_OKTATASOK, {
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.Terkepeszet]: 2,
      [KepzettsegType.SzamtanMertan]: 2,
      [KepzettsegType.Lelektan]: 2,
      [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
    }),
    hatterek: [psziErzekenyseg],
  };
}

export function harcmuveszNisenNidTo(options: HarcmuveszOptions): Iskola {
  return {
    nev: 'Harcművész (Nisen-nid-to)',
    kap: 6,
    kepzettsegek: [
      { kepzettseg: harcmuveszet('Nisen-nid-to'), szint: 3 },
      { kepzettseg: harcmuveszet(options.harcmuveszFegyver), szint: 3 },
      ...HARCMUVESZ_KEPZETTSEGEK,
    ],
    oktatasok: mergeOktatasok(HARCMUVESZ_OKTATASOK, {
      [KepzettsegType.Veszelyerzek]: 2,
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.Lelektan]: 2,
      [KepzettsegType.Terkepeszet]: 2,
      [KepzettsegType.SzamtanMertan]: 2,
      [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
      [KepzettsegType.Taktika]: 2,
    }),
    hatterek: [psziErzekenyseg],
  };
}

export const harcmuveszUdvariKardmuvesz: Iskola = {
  nev: 'Harcművész (Udvari Kardművész)',
  kap: 9,
  kepzettsegek: [
    { kepzettseg: harcmuveszet('Slan kard'), szint: 3 },
    { kepzettseg: harcmuveszet('Slan tőr'), szint: 3 },
    ...HARCMUVESZ_KEPZETTSEGEK,
  ],
  oktatasok: mergeOktatasok(HARCMUVESZ_OKTATASOK, {
    ...Object.fromEntries([...SZOCIALIS_KEPZETTSEG_TYPES, ...TUDOMANYOS_KEPZETTSEG_TYPES].map((kt) => [kt, 1])),
    [KepzettsegType.Hadvezetes]: 1,
    [KepzettsegType.Lelektan]: 1,
  }),
  hatterek: [psziErzekenyseg, nemesiVer, vagyon(1)],
  // TODO: harcmuveszet('Slan kard') KP feléért tanulható
};

export const harcmuveszHarcUtjaKardmuvesz: Iskola = {
  nev: 'Harcművész (Harc útja Kardművész)',
  kap: 9,
  kepzettsegek: [
    { kepzettseg: harcmuveszet('Slan kard'), szint: 3 },
    { kepzettseg: harcmuveszet('Slan tőr'), szint: 3 },
    ...HARCMUVESZ_KEPZETTSEGEK,
  ],
  oktatasok: mergeOktatasok(HARCMUVESZ_OKTATASOK, {
    ...Object.fromEntries(HARCI_KEPZETTSEG_TYPES.map((kt) => [kt, 1])),
    [KepzettsegType.Lelektan]: 1,
    [KepzettsegType.SzamtanMertan]: 1,
    [KepzettsegType.Terkepeszet]: 1,
    [KepzettsegType.JogTorvenykezes]: 1,
    [KepzettsegType.Tortenelem]: 1,
    [KepzettsegType.Vallasismeret]: 1,
    [KepzettsegType.Allatismeret]: 1,
    [KepzettsegType.Lovaglas]: 1,
  }),
  hatterek: [psziErzekenyseg],
};

/* #endregion */

/* #region Pap */

export interface PapOptions {
  fegyverVagyFegyverTipus: string;
  nyelvtudas3: string;
  nyelvtudas2: string;
}

function papKepzettsegek(options: PapOptions & { vallas: string }): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverVagyFegyverTipus), szint: 2 },
    { kepzettseg: vallasismeret(options.vallas), szint: 3 },
    { kepzettseg: lelektan, szint: 2 },
    { kepzettseg: ekesszolas, szint: 2 },
    { kepzettseg: irasOlvasas, szint: 3 },
    { kepzettseg: nyelvtudas(options.nyelvtudas3), szint: 3 },
    { kepzettseg: nyelvtudas(options.nyelvtudas2), szint: 2 },
    { kepzettseg: tortenelem, szint: 2 },
    { kepzettseg: legendaismeret, szint: 1 },
  ];
}

const PAP_OKTATASOK: Oktatasok = {
  [KepzettsegType.Ekesszolas]: 2,
  [KepzettsegType.Elettan]: 2,
  [KepzettsegType.Fegyverhasznalat]: 2,
  [KepzettsegType.Heraldika]: 2,
  [KepzettsegType.Herbalizmus]: 2,
  [KepzettsegType.IrasOlvasas]: 2,
  [KepzettsegType.JogTorvenykezes]: 2,
  [KepzettsegType.Kultura]: 2,
  [KepzettsegType.Legendaismeret]: 2,
  [KepzettsegType.Lelektan]: 2,
  [KepzettsegType.Muveszetek]: 2,
  [KepzettsegType.Nyelvtudas]: 2,
  [KepzettsegType.Orvoslas]: 2,
  [KepzettsegType.OsiNyelv]: 2,
  [KepzettsegType.PolitikaDiplomacia]: 2,
  [KepzettsegType.Pszi]: 2,
  [KepzettsegType.SzamtanMertan]: 2,
  [KepzettsegType.Terkepeszet]: 2,
  [KepzettsegType.Tortenelem]: 2,
  [KepzettsegType.UdvariEtikettIntrika]: 2,
  [KepzettsegType.Vallasismeret]: 2,
};

export function papDomvik(options: PapOptions): Iskola {
  return {
    nev: 'Pap (Domvik)',
    kap: 7,
    kepzettsegek: [
      ...papKepzettsegek({ ...options, vallas: 'Domvik' }),
      { kepzettseg: jogTorvenykezes, szint: 2 },
      { kepzettseg: osiNyelv('lingua domini'), szint: 3 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: orvoslas, szint: 2 },
      { kepzettseg: elettan, szint: 2 },
    ],
    oktatasok: mergeOktatasok(PAP_OKTATASOK, {
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.Oktatas]: 2,
      [alkepzettsegNev(KepzettsegType.OsiNyelv, 'lingua domini')]: 2,
      [alkepzettsegNev(KepzettsegType.OsiNyelv, 'godoni')]: 2,
    }),
    hatterek: [kegyelt],
  };
}

export function papRanagol(options: PapOptions): Iskola {
  return {
    nev: 'Pap (Ranagol)',
    kap: 7,
    kepzettsegek: [
      ...papKepzettsegek({ ...options, vallas: 'Ranagol' }),
      { kepzettseg: osiNyelv('aquir'), szint: 2 },
      { kepzettseg: pszi('pyarroni'), szint: 3 },
      { kepzettseg: kinzas, szint: 2 },
      { kepzettseg: elettan, szint: 2 },
      { kepzettseg: meregkeveresSemlegesites, szint: 2 },
      { kepzettseg: alkimia, szint: 1 },
      { kepzettseg: herbalizmus, szint: 1 },
    ],
    oktatasok: mergeOktatasok(PAP_OKTATASOK, {
      [KepzettsegType.Alkimia]: 2,
      [KepzettsegType.Kinzas]: 2,
      [KepzettsegType.Muveszetek]: 2,
      [alkepzettsegNev(KepzettsegType.OsiNyelv, 'aquir')]: 2,
    }),
    hatterek: [kegyelt],
  };
}

export interface PapArelOptions extends PapOptions {
  fegyverhasznalatIj: string;
  vadonjarasTereptipus: string;
}

export function papArel(options: PapArelOptions): Iskola {
  return {
    nev: 'Pap (Arel)',
    kap: 7,
    kepzettsegek: [
      ...papKepzettsegek({ ...options, vallas: 'Arel' }).filter(
        (ak) => ak.kepzettseg.kepzettsegType !== KepzettsegType.IrasOlvasas
      ),
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalatIj), szint: 3 },
      { kepzettseg: harcteriGyakorlat, szint: 2 },
      { kepzettseg: lovaglas, szint: 3 },
      { kepzettseg: vadonjaras(options.vadonjarasTereptipus), szint: 2 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: allatismeret('hátas állatok'), szint: 2 },
      { kepzettseg: idomitas, szint: 2 },
      { kepzettseg: szakma('Vadászat'), szint: 3 },
    ],
    oktatasok: mergeOktatasok(PAP_OKTATASOK, {
      [KepzettsegType.Allatismeret]: 2,
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.HarciLaz]: 2,
      [KepzettsegType.HarcteriGyakorlat]: 2,
      [KepzettsegType.Fajdalomtures]: 2,
      [KepzettsegType.Fegyverismeret]: 2,
      [KepzettsegType.Idomitas]: 2,
      [KepzettsegType.KocsmaiVerekedes]: 2,
      [KepzettsegType.Lovaglas]: 2,
      [KepzettsegType.Nyomolvasas]: 2,
      [alkepzettsegNev(KepzettsegType.Szakma, 'Vadászat')]: 2,
      [KepzettsegType.Szerencsejatek]: 2,
      [KepzettsegType.Vadonjaras]: 2,
    }),
    hatterek: [kegyelt],
  };
}

export function papKyel(options: PapOptions): Iskola {
  return {
    nev: 'Pap (Kyel)',
    kap: 8,
    kepzettsegek: [
      ...papKepzettsegek({ ...options, vallas: 'Kyel' }),
      { kepzettseg: vertviselet, szint: 2 },
      { kepzettseg: hadvezetes, szint: 1 },
      { kepzettseg: harcteriGyakorlat, szint: 1 },
      { kepzettseg: pajzshasznalat, szint: 2 },
      { kepzettseg: pusztitas, szint: 2 },
      { kepzettseg: elettan, szint: 1 },
      { kepzettseg: jogTorvenykezes, szint: 3 },
      { kepzettseg: pszi('pyarroni'), szint: 2 },
    ],
    oktatasok: mergeOktatasok(PAP_OKTATASOK, {
      [KepzettsegType.Fegyverismeret]: 2,
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.HarcteriGyakorlat]: 2,
      [KepzettsegType.Pajzshasznalat]: 2,
      [KepzettsegType.Pusztitas]: 2,
      [KepzettsegType.Vertviselet]: 2,
    }),
    hatterek: [kegyelt, psziErzekenyseg],
  };
}

export function papSogron(options: PapOptions): Iskola {
  return {
    nev: 'Pap (Sogron)',
    kap: 7,
    kepzettsegek: [
      ...papKepzettsegek({ ...options, vallas: 'Sogron' }),
      { kepzettseg: hadvezetes, szint: 2 },
      { kepzettseg: vertviselet, szint: 1 },
      { kepzettseg: oselemiMagia('tűz'), szint: 2 },
      { kepzettseg: osiNyelv('kyr'), szint: 2 },
    ],
    oktatasok: mergeOktatasok(PAP_OKTATASOK, {
      [KepzettsegType.Hadvezetes]: 2,
      [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'tűzvarázsló')]: 2,
      [KepzettsegType.Vertviselet]: 2,
    }),
    hatterek: [kegyelt],
  };
}

export function papTharr(options: PapOptions): Iskola {
  return {
    nev: 'Pap (Tharr)',
    kap: 7,
    kepzettsegek: [
      ...papKepzettsegek({ ...options, vallas: 'Tharr' }),
      { kepzettseg: elettan, szint: 2 },
      { kepzettseg: kinzas, szint: 2 },
      { kepzettseg: politikaDiplomacia, szint: 2 },
      { kepzettseg: orvtamadas, szint: 2 },
      { kepzettseg: meregkeveresSemlegesites, szint: 2 },
      { kepzettseg: herbalizmus, szint: 1 },
      { kepzettseg: alkimia, szint: 1 },
      { kepzettseg: udvariEtikettIntrika, szint: 2 },
    ],
    oktatasok: mergeOktatasok(PAP_OKTATASOK, {
      [KepzettsegType.Alkimia]: 2,
      [KepzettsegType.Kinzas]: 2,
      [KepzettsegType.MeregkeveresSemlegesites]: 2,
      [KepzettsegType.Orvtamadas]: 2,
    }),
    hatterek: [kegyelt],
  };
}

/* #endregion */

/* #region TODO: Paplovag */

export function paplovagDarton(): Iskola {
  return {
    nev: 'Paplovag (Darton)',
    kap: 8,
    kepzettsegek: [],
    oktatasok: {},
    hatterek: [kegyelt],
  };
}

export function paplovagDomvik(): Iskola {
  return {
    nev: 'Paplovag (Domvik)',
    kap: 9,
    kepzettsegek: [],
    oktatasok: {},
    hatterek: [kegyelt],
  };
}

export function paplovagDreina(): Iskola {
  return {
    nev: 'Paplovag (Dreina)',
    kap: 8,
    kepzettsegek: [],
    oktatasok: {},
    hatterek: [kegyelt],
  };
}

export function paplovagAranykorKrad(): Iskola {
  return {
    nev: 'Paplovag (Aranykör (Krad))',
    kap: 8,
    kepzettsegek: [],
    oktatasok: {},
    hatterek: [kegyelt],
  };
}

export function paplovagRanagol(): Iskola {
  return {
    nev: 'Paplovag (Ranagol)',
    kap: 8,
    kepzettsegek: [],
    oktatasok: {},
    hatterek: [kegyelt],
  };
}

export function paplovagFonixSogron(): Iskola {
  return {
    nev: 'Paplovag (Főnix (Sogron))',
    kap: 8,
    kepzettsegek: [],
    oktatasok: {},
    hatterek: [kegyelt],
  };
}

export function paplovagBosszuangyalUwel(): Iskola {
  return {
    nev: 'Paplovag (Bosszúangyal (Uwel))',
    kap: 8,
    kepzettsegek: [],
    oktatasok: {},
    hatterek: [kegyelt],
  };
}

/* #endregion */

/* #region TODO: Boszorkány */

export const boszorkany: Iskola = { nev: 'Boszorkány', kap: 6, kepzettsegek: [], oktatasok: {} };

export const boszorkanyLiviniaiGyulekezet: Iskola = {
  nev: 'Boszorkány (Liviniai Gyülekezet)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const boszorkanyMaidaSaluquas: Iskola = {
  nev: 'Boszorkány (Maida Saluquas)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const boszorkanyStellaProsylens: Iskola = {
  nev: 'Boszorkány (Stella Prosylens)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const boszorkanyAlidaxiBoszorkanyrend: Iskola = {
  nev: 'Boszorkány (Alidaxi boszorkányrend)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const boszorkanyEzerFatyolNoverei: Iskola = {
  nev: 'Boszorkány (Ezer Fátyol Nővérei)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

/* #endregion */

/* #region Boszorkánymester */

export const BOSZORKANYMESTER_OKTATASOK: Oktatasok = {
  [KepzettsegType.Alkimia]: 2,
  [KepzettsegType.Elettan]: 2,
  [KepzettsegType.Fegyverhasznalat]: 2,
  [KepzettsegType.Heraldika]: 2,
  [KepzettsegType.Herbalizmus]: 2,
  [KepzettsegType.Idojoslas]: 2,
  [KepzettsegType.IrasOlvasas]: 2,
  [KepzettsegType.Kultura]: 2,
  [KepzettsegType.Legendaismeret]: 2,
  [KepzettsegType.MeregkeveresSemlegesites]: 2,
  [KepzettsegType.Nekromancia]: 2,
  [KepzettsegType.Nyelvtudas]: 2,
  [KepzettsegType.Orvoslas]: 2,
  [KepzettsegType.Orvtamadas]: 2,
  [alkepzettsegNev(KepzettsegType.Pszi, 'pyarroni')]: 2,
  [KepzettsegType.Szakma]: 2,
  [KepzettsegType.SzamtanMertan]: 2,
  [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'boszorkánymester')]: 2,
  [KepzettsegType.Tortenelem]: 2,
};

export interface BoszorkanymesterOptions {
  fegyverhasznalat2: string;
  nyelvtudas2: string;
}

export function boszorkanymester(options: BoszorkanymesterOptions): Iskola {
  return {
    nev: 'Boszorkánymester',
    kap: 6,
    kepzettsegek: [
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: nyelvtudas(options.nyelvtudas2), szint: 2 },
      { kepzettseg: alkimia, szint: 2 },
      { kepzettseg: elettan, szint: 2 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: irasOlvasas, szint: 2 },
      { kepzettseg: meregkeveresSemlegesites, szint: 2 },
      { kepzettseg: szamtanMertan, szint: 2 },
      { kepzettseg: nekromancia, szint: 2 },
      { kepzettseg: pszi('pyarroni'), szint: 2 },
      { kepzettseg: tapasztalatiMagia('boszorkánymester'), szint: 2 },
    ],
    oktatasok: BOSZORKANYMESTER_OKTATASOK,
    hatterek: [magikusFogekonysag, psziErzekenyseg],
  };
}

export interface BoszorkanymesterAszisziVerkelyhesekOptions {
  fegyverhasznalat2: string;
  nyelvtudas2: string;
}

export function boszorkanymesterAszisziVerkelyhesek(options: BoszorkanymesterAszisziVerkelyhesekOptions): Iskola {
  return {
    nev: 'Boszorkánymester (Asziszi Vérkelyhesek)',
    kap: 9,
    kepzettsegek: [
      { kepzettseg: tapasztalatiMagia('boszorkánymester'), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: herbalizmus, szint: 3 },
      { kepzettseg: alkimia, szint: 3 },
      { kepzettseg: meregkeveresSemlegesites, szint: 3 },
      { kepzettseg: irasOlvasas, szint: 2 },
      { kepzettseg: szamtanMertan, szint: 3 },
      { kepzettseg: pszi('pyarroni'), szint: 2 },
      { kepzettseg: nekromancia, szint: 2 },
      { kepzettseg: elettan, szint: 2 },
      { kepzettseg: nyelvtudas(options.nyelvtudas2), szint: 2 },
      { kepzettseg: politikaDiplomacia, szint: 3 },
      { kepzettseg: udvariEtikettIntrika, szint: 3 },
      { kepzettseg: tortenelem, szint: 3 },
    ],
    oktatasok: mergeOktatasok(BOSZORKANYMESTER_OKTATASOK, {
      [KepzettsegType.UdvariEtikettIntrika]: 2,
      [KepzettsegType.PolitikaDiplomacia]: 2,
      [KepzettsegType.Tortenelem]: 2,
    }),
    hatterek: [magikusFogekonysag, psziErzekenyseg, vagyon(1)],
  };
}

export interface BoszorkanymesterAscensMorgaOptions {
  fegyverhasznalat2_1: string;
  fegyverhasznalat2_2: string;
}

export function boszorkanymesterAscensMorga(options: BoszorkanymesterAscensMorgaOptions): Iskola {
  return {
    nev: 'Boszorkánymester (Ascens Morga)',
    kap: 8,
    kepzettsegek: [
      { kepzettseg: tapasztalatiMagia('boszorkánymester'), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_1), szint: 2 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2_2), szint: 2 },
      { kepzettseg: herbalizmus, szint: 3 },
      { kepzettseg: alkimia, szint: 3 },
      { kepzettseg: meregkeveresSemlegesites, szint: 3 },
      { kepzettseg: irasOlvasas, szint: 2 },
      { kepzettseg: szamtanMertan, szint: 3 },
      { kepzettseg: pszi('pyarroni'), szint: 2 },
      { kepzettseg: nekromancia, szint: 1 },
      { kepzettseg: elettan, szint: 2 },
      { kepzettseg: orvtamadas, szint: 2 },
      { kepzettseg: politikaDiplomacia, szint: 1 },
      { kepzettseg: udvariEtikettIntrika, szint: 2 },
      { kepzettseg: tortenelem, szint: 2 },
    ],
    oktatasok: mergeOktatasok(BOSZORKANYMESTER_OKTATASOK, {
      [KepzettsegType.UdvariEtikettIntrika]: 2,
      [KepzettsegType.PolitikaDiplomacia]: 2,
      [KepzettsegType.Tortenelem]: 2,
      [KepzettsegType.Terkepeszet]: 2,
      [KepzettsegType.Lelektan]: 2,
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.Taktika]: 2,
      [KepzettsegType.Muveszetek]: 2,
      [KepzettsegType.Runamagia]: 2,
      [KepzettsegType.Szineszet]: 2,
    }),
    hatterek: [magikusFogekonysag, psziErzekenyseg],
  };
}

export interface BoszorkanymesterHergoliVillammesterOptions {
  fegyverhasznalat2: string;
}

export function boszorkanymesterHergoliVillammester(options: BoszorkanymesterHergoliVillammesterOptions): Iskola {
  return {
    nev: 'Boszorkánymester (Hergoli Villámmester)',
    kap: 8,
    kepzettsegek: [
      { kepzettseg: tapasztalatiMagia('boszorkánymester'), szint: 3 },
      { kepzettseg: fegyverhasznalat(options.fegyverhasznalat2), szint: 2 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: alkimia, szint: 2 },
      { kepzettseg: meregkeveresSemlegesites, szint: 2 },
      { kepzettseg: irasOlvasas, szint: 2 },
      { kepzettseg: szamtanMertan, szint: 2 },
      { kepzettseg: pszi('pyarroni'), szint: 2 },
      { kepzettseg: politikaDiplomacia, szint: 2 },
      { kepzettseg: csomozas, szint: 2 },
      { kepzettseg: ertekbecsles, szint: 2 },
      { kepzettseg: hajozas, szint: 2 },
    ],
    oktatasok: mergeOktatasok(BOSZORKANYMESTER_OKTATASOK, {
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.Lelektan]: 2,
      [KepzettsegType.Terkepeszet]: 2,
      [alkepzettsegNev(KepzettsegType.Muveszetek, 'Rajz')]: 2,
      [KepzettsegType.Hajozas]: 2,
      [KepzettsegType.Csomozas]: 2,
      [KepzettsegType.Ertekbecsles]: 2,
      [KepzettsegType.Kultura]: 2,
      [alkepzettsegNev(KepzettsegType.Szakma, 'Pénzügyek')]: 2,
      [KepzettsegType.PolitikaDiplomacia]: 2,
      [KepzettsegType.UdvariEtikettIntrika]: 2,
    }),
    hatterek: [magikusFogekonysag, psziErzekenyseg],
  };
}

/* #endregion */

/* #region TODO: Tűzvarázsló */

export const tuzvarazsloOrdani: Iskola = { nev: 'Tűzvarázsló (Ordani)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const tuzvarazsloRenegat: Iskola = { nev: 'Tűzvarázsló (Renegát)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const tuzvarazsloAschaonTuzmesterei: Iskola = {
  nev: 'Tűzvarázsló (Aschaon Tűzmesterei)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: mergeOktatasok(
    // TODO: alap tűzvarázsló oktatások
    {},
    {
      [alkepzettsegNev(KepzettsegType.TapasztalatiMagia, 'Boszkorkánymesteri mágia')]: 1,
    }
  ),
  hatterek: [magikusFogekonysag, psziErzekenyseg],
};

/* #endregion */

/* #region Varázsló */

const VARAZSLO_OKTATASOK: Oktatasok = {
  [KepzettsegType.Alkimia]: 2,
  [KepzettsegType.Demonologia]: 2,
  [KepzettsegType.Dragakomagia]: 2,
  [KepzettsegType.Elettan]: 2,
  [KepzettsegType.Epiteszet]: 2,
  [KepzettsegType.Heraldika]: 2,
  [KepzettsegType.Herbalizmus]: 2,
  [KepzettsegType.IrasOlvasas]: 2,
  [KepzettsegType.Kultura]: 2,
  [KepzettsegType.Legendaismeret]: 2,
  [KepzettsegType.Lelektan]: 2,
  [KepzettsegType.Magasmagia]: 2,
  [KepzettsegType.Nekromancia]: 2,
  [KepzettsegType.Nyelvtudas]: 2,
  [KepzettsegType.Orvoslas]: 2,
  [KepzettsegType.OselemiMagia]: 2,
  [KepzettsegType.OsiNyelv]: 2,
  [KepzettsegType.PolitikaDiplomacia]: 2,
  [alkepzettsegNev(KepzettsegType.Pszi, 'kyr')]: 2,
  [KepzettsegType.Runamagia]: 2,
  [KepzettsegType.Tortenelem]: 2,
  [KepzettsegType.Szakma]: 2,
  [KepzettsegType.SzamtanMertan]: 2,
  [KepzettsegType.UdvariEtikettIntrika]: 2,
};

export interface VarazsloKepzettsegekOptions {
  nyelvtudas3: string;
  nyelvtudas2: string;
  osiNyelv3: string;
}

function varazsloKepzettsegek(options: VarazsloKepzettsegekOptions): AlapKepzettseg[] {
  return [
    { kepzettseg: nyelvtudas(options.nyelvtudas3), szint: 3 },
    { kepzettseg: nyelvtudas(options.nyelvtudas2), szint: 2 },
    { kepzettseg: politikaDiplomacia, szint: 2 },
    { kepzettseg: udvariEtikettIntrika, szint: 2 },
    { kepzettseg: irasOlvasas, szint: 3 },
    { kepzettseg: osiNyelv(options.osiNyelv3), szint: 3 },
    { kepzettseg: szamtanMertan, szint: 3 },
    { kepzettseg: tortenelem, szint: 2 },
    { kepzettseg: magasmagia, szint: 3 },
    { kepzettseg: pszi('kyr'), szint: 4 },
  ];
}

function lardoriGodoniVarazsloKepzettsegek(options: VarazsloKepzettsegekOptions): AlapKepzettseg[] {
  return [
    { kepzettseg: nyelvtudas(options.nyelvtudas3), szint: 3 },
    { kepzettseg: nyelvtudas(options.nyelvtudas2), szint: 2 },
    { kepzettseg: politikaDiplomacia, szint: 2 },
    { kepzettseg: udvariEtikettIntrika, szint: 2 },
    { kepzettseg: irasOlvasas, szint: 3 },
    { kepzettseg: osiNyelv(options.osiNyelv3), szint: 3 },
    { kepzettseg: szamtanMertan, szint: 3 },
    { kepzettseg: tortenelem, szint: 2 },
    { kepzettseg: magasmagia, szint: 3 },
    { kepzettseg: pszi('Godoni Örökség'), szint: 4 },
  ];
}

export function varazslo(options: VarazsloKepzettsegekOptions): Iskola {
  return {
    nev: 'Varázsló',
    kap: 9,
    kepzettsegek: varazsloKepzettsegek(options),
    oktatasok: VARAZSLO_OKTATASOK,
    hatterek: [magikusFogekonysag, psziErzekenyseg],
  };
}

export interface LarDoriVarazsloOptions extends VarazsloKepzettsegekOptions {
  godoniPszi?: boolean;
}

export function varazsloLarDori(options: LarDoriVarazsloOptions): Iskola {
  return {
    nev: 'Varázsló (Lar-Dori)',
    kap: 10,
    kepzettsegek: options.godoniPszi ? lardoriGodoniVarazsloKepzettsegek(options) : varazsloKepzettsegek(options),
    oktatasok: options.godoniPszi
      ? mergeOktatasok(VARAZSLO_OKTATASOK, { [alkepzettsegNev(KepzettsegType.Pszi, 'Godoni Örökség')]: 2 })
      : VARAZSLO_OKTATASOK,
    hatterek: [magikusFogekonysag, psziErzekenyseg],
  };
}

export function varazsloPyarroni(options: VarazsloKepzettsegekOptions): Iskola {
  return {
    nev: 'Varázsló (Pyarroni)',
    kap: 10,
    kepzettsegek: varazsloKepzettsegek(options),
    oktatasok: VARAZSLO_OKTATASOK,
    hatterek: [magikusFogekonysag, psziErzekenyseg],
  };
}

export function varazsloDorani(options: VarazsloKepzettsegekOptions): Iskola {
  return {
    nev: 'Varázsló (Dorani)',
    kap: 10,
    kepzettsegek: varazsloKepzettsegek(options),
    oktatasok: VARAZSLO_OKTATASOK,
    hatterek: [magikusFogekonysag, psziErzekenyseg],
  };
}

/* #endregion */
