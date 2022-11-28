import { alkepzettsegNev, FokosKepzettseg, KepzettsegType, SzazalekosKepzettseg } from '../models/kepzettseg';
import { TulajdonsagType } from '../models/tulajdonsag';

const ELSO_NEHEZSEGI_SZINTU_FOKOK = [1, 3, 8, 15, 25] as const;
const MASODIK_NEHEZSEGI_SZINTU_FOKOK = [1, 5, 10, 20, 30] as const;
const HARMADIK_NEHEZSEGI_SZINTU_FOKOK = [2, 8, 15, 30, 45] as const;
const NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK = [3, 10, 20, 35, 55] as const;

export const fajdalomtures: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Fajdalomtures,
  nev: KepzettsegType.Fajdalomtures,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Allokepesseg, TulajdonsagType.Akaratero],
};

export function fegyverhasznalat(fegyverVagyFegyverTipus: string): FokosKepzettseg {
  return {
    // TODO: jövőben itt lehet egy fegyver objektum vagy fegyver típust kéne inputként várni
    kepzettsegType: KepzettsegType.Fegyverhasznalat,
    nev: alkepzettsegNev(KepzettsegType.Fegyverhasznalat, fegyverVagyFegyverTipus),
    fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
    tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
  };
}

export const fegyverismeret: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Fegyverismeret,
  nev: KepzettsegType.Fegyverismeret,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Erzekeles],
};

export const hadvezetes: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Hadvezetes,
  nev: KepzettsegType.Hadvezetes,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.Lelektan, KepzettsegType.Terkepeszet],
  gyengeOperator: 'and',
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Karizma],
};

export const harciLaz: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.HarciLaz,
  nev: KepzettsegType.HarciLaz,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Allokepesseg, TulajdonsagType.Egeszseg],
};

export function harcmuveszet(tipus: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Harcmuveszet,
    nev: alkepzettsegNev(KepzettsegType.Harcmuveszet, tipus),
    fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
    tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg, TulajdonsagType.Akaratero],
  };
}

export const harcteriGyakorlat: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.HarcteriGyakorlat,
  nev: KepzettsegType.HarcteriGyakorlat,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
};

export const ketkezesharc: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Ketkezesharc,
  nev: KepzettsegType.Ketkezesharc,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Fegyverhasznalat],
  tulajdonsag: [TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg],
};

export const pajzshasznalat: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Pajzshasznalat,
  nev: KepzettsegType.Pajzshasznalat,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Ugyesseg],
};

export function pusztakezesHarc(tipus: 'birkózás' | 'ökölharc' | undefined): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.PusztakezesHarc,
    nev: alkepzettsegNev(KepzettsegType.PusztakezesHarc, tipus),
    fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
    tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Ugyesseg, TulajdonsagType.Allokepesseg],
  };
}

export const pusztitas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Pusztitas,
  nev: KepzettsegType.Pusztitas,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Fegyverhasznalat],
  gyenge: [KepzettsegType.Elettan],
  tulajdonsag: [TulajdonsagType.Ero],
};

export const taktika: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Taktika,
  nev: KepzettsegType.Taktika,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Erzekeles],
};

export const vakharc: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Vakharc,
  nev: KepzettsegType.Vakharc,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Erzekeles],
};

export const vertviselet: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Vertviselet,
  nev: KepzettsegType.Vertviselet,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Ero],
};

export const alcazasAlruha: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.AlcazasAlruha,
  nev: KepzettsegType.AlcazasAlruha,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Kultura],
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
};

export const hamisitas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Hamisitas,
  nev: KepzettsegType.Hamisitas,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  // TODO: lásd a leírást
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
};

export const jelbeszed: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Jelbeszed,
  nev: KepzettsegType.Jelbeszed,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Erzekeles, TulajdonsagType.Intelligencia],
};

export const kocsmaiVerekedes: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.KocsmaiVerekedes,
  nev: KepzettsegType.KocsmaiVerekedes,
  fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg],
};

export const meregkeveresSemlegesites: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.MeregkeveresSemlegesites,
  nev: KepzettsegType.MeregkeveresSemlegesites,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Herbalizmus],
  gyenge: [KepzettsegType.Alkimia],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const orvtamadas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Orvtamadas,
  nev: KepzettsegType.Orvtamadas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Fegyverhasznalat, KepzettsegType.PusztakezesHarc],
  erosOperator: 'or',
  gyenge: [KepzettsegType.Elettan],
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const kinzas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Kinzas,
  nev: KepzettsegType.Kinzas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
};

export const szabadulomuveszet: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Szabadulomuveszet,
  nev: KepzettsegType.Szabadulomuveszet,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Csomozas],
  gyenge: [KepzettsegType.Zarnyitas],
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const szerencsejatek: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Szerencsejatek,
  nev: KepzettsegType.Szerencsejatek,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
};

export const csapdakereses: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Csapdakereses,
  nev: KepzettsegType.Csapdakereses,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Erzekeles],
};

export const lopodzas: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Lopodzas,
  nev: KepzettsegType.Lopodzas,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
};

export const rejtozes: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Rejtozes,
  nev: KepzettsegType.Rejtozes,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
};
export const rejtekhelykutatas: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Rejtekhelykutatas,
  nev: KepzettsegType.Rejtekhelykutatas,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Erzekeles],
};

export const zarnyitas: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Zarnyitas,
  nev: KepzettsegType.Zarnyitas,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
};

export const zsebmetszes: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Zsebmetszes,
  nev: KepzettsegType.Zsebmetszes,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
};

export const veszelyerzek: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Veszelyerzek,
  nev: KepzettsegType.Veszelyerzek,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Erzekeles],
};

export function allatismeret(allatCsoport: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Allatismeret,
    nev: alkepzettsegNev(KepzettsegType.Allatismeret, allatCsoport),
    fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  };
}

export const csapdaallitasLeszedes: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.CsapdaallitasLeszedes,
  nev: KepzettsegType.CsapdaallitasLeszedes,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.Mechanika, KepzettsegType.Csomozas],
  gyengeOperator: 'and',
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const csomozas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Csomozas,
  nev: KepzettsegType.Csomozas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const ertekbecsles: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Ertekbecsles,
  nev: KepzettsegType.Ertekbecsles,
  fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  // TODO: lásd a leírást
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Erzekeles],
};

export const futas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Futas,
  nev: KepzettsegType.Futas,
  fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Allokepesseg, TulajdonsagType.Egeszseg],
};

export const hajozas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Hajozas,
  nev: KepzettsegType.Hajozas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  // TODO: lásd a leírást
};

export function hangutanzas(allatCsoportok?: string[]): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Hangutanzas,
    nev: KepzettsegType.Hangutanzas,
    fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
    gyenge: allatCsoportok?.map((allatCsoport) => alkepzettsegNev(KepzettsegType.Allatismeret, allatCsoport)),
    tulajdonsag: [TulajdonsagType.Erzekeles],
  };
}

export function helyismeret(hely: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Helyismeret,
    nev: alkepzettsegNev(KepzettsegType.Helyismeret, hely),
    fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  };
}

export const idomitas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Idomitas,
  nev: KepzettsegType.Idomitas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Allatismeret],
  tulajdonsag: [TulajdonsagType.Asztral],
};

export const idojoslas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Idojoslas,
  nev: KepzettsegType.Idojoslas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Erzekeles, TulajdonsagType.Intelligencia],
};

export const kocsihajtas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Kocsihajtas,
  nev: KepzettsegType.Kocsihajtas,
  fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.Allatismeret],
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const lovaglas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Lovaglas,
  nev: KepzettsegType.Lovaglas,
  fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.Allatismeret],
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const nyomolvasas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Nyomolvasas,
  nev: KepzettsegType.Nyomolvasas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  // TODO: lásd a leírást
  tulajdonsag: [TulajdonsagType.Erzekeles],
};

export function szakma(szakma: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Szakma,
    nev: alkepzettsegNev(KepzettsegType.Szakma, szakma),
    fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
    // TODO: lásd a leírást
  };
}

export const uszas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Uszas,
  nev: KepzettsegType.Uszas,
  fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Allokepesseg, TulajdonsagType.Egeszseg],
};

export function vadonjaras(taj: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Vadonjaras,
    nev: alkepzettsegNev(KepzettsegType.Vadonjaras, taj),
    fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
    gyenge: [KepzettsegType.Allatismeret, KepzettsegType.Herbalizmus],
    gyengeOperator: 'and',
    tulajdonsag: [TulajdonsagType.Erzekeles],
  };
}

export const akrobatika: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Akrobatika,
  nev: KepzettsegType.Akrobatika,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const eses: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Eses,
  nev: KepzettsegType.Eses,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Ugyesseg],
};

export const maszas: SzazalekosKepzettseg = {
  kepzettsegType: KepzettsegType.Maszas,
  nev: KepzettsegType.Maszas,
  szazalekPerKp: 3,
  tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Ugyesseg],
};

export const alkimia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Alkimia,
  nev: KepzettsegType.Alkimia,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.SzamtanMertan],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const elettan: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Elettan,
  nev: KepzettsegType.Elettan,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.IrasOlvasas],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const epiteszet: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Epiteszet,
  nev: KepzettsegType.Epiteszet,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.SzamtanMertan],
  gyenge: [KepzettsegType.IrasOlvasas],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const herbalizmus: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Herbalizmus,
  nev: KepzettsegType.Herbalizmus,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const irasOlvasas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.IrasOlvasas,
  nev: KepzettsegType.IrasOlvasas,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.IrasOlvasas],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const jogTorvenykezes: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.JogTorvenykezes,
  nev: KepzettsegType.JogTorvenykezes,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Kultura],
  gyenge: [KepzettsegType.IrasOlvasas],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral],
};

export const legendaismeret: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Legendaismeret,
  nev: KepzettsegType.Legendaismeret,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Kultura],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const mechanika: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Mechanika,
  nev: KepzettsegType.Mechanika,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.SzamtanMertan],
  tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
};

export const oktatas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Oktatas,
  nev: KepzettsegType.Oktatas,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.Lelektan],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral],
};

export const orvoslas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Orvoslas,
  nev: KepzettsegType.Orvoslas,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Elettan, KepzettsegType.Herbalizmus],
  erosOperator: 'and',
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export function osiNyelv(nyelv: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.OsiNyelv,
    nev: alkepzettsegNev(KepzettsegType.OsiNyelv, nyelv),
    fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
    gyenge: [KepzettsegType.IrasOlvasas],
    tulajdonsag: [TulajdonsagType.Intelligencia],
  };
}

export const szamtanMertan: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.SzamtanMertan,
  nev: KepzettsegType.SzamtanMertan,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.IrasOlvasas],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const terkepeszet: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Terkepeszet,
  nev: KepzettsegType.Terkepeszet,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.SzamtanMertan],
  gyenge: [alkepzettsegNev(KepzettsegType.Muveszetek, 'rajz')],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const tortenelem: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Tortenelem,
  nev: KepzettsegType.Tortenelem,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  gyenge: [KepzettsegType.IrasOlvasas],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export const vallasismeret: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Vallasismeret,
  nev: KepzettsegType.Vallasismeret,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Kultura],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral],
  szintenkentiBonusz: (regiKepzettsegSzint, ujKepzettsegiSzint) => {
    const bonusz = Math.max(ujKepzettsegiSzint - 2, 0) - Math.max(regiKepzettsegSzint - 2, 0);

    return (karakter) => ({
      ...karakter,
      szintenkentiAsztralTME: karakter.szintenkentiAsztralTME + bonusz,
      szintenkentiMentalTME: karakter.szintenkentiMentalTME + bonusz,
      szintenkentiKegy: karakter.szintenkentiKegy + bonusz,
    });
  },
};

export const ekesszolas: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Ekesszolas,
  nev: KepzettsegType.Ekesszolas,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Kultura],
  gyenge: [KepzettsegType.Lelektan],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Karizma],
};

export const heraldika: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Heraldika,
  nev: KepzettsegType.Heraldika,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Kultura],
  tulajdonsag: [TulajdonsagType.Intelligencia],
};

export function kultura(kultura: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Kultura,
    nev: alkepzettsegNev(KepzettsegType.Kultura, kultura),
    fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
    eros: [alkepzettsegNev(KepzettsegType.Nyelvtudas, kultura)],
  };
}

export const lelektan: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Lelektan,
  nev: KepzettsegType.Lelektan,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Erzekeles],
};

export const muveszetek: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Muveszetek,
  nev: KepzettsegType.Muveszetek,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  // TODO: lásd a leírást
};

export function nyelvtudas(nyelv: string): FokosKepzettseg {
  return {
    kepzettsegType: KepzettsegType.Nyelvtudas,
    nev: alkepzettsegNev(KepzettsegType.Nyelvtudas, nyelv),
    fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  };
}

export const parbaj: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Parbaj,
  nev: KepzettsegType.Parbaj,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.UdvariEtikettIntrika],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Karizma],
};

export const politikaDiplomacia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.PolitikaDiplomacia,
  nev: KepzettsegType.PolitikaDiplomacia,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.UdvariEtikettIntrika],
  gyenge: [KepzettsegType.Tortenelem],
  tulajdonsag: [TulajdonsagType.Asztral, TulajdonsagType.Karizma, TulajdonsagType.Intelligencia],
};

export const szexualisKultura: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.SzexualisKultura,
  nev: KepzettsegType.SzexualisKultura,
  fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Asztral, TulajdonsagType.Karizma],
};

export const szineszet: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Szineszet,
  nev: KepzettsegType.Szineszet,
  fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Lelektan],
  tulajdonsag: [TulajdonsagType.Asztral, TulajdonsagType.Karizma],
};

export const udvariEtikettIntrika: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.UdvariEtikettIntrika,
  nev: KepzettsegType.UdvariEtikettIntrika,
  fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Kultura],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Karizma],
};

export const demonologia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Demonologia,
  nev: KepzettsegType.Demonologia,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.OsiNyelv],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero],
};

export const dragakomagia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Dragakomagia,
  nev: KepzettsegType.Dragakomagia,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [alkepzettsegNev(KepzettsegType.Szakma, 'Drágakőcsiszolás')],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
};

export const magasmagia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Magasmagia,
  nev: KepzettsegType.Magasmagia,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.OsiNyelv],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
};

export const nekromancia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Nekromancia,
  nev: KepzettsegType.Nekromancia,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.Elettan],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
};

export const oselemiMagia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.OselemiMagia,
  nev: KepzettsegType.OselemiMagia,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.OsiNyelv],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
};

export const pszi: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Pszi,
  nev: KepzettsegType.Pszi,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
};

export const runamagia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.Runamagia,
  nev: KepzettsegType.Runamagia,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  eros: [KepzettsegType.OsiNyelv],
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
};

export const tapasztalatiMagia: FokosKepzettseg = {
  kepzettsegType: KepzettsegType.TapasztalatiMagia,
  nev: KepzettsegType.TapasztalatiMagia,
  fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
  tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
};
