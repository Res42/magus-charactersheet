import { FokosKepzettseg, KepzettsegType, SzazalekosKepzettseg } from '../components/kepzettseg';
import { TulajdonsagType } from '../components/tulajdonsag';

export const HARCI_KEPZETTSEG_TYPES = [
  KepzettsegType.Fajdalomtures,
  KepzettsegType.Fegyverhasznalat,
  KepzettsegType.Fegyverismeret,
  KepzettsegType.Hadvezetes,
  KepzettsegType.HarciLaz,
  KepzettsegType.Harcmuveszet,
  KepzettsegType.HarcteriGyakorlat,
  KepzettsegType.Ketkezesharc,
  KepzettsegType.Pajzshasznalat,
  KepzettsegType.PusztakezesHarc,
  KepzettsegType.Pusztitas,
  KepzettsegType.Taktika,
  KepzettsegType.Vakharc,
  KepzettsegType.Vertviselet,
] as const;

export const ALVILAGI_KEPZETTSEG_TYPES = [
  KepzettsegType.AlcazasAlruha,
  KepzettsegType.Hamisitas,
  KepzettsegType.Jelbeszed,
  KepzettsegType.KocsmaiVerekedes,
  KepzettsegType.MeregkeveresSemlegesites,
  KepzettsegType.Orvtamadas,
  KepzettsegType.Kinzas,
  KepzettsegType.Szabadulomuveszet,
  KepzettsegType.Szerencsejatek,
  KepzettsegType.Csapdakereses,
  KepzettsegType.Lopodzas,
  KepzettsegType.Rejtozes,
  KepzettsegType.Rejtekhelykutatas,
  KepzettsegType.Zarnyitas,
  KepzettsegType.Zsebmetszes,
  KepzettsegType.Veszelyerzek,
] as const;

export const VILAGI_KEPZETTSEG_TYPES = [
  KepzettsegType.Allatismeret,
  KepzettsegType.CsapdaallitasLeszedes,
  KepzettsegType.Csomozas,
  KepzettsegType.Ertekbecsles,
  KepzettsegType.Futas,
  KepzettsegType.Hajozas,
  KepzettsegType.Hangutanzas,
  KepzettsegType.Helyismeret,
  KepzettsegType.Idomitas,
  KepzettsegType.Idojoslas,
  KepzettsegType.Kocsihajtas,
  KepzettsegType.Lovaglas,
  KepzettsegType.Nyomolvasas,
  KepzettsegType.Szakma,
  KepzettsegType.Uszas,
  KepzettsegType.Vadonjaras,
  KepzettsegType.Akrobatika,
  KepzettsegType.Eses,
  KepzettsegType.Maszas,
] as const;

export const TUDOMANYOS_KEPZETTSEG_TYPES = [
  KepzettsegType.Alkimia,
  KepzettsegType.Elettan,
  KepzettsegType.Epiteszet,
  KepzettsegType.Herbalizmus,
  KepzettsegType.IrasOlvasas,
  KepzettsegType.JogTorvenykezes,
  KepzettsegType.Legendaismeret,
  KepzettsegType.Mechanika,
  KepzettsegType.Oktatas,
  KepzettsegType.Orvoslas,
  KepzettsegType.OsiNyelv,
  KepzettsegType.SzamtanMertan,
  KepzettsegType.Terkepeszet,
  KepzettsegType.Tortenelem,
  KepzettsegType.Vallasismeret,
] as const;

export const SZOCIALIS_KEPZETTSEG_TYPES = [
  KepzettsegType.Ekesszolas,
  KepzettsegType.Heraldika,
  KepzettsegType.Kultura,
  KepzettsegType.Lelektan,
  KepzettsegType.Muveszetek,
  KepzettsegType.Nyelvtudas,
  KepzettsegType.Parbaj,
  KepzettsegType.PolitikaDiplomacia,
  KepzettsegType.SzexualisKultura,
  KepzettsegType.Szineszet,
  KepzettsegType.UdvariEtikettIntrika,
] as const;

export const MISZTIKUS_KEPZETTSEG_TYPES = [
  KepzettsegType.Demonologia,
  KepzettsegType.Dragakomagia,
  KepzettsegType.Magasmagia,
  KepzettsegType.Nekromancia,
  KepzettsegType.OselemiMagia,
  KepzettsegType.Pszi,
  KepzettsegType.Runamagia,
  KepzettsegType.TapasztalatiMagia,
] as const;

const ELSO_NEHEZSEGI_SZINTU_FOKOK = [1, 3, 8, 15, 25] as const;
const MASODIK_NEHEZSEGI_SZINTU_FOKOK = [1, 5, 10, 20, 30] as const;
const HARMADIK_NEHEZSEGI_SZINTU_FOKOK = [2, 8, 15, 30, 45] as const;
const NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK = [3, 10, 20, 35, 55] as const;

export const Kepzettsegek = {
  Harci: {
    Fajdalomtures: {
      kepzettsegType: KepzettsegType.Fajdalomtures,
      nev: 'Fájdalomtűrés',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Allokepesseg, TulajdonsagType.Akaratero],
    } as FokosKepzettseg,
    Fegyverhasznalat: {
      kepzettsegType: KepzettsegType.Fegyverhasznalat,
      nev: 'Fegyverhasználat',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [
        TulajdonsagType.Ero,
        TulajdonsagType.Gyorsasag,
        TulajdonsagType.Ugyesseg,
        TulajdonsagType.Erzekeles,
      ],
    } as FokosKepzettseg,
    Fegyverismeret: {
      kepzettsegType: KepzettsegType.Fegyverismeret,
      nev: 'Fegyverismeret',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Hadvezetes: {
      kepzettsegType: KepzettsegType.Hadvezetes,
      nev: 'Hadvezetés',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.Lelektan, KepzettsegType.Terkepeszet],
      gyengeOperator: 'and',
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Karizma],
    } as FokosKepzettseg,
    HarciLaz: {
      kepzettsegType: KepzettsegType.HarciLaz,
      nev: 'Harci láz',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Allokepesseg, TulajdonsagType.Egeszseg],
    } as FokosKepzettseg,
    Harcmuveszet: {
      kepzettsegType: KepzettsegType.Harcmuveszet,
      nev: 'Harcművészet',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [
        TulajdonsagType.Ero,
        TulajdonsagType.Gyorsasag,
        TulajdonsagType.Ugyesseg,
        TulajdonsagType.Akaratero,
      ],
    } as FokosKepzettseg,
    HarcteriGyakorlat: {
      kepzettsegType: KepzettsegType.HarcteriGyakorlat,
      nev: 'Harctéri gyakorlat',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Ketkezesharc: {
      kepzettsegType: KepzettsegType.Ketkezesharc,
      nev: 'Kétkezesharc',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Fegyverhasznalat],
      tulajdonsag: [TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    Pajzshasznalat: {
      kepzettsegType: KepzettsegType.Pajzshasznalat,
      nev: 'Pajzshasználat',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    PusztakezesHarc: {
      kepzettsegType: KepzettsegType.PusztakezesHarc,
      nev: 'Pusztakezes harc',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Ugyesseg, TulajdonsagType.Allokepesseg],
    } as FokosKepzettseg,
    Pusztitas: {
      kepzettsegType: KepzettsegType.Pusztitas,
      nev: 'Pusztítás',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Fegyverhasznalat],
      gyenge: [KepzettsegType.Elettan],
      tulajdonsag: [TulajdonsagType.Ero],
    } as FokosKepzettseg,
    Taktika: {
      kepzettsegType: KepzettsegType.Taktika,
      nev: 'Taktika',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Vakharc: {
      kepzettsegType: KepzettsegType.Vakharc,
      nev: 'Vakharc',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Vertviselet: {
      kepzettsegType: KepzettsegType.Vertviselet,
      nev: 'Vértviselet',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ero],
    } as FokosKepzettseg,
  },
  Alvilagi: {
    AlcazasAlruha: {
      kepzettsegType: KepzettsegType.AlcazasAlruha,
      nev: 'Álcázás/álruha',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Kultura],
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Hamisitas: {
      kepzettsegType: KepzettsegType.Hamisitas,
      nev: 'hamisítás',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      // TODO: lásd a leírást
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Jelbeszed: {
      kepzettsegType: KepzettsegType.Jelbeszed,
      nev: 'Jelbeszéd',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Erzekeles, TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    KocsmaiVerekedes: {
      kepzettsegType: KepzettsegType.KocsmaiVerekedes,
      nev: 'Kocsmai verekedés',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Gyorsasag, TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    MeregkeveresSemlegesites: {
      kepzettsegType: KepzettsegType.MeregkeveresSemlegesites,
      nev: 'Méregkeverés/semlegesítés',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Herbalizmus],
      gyenge: [KepzettsegType.Alkimia],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Orvtamadas: {
      kepzettsegType: KepzettsegType.Orvtamadas,
      nev: 'Orvtámadás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Fegyverhasznalat, KepzettsegType.PusztakezesHarc],
      erosOperator: 'or',
      gyenge: [KepzettsegType.Elettan],
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    Kinzas: {
      kepzettsegType: KepzettsegType.Kinzas,
      nev: 'Kínzás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Szabadulomuveszet: {
      kepzettsegType: KepzettsegType.Szabadulomuveszet,
      nev: 'SZabadulóművészet',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Csomozas],
      gyenge: [KepzettsegType.Zarnyitas],
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    Szerencsejatek: {
      kepzettsegType: KepzettsegType.Szerencsejatek,
      nev: 'Szerencsejáték',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Csapdakereses: {
      kepzettsegType: KepzettsegType.Csapdakereses,
      nev: 'Csapdakeresés',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as SzazalekosKepzettseg,
    Lopodzas: {
      kepzettsegType: KepzettsegType.Lopodzas,
      nev: 'Lopódzás',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
    } as SzazalekosKepzettseg,
    Rejtozes: {
      kepzettsegType: KepzettsegType.Rejtozes,
      nev: 'Rejtőzés',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
    } as SzazalekosKepzettseg,
    Rejtekhelykutatas: {
      kepzettsegType: KepzettsegType.Rejtekhelykutatas,
      nev: 'Rejtekhelykutatás',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as SzazalekosKepzettseg,
    Zarnyitas: {
      kepzettsegType: KepzettsegType.Zarnyitas,
      nev: 'Zárnyitás',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
    } as SzazalekosKepzettseg,
    Zsebmetszes: {
      kepzettsegType: KepzettsegType.Zsebmetszes,
      nev: 'Zsebmetszés',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Erzekeles],
    } as SzazalekosKepzettseg,
    Veszelyerzek: {
      kepzettsegType: KepzettsegType.Veszelyerzek,
      nev: 'Veszélyérzék',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as SzazalekosKepzettseg,
  },
  Vilagi: {
    Allatismeret: {
      kepzettsegType: KepzettsegType.Allatismeret,
      nev: 'Állatismeret',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
    } as FokosKepzettseg,
    CsapdaallitasLeszedes: {
      kepzettsegType: KepzettsegType.CsapdaallitasLeszedes,
      nev: 'Csapdaállítás/leszedés',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.Mechanika, KepzettsegType.Csomozas],
      gyengeOperator: 'and',
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    Csomozas: {
      kepzettsegType: KepzettsegType.Csomozas,
      nev: 'Csomozás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    Ertekbecsles: {
      kepzettsegType: KepzettsegType.Ertekbecsles,
      nev: 'Értékbecslés',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      // TODO: lásd a leírást
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Futas: {
      kepzettsegType: KepzettsegType.Futas,
      nev: 'Futás',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Allokepesseg, TulajdonsagType.Egeszseg],
    } as FokosKepzettseg,
    Hajozas: {
      kepzettsegType: KepzettsegType.Hajozas,
      nev: 'Hajozás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      // TODO: lásd a leírást
    } as FokosKepzettseg,
    Hangutanzas: {
      kepzettsegType: KepzettsegType.Hangutanzas,
      nev: 'Hangutánzás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      // TODO: csak akkor kell állatismeret, ha állat hangját akarja utánozni
      gyenge: [KepzettsegType.Allatismeret],
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Helyismeret: {
      kepzettsegType: KepzettsegType.Helyismeret,
      nev: 'Helyismeret',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
    } as FokosKepzettseg,
    Idomitas: {
      kepzettsegType: KepzettsegType.Idomitas,
      nev: 'Idomítás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Allatismeret],
      tulajdonsag: [TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    Idojoslas: {
      kepzettsegType: KepzettsegType.Idojoslas,
      nev: 'Időjóslás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Erzekeles, TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Kocsihajtas: {
      kepzettsegType: KepzettsegType.Kocsihajtas,
      nev: 'Kocsihajtás',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.Allatismeret],
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    Lovaglas: {
      kepzettsegType: KepzettsegType.Lovaglas,
      nev: 'Lovaglás',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.Allatismeret],
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as FokosKepzettseg,
    Nyomolvasas: {
      kepzettsegType: KepzettsegType.Nyomolvasas,
      nev: 'Nyomolvasás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      // TODO: lásd a leírást
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Szakma: {
      kepzettsegType: KepzettsegType.Szakma,
      nev: 'Szakma',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      // TODO: lásd a leírást
    } as FokosKepzettseg,
    Uszas: {
      kepzettsegType: KepzettsegType.Uszas,
      nev: 'Úszás',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Allokepesseg, TulajdonsagType.Egeszseg],
    } as FokosKepzettseg,
    Vadonjaras: {
      kepzettsegType: KepzettsegType.Vadonjaras,
      nev: 'Vadonjárás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.Allatismeret, KepzettsegType.Herbalizmus],
      gyengeOperator: 'and',
      tulajdonsag: [TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Akrobatika: {
      kepzettsegType: KepzettsegType.Akrobatika,
      nev: 'Akrobatika',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as SzazalekosKepzettseg,
    Eses: {
      kepzettsegType: KepzettsegType.Eses,
      nev: 'Esés',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Ugyesseg],
    } as SzazalekosKepzettseg,
    Maszas: {
      kepzettsegType: KepzettsegType.Maszas,
      nev: 'Mászás',
      szazalekPerKp: 3,
      tulajdonsag: [TulajdonsagType.Ero, TulajdonsagType.Ugyesseg],
    } as SzazalekosKepzettseg,
  },
  Tudomanyos: {
    Alkimia: {
      kepzettsegType: KepzettsegType.Alkimia,
      nev: 'Alkímia',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.SzamtanMertan],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Elettan: {
      kepzettsegType: KepzettsegType.Elettan,
      nev: 'Élettan',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.IrasOlvasas],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Epiteszet: {
      kepzettsegType: KepzettsegType.Epiteszet,
      nev: 'Építészet',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.SzamtanMertan],
      gyenge: [KepzettsegType.IrasOlvasas],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Herbalizmus: {
      kepzettsegType: KepzettsegType.Herbalizmus,
      nev: 'Herbalizmus',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    IrasOlvasas: {
      kepzettsegType: KepzettsegType.IrasOlvasas,
      nev: 'Írás/Olvasás',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Nyelvtudas],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    JogTorvenykezes: {
      kepzettsegType: KepzettsegType.JogTorvenykezes,
      nev: 'Jog/Törvénykezés',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Kultura],
      gyenge: [KepzettsegType.IrasOlvasas],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    Legendaismeret: {
      kepzettsegType: KepzettsegType.Legendaismeret,
      nev: 'Legendaismeret',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Kultura],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Mechanika: {
      kepzettsegType: KepzettsegType.Mechanika,
      nev: 'Mechanika',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.SzamtanMertan],
      tulajdonsag: [TulajdonsagType.Ugyesseg, TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Oktatas: {
      kepzettsegType: KepzettsegType.Oktatas,
      nev: 'Oktatás',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.Lelektan],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    Orvoslas: {
      kepzettsegType: KepzettsegType.Orvoslas,
      nev: 'Orvoslás',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Elettan, KepzettsegType.Herbalizmus],
      erosOperator: 'and',
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    OsiNyelv: {
      kepzettsegType: KepzettsegType.OsiNyelv,
      nev: 'Ősi nyelv',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.IrasOlvasas],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    SzamtanMertan: {
      kepzettsegType: KepzettsegType.SzamtanMertan,
      nev: 'Számtan/Mértan',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.IrasOlvasas],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Terkepeszet: {
      kepzettsegType: KepzettsegType.Terkepeszet,
      nev: 'Térképészet',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.SzamtanMertan],
      gyenge: [KepzettsegType.Muveszetek], // TODO: Művészet(Rajz)
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Tortenelem: {
      kepzettsegType: KepzettsegType.Tortenelem,
      nev: 'Történelem',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      gyenge: [KepzettsegType.IrasOlvasas],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Vallasismeret: {
      kepzettsegType: KepzettsegType.Vallasismeret,
      nev: 'Történelem',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Kultura],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
  },
  Szocialis: {
    Ekesszolas: {
      kepzettsegType: KepzettsegType.Ekesszolas,
      nev: 'Ékesszólás',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Kultura],
      gyenge: [KepzettsegType.Lelektan],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Karizma],
    } as FokosKepzettseg,
    Heraldika: {
      kepzettsegType: KepzettsegType.Heraldika,
      nev: 'Heraldika',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Kultura],
      tulajdonsag: [TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    Kultura: {
      kepzettsegType: KepzettsegType.Kultura,
      nev: 'kultúra',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Nyelvtudas],
    } as FokosKepzettseg,
    Lelektan: {
      kepzettsegType: KepzettsegType.Lelektan,
      nev: 'Lélektan',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Erzekeles],
    } as FokosKepzettseg,
    Muveszetek: {
      kepzettsegType: KepzettsegType.Muveszetek,
      nev: 'Művészetek',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      // TODO: lásd a leírást
    } as FokosKepzettseg,
    Nyelvtudas: {
      kepzettsegType: KepzettsegType.Nyelvtudas,
      nev: 'Nyelvtudás',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
    } as FokosKepzettseg,
    Parbaj: {
      kepzettsegType: KepzettsegType.Parbaj,
      nev: 'Párbaj',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.UdvariEtikettIntrika],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Karizma],
    } as FokosKepzettseg,
    PolitikaDiplomacia: {
      kepzettsegType: KepzettsegType.PolitikaDiplomacia,
      nev: 'Politika/diplomácia',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.UdvariEtikettIntrika],
      gyenge: [KepzettsegType.Tortenelem],
      tulajdonsag: [TulajdonsagType.Asztral, TulajdonsagType.Karizma, TulajdonsagType.Intelligencia],
    } as FokosKepzettseg,
    SzexualisKultura: {
      kepzettsegType: KepzettsegType.SzexualisKultura,
      nev: 'Szexuális kultúra',
      fokok: ELSO_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Asztral, TulajdonsagType.Karizma],
    } as FokosKepzettseg,
    Szineszet: {
      kepzettsegType: KepzettsegType.Szineszet,
      nev: 'Színészet',
      fokok: HARMADIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Lelektan],
      tulajdonsag: [TulajdonsagType.Asztral, TulajdonsagType.Karizma],
    } as FokosKepzettseg,
    UdvariEtikettIntrika: {
      kepzettsegType: KepzettsegType.UdvariEtikettIntrika,
      nev: 'Udvari etikett/intrika',
      fokok: MASODIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Kultura],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Asztral, TulajdonsagType.Karizma],
    } as FokosKepzettseg,
  },
  Misztikus: {
    Demonologia: {
      kepzettsegType: KepzettsegType.Demonologia,
      nev: 'Démonológia',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.OsiNyelv],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero],
    } as FokosKepzettseg,
    Dragakomagia: {
      kepzettsegType: KepzettsegType.Dragakomagia,
      nev: 'Grágakőmágia',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Szakma], // TODO: Szakma (Drágakőcsiszolás)
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    Magasmagia: {
      kepzettsegType: KepzettsegType.Magasmagia,
      nev: 'Magasmágia',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.OsiNyelv],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    Nekromancia: {
      kepzettsegType: KepzettsegType.Nekromancia,
      nev: 'Nekromancia',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.Elettan],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    OselemiMagia: {
      kepzettsegType: KepzettsegType.OselemiMagia,
      nev: 'Őselemi mágia',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.OsiNyelv],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    Pszi: {
      kepzettsegType: KepzettsegType.Pszi,
      nev: 'Pszi',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    Runamagia: {
      kepzettsegType: KepzettsegType.Runamagia,
      nev: 'Rúnamágia',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      eros: [KepzettsegType.OsiNyelv],
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
    TapasztalatiMagia: {
      kepzettsegType: KepzettsegType.TapasztalatiMagia,
      nev: 'Tapasztalati mágia',
      fokok: NEGYEDIK_NEHEZSEGI_SZINTU_FOKOK,
      tulajdonsag: [TulajdonsagType.Intelligencia, TulajdonsagType.Akaratero, TulajdonsagType.Asztral],
    } as FokosKepzettseg,
  },
};