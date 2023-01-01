/** UTK + HBG alapján iskolák. */

import { AlapKepzettseg, Iskola } from '../models/hatter';
import {
  AlkepzettsegNev,
  alkepzettsegNev,
  HARCI_KEPZETTSEG_TYPES,
  KepzettsegType,
  VILAGI_KEPZETTSEG_TYPES,
} from '../models/kepzettseg';
import { mergeOktatasok, Oktatasok } from '../models/oktatas';
import { mapObjectValues } from '../utils/utils';
import { magiatagadas, magikusFogekonysag, nemesiVer, psziErzekenyseg } from './hatterek';
import {
  akrobatika,
  alcazasAlruha,
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
  hamisitas,
  harciLaz,
  harcteriGyakorlat,
  heraldika,
  herbalizmus,
  idojoslas,
  irasOlvasas,
  jelbeszed,
  jogTorvenykezes,
  kocsmaiVerekedes,
  legendaismeret,
  lelektan,
  lopodzas,
  lovaglas,
  magasmagia,
  maszas,
  mechanika,
  muveszetek,
  nyelvtudas,
  nyomolvasas,
  orvoslas,
  orvtamadas,
  osiNyelv,
  pajzshasznalat,
  parbaj,
  politikaDiplomacia,
  pszi,
  pusztakezesHarc,
  rejtekhelykutatas,
  rejtozes,
  szabadulomuveszet,
  szakma,
  szamtanMertan,
  szerencsejatek,
  taktika,
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

/* #region TODO: Lovag */

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
      mapObjectValues(options.extraOktatasok ?? {}, (_, v) => (v ? 2 : undefined))
    ),
    hatterek: [nemesiVer],
  };
}

export const lovagFeketerend: Iskola = { nev: 'Lovag (Feketerend)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const lovagMaricoConRabora: Iskola = {
  nev: 'Lovag (Marico con Rabora)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const lovagShadoniElsoArc: Iskola = { nev: 'Lovag (Shadoni Első Arc)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const lovagShadoniMasodikArc: Iskola = {
  nev: 'Lovag (Shadoni Második Arc)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const lovagShadoniHarmadikArc: Iskola = {
  nev: 'Lovag (Shadoni Harmadik Arc)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const lovagShadoniNegyedikArc: Iskola = {
  nev: 'Lovag (Shadoni Negyedik Arc)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};
export const lovagShadoniOtodikArc: Iskola = {
  nev: 'Lovag (Shadoni Ötödik Arc)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const lovagShadoniHatodikkArc: Iskola = {
  nev: 'Lovag (Shadoni Hatodik Arc)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const lovagErigowiKrad: Iskola = { nev: 'Lovag (Erigowi Krad)', kap: 8, kepzettsegek: [], oktatasok: {} };

/* #endregion */

/* #region TODO: Fejvadász */

export const fejvadaszHarcos: Iskola = { nev: 'Fejvadász (Harcos)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const fejvadaszOrgyilkos: Iskola = { nev: 'Fejvadász (Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const fejvadaszFelderito: Iskola = { nev: 'Fejvadász (Felderítő)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const fejvadaszTestor: Iskola = { nev: 'Fejvadász (Testőr)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const fejvadaszVertestverHarcos: Iskola = {
  nev: 'Fejvadász (Vértestvér, Harcos)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszVertestverOrgyilkos: Iskola = {
  nev: 'Fejvadász (Vértestvér, Orgyilkos)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszVertestverFelderito: Iskola = {
  nev: 'Fejvadász (Vértestvér, Felderítő)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszVertestverTestor: Iskola = {
  nev: 'Fejvadász (Vértestvér, Testőr)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanHarcos: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Harcos)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanOrgyilkos: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Orgyilkos)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanFelderito: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Felderítő)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszAnatAkhanTestor: Iskola = {
  nev: 'Fejvadász (Anat-Akhan, Testőr)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekHarcos: Iskola = {
  nev: 'Fejvadász (Ikrek, Harcos)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekOrgyilkos: Iskola = {
  nev: 'Fejvadász (Ikrek, Orgyilkos)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekFelderito: Iskola = {
  nev: 'Fejvadász (Ikrek, Felderítő)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const fejvadaszIkrekTestor: Iskola = {
  nev: 'Fejvadász (Ikrek, Testőr)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

/* #endregion */

/* #region Tolvaj */

const TOLVAJ_OKTATASOK: Oktatasok = {
  akrobatika: 2,
  alcazasAlruha: 2,
  csapdakereses: 2,
  csomozas: 2,
  ekesszolas: 2,
  elettan: 2,
  epiteszet: 2,
  ertekbecsles: 2,
  eses: 2,
  fegyverhasznalat: 2,
  hamisitas: 2,
  helyismeret: 2,
  heraldika: 2,
  irasOlvasas: 2,
  jelbeszed: 2,
  ketkezesharc: 2,
  kocsmaiVerekedes: 2,
  kultura: 2,
  legendaismeret: 2,
  lelektan: 2,
  lopodzas: 2,
  maszas: 2,
  mechanika: 2,
  muveszetek: 2,
  nyomolvasas: 2,
  orvtamadas: 2,
  rejtekhelykutatas: 2,
  rejtozes: 2,
  szabadulomuveszet: 2,
  szamtanMertan: 2,
  szerencsejatek: 2,
  szineszet: 2,
  udvariEtikettIntrika: 2,
  zarnyitas: 2,
  zsebmetszes: 2,
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

/* #region TODO: Bárd */

export const bard: Iskola = { nev: 'Bárd', kap: 5, kepzettsegek: [], oktatasok: {} };

export const bardAszisziEnekmondo: Iskola = {
  nev: 'Bárd (Asziszi Énekmondó)',
  kap: 5,
  kepzettsegek: [],
  oktatasok: {},
};

export const bardLombhullasArvai: Iskola = { nev: 'Bárd (Lombhullás Árvái)', kap: 6, kepzettsegek: [], oktatasok: {} };

export const bardVandorloDalnok: Iskola = { nev: 'Bárd (Vándorló dalnok)', kap: 5, kepzettsegek: [], oktatasok: {} };

export const bardSotet: Iskola = { nev: 'Bárd (Sötét bárd)', kap: 5, kepzettsegek: [], oktatasok: {} };

/* #endregion */

/* #region TODO: Harcművész */

export const harcmuveszShienKaTo: Iskola = { nev: 'Harcművész (Shien-ka-to)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const harcmuveszDartNidKinito: Iskola = {
  nev: 'Harcművész (Dart-nid-kinito)',
  kap: 5,
  kepzettsegek: [],
  oktatasok: {},
};

export const harcmuveszAvadKaKinito: Iskola = {
  nev: 'Harcművész (Avad-ka-kinito)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export const harcmuveszNisenNidTo: Iskola = {
  nev: 'Harcművész (Nisen-nid-to)',
  kap: 6,
  kepzettsegek: [],
  oktatasok: {},
};

export const harcmuveszUdvariKardmuvesz: Iskola = {
  nev: 'Harcművész (Udvari Kardművész)',
  kap: 9,
  kepzettsegek: [],
  oktatasok: {},
};

export const harcmuveszHarcUtjaKardmuvesz: Iskola = {
  nev: 'Harcművész (Harc útja Kardművész)',
  kap: 9,
  kepzettsegek: [],
  oktatasok: {},
};

/* #endregion */

/* #region TODO: Pap */

function papKepzettsegek(options: {
  fegyverVagyFegyverTipus: string;
  nyelvtudas3: string;
  nyelvtudas2: string;
}): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverVagyFegyverTipus), szint: 2 },
    { kepzettseg: vallasismeret, szint: 3 },
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
  [KepzettsegType.JogTorvenykezes]: 2,
  [KepzettsegType.JogTorvenykezes]: 2,
  [KepzettsegType.JogTorvenykezes]: 2,
  [KepzettsegType.JogTorvenykezes]: 2,
  [KepzettsegType.JogTorvenykezes]: 2,
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

export function papDomvik(options: {
  fegyverVagyFegyverTipus: string;
  nyelvtudas3: string;
  nyelvtudas2: string;
}): Iskola {
  return {
    nev: 'Pap (Domvik)',
    kap: 7,
    kepzettsegek: [
      ...papKepzettsegek(options),
      { kepzettseg: jogTorvenykezes, szint: 2 },
      { kepzettseg: osiNyelv('lingua domini'), szint: 3 },
      { kepzettseg: herbalizmus, szint: 2 },
      { kepzettseg: orvoslas, szint: 2 },
      { kepzettseg: elettan, szint: 2 },
    ],
    oktatasok: {
      ...PAP_OKTATASOK,
      [KepzettsegType.Hadvezetes]: 2,
      [KepzettsegType.Oktatas]: 2,
      [KepzettsegType.OsiNyelv]: 2,
    },
  };
}

export const papRanagol: Iskola = { nev: 'Pap (Ranagol)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const papArel: Iskola = { nev: 'Pap (Arel)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const papKyel: Iskola = { nev: 'Pap (Kyel)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const papSogron: Iskola = { nev: 'Pap (Sogron)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const papTharr: Iskola = { nev: 'Pap (Tharr)', kap: 7, kepzettsegek: [], oktatasok: {} };

/* #endregion */

/* #region TODO: Paplovag */

export const paplovagDarton: Iskola = { nev: 'Paplovag (Darton)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const paplovagDomvik: Iskola = { nev: 'Paplovag (Domvik)', kap: 9, kepzettsegek: [], oktatasok: {} };

export const paplovagDreina: Iskola = { nev: 'Paplovag (Dreina)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const paplovagAranykorKrad: Iskola = {
  nev: 'Paplovag (Aranykör (Krad))',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const paplovagRanagol: Iskola = { nev: 'Paplovag (Ranagol)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const paplovagFonixSogron: Iskola = {
  nev: 'Paplovag (Főnix (Sogron))',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const paplovagBosszuangyalUwel: Iskola = {
  nev: 'Paplovag (Bosszúangyal (Uwel))',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

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

/* #region TODO: Boszorkánymester */

export const boszorkanymester: Iskola = { nev: 'Boszorkánymester', kap: 6, kepzettsegek: [], oktatasok: {} };

export const boszorkanymesterAszisziVerkelyhesek: Iskola = {
  nev: 'Boszorkánymester (Asziszi Vérkelyhesek)',
  kap: 9,
  kepzettsegek: [],
  oktatasok: {},
};

export const boszorkanymesterAscensMorga: Iskola = {
  nev: 'Boszorkánymester (Ascens Morga)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const boszorkanymesterHergoliVillammester: Iskola = {
  nev: 'Boszorkánymester (Hergoli Villámmester)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

/* #endregion */

/* #region TODO: Tűzvarázsló */

export const tuzvarazsloOrdani: Iskola = { nev: 'Tűzvarázsló (Ordani)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const tuzvarazsloRenegat: Iskola = { nev: 'Tűzvarázsló (Renegát)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const tuzvarazsloAschaonTuzmesterei: Iskola = {
  nev: 'Tűzvarázsló (Aschaon Tűzmesterei)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
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
