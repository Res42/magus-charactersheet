import { AlapKepzettseg, Iskola } from '../components/hatter';
import { KepzettsegType, Oktatasok } from '../components/kepzettseg';
import {
  akrobatika,
  alcazasAlruha,
  csapdakereses,
  csomozas,
  ekesszolas,
  elettan,
  ertekbecsles,
  eses,
  fegyverhasznalat,
  herbalizmus,
  irasOlvasas,
  jelbeszed,
  jogTorvenykezes,
  legendaismeret,
  lelektan,
  lopodzas,
  maszas,
  mechanika,
  nyelvtudas,
  orvoslas,
  orvtamadas,
  osiNyelv,
  rejtekhelykutatas,
  rejtozes,
  szabadulomuveszet,
  szamtanMertan,
  tortenelem,
  vallasismeret,
  veszelyerzek,
  zarnyitas,
  zsebmetszes,
} from './kepzettsegek';

function besurranoTolvajKepzettsegek(options: { fegyverVagyFegyverTipus: string }): AlapKepzettseg[] {
  return [
    { kepzettseg: fegyverhasznalat(options.fegyverVagyFegyverTipus), szint: 2 },
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

export function domvikPap(options: {
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

export function besurranoTolvaj(options: { fegyverVagyFegyverTipus: string }): Iskola {
  return {
    nev: 'Tolvaj (Besurranó)',
    kap: 6,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

/** UTK + HBG alapján iskolák. */
export const Iskolak = {
  Harcos: {
    Alap: { nev: 'Harcos', kap: 4, kepzettsegek: [], oktatasok: {} } as Iskola,
    Amazon: { nev: 'Amazon', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
    Barbar: { nev: 'Barbár', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    ErigowiSzamszerijasz: { nev: 'Erigowi számszeríjász', kap: 4, kepzettsegek: [], oktatasok: {} } as Iskola,
    Siedon: { nev: 'Siedon', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
    PredociVertes: { nev: 'Predoci vértes', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Lovag: {
    Alap: { nev: 'Lovag', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
    Feketerend: { nev: 'Feketerend', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    MaricoConRabora: { nev: 'Marico con Rabora', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    ShadoniElsoArc: { nev: 'Shadoni Első Arc', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    ShadoniMasodikArc: { nev: 'Shadoni Második Arc', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    ShadoniHarmadikArc: { nev: 'Shadoni Harmadik Arc', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    ShadoniNegyedikArc: { nev: 'Shadoni Negyedik Arc', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    ShadoniOtodikArc: { nev: 'Shadoni Ötödik Arc', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    ShadoniHatodikkArc: { nev: 'Shadoni Hatodik Arc', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    ErigowiKrad: { nev: 'Erigowi Krad', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Fejvadasz: {
    Harcos: { nev: 'Fejvadász (Harcos)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    Orgyilkos: { nev: 'Fejvadász (Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    Felderito: { nev: 'Fejvadász (Felderítő)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    Testor: { nev: 'Fejvadász (Testőr)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,

    Vertestver: {
      Harcos: { nev: 'Fejvadász (Vértestvér, Harcos)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
      Orgyilkos: { nev: 'Fejvadász (Vértestvér, Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
      Felderito: { nev: 'Fejvadász (Vértestvér, Felderítő)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
      Testor: { nev: 'Fejvadász (Vértestvér, Testőr)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    },

    AnatAkhan: {
      Harcos: { nev: 'Fejvadász (Anat-Akhan, Harcos)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
      Orgyilkos: { nev: 'Fejvadász (Anat-Akhan, Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
      Felderito: { nev: 'Fejvadász (Anat-Akhan, Felderítő)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
      Testor: { nev: 'Fejvadász (Anat-Akhan, Testőr)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    },

    Ikrek: {
      Harcos: { nev: 'Fejvadász (Ikrek, Harcos)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
      Orgyilkos: { nev: 'Fejvadász (Ikrek, Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
      Felderito: { nev: 'Fejvadász (Ikrek, Felderítő)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
      Testor: { nev: 'Fejvadász (Ikrek, Testőr)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    },
  },

  Tolvaj: {
    Alap: { nev: 'Tolvaj', kap: 5, kepzettsegek: [], oktatasok: TOLVAJ_OKTATASOK } as Iskola,
    Zsebes: { nev: 'Tolvaj (Zsebes)', kap: 5, kepzettsegek: [], oktatasok: TOLVAJ_OKTATASOK } as Iskola,
    Hamisito: { nev: 'Tolvaj (Hamisító)', kap: 6, kepzettsegek: [], oktatasok: TOLVAJ_OKTATASOK } as Iskola,

    Kobrak: {
      Alap: { nev: 'Tolvaj (Kobrák)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
      Zsebes: { nev: 'Tolvaj (Kobrák, Zsebes)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
      Hamisito: { nev: 'Tolvaj (Kobrák, Hamisító)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
      Besurrano: {
        nev: 'Tolvaj (Kobrák, Besurranó)',
        kap: 7,
        // TODO: fix
        kepzettsegek: besurranoTolvajKepzettsegek({ fegyverVagyFegyverTipus: '' }),
        oktatasok: {},
      } as Iskola,
    },

    TalavarCsodamuvesei: {
      Alap: { nev: 'Tolvaj (Talavar csodaművesei)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
      Zsebes: { nev: 'Tolvaj (Talavar csodaművesei, Zsebes)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
      Hamisito: { nev: 'Tolvaj (Talavar csodaművesei, Hamisító)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
      Besurrano: {
        nev: 'Tolvaj (Talavar csodaművesei, Besurranó)',
        kap: 7,
        // TODO: fix
        kepzettsegek: besurranoTolvajKepzettsegek({ fegyverVagyFegyverTipus: '' }),
        oktatasok: {},
      } as Iskola,
    },

    Szurkecsuklyasok: {
      Alap: { nev: 'Tolvaj (Szürkecsuklyások)', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
      Zsebes: { nev: 'Tolvaj (Szürkecsuklyások, Zsebes)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
      Hamisito: { nev: 'Tolvaj (Szürkecsuklyások, Hamisító)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
      Besurrano: {
        nev: 'Tolvaj (Szürkecsuklyások, Besurranó)',
        kap: 6,
        // TODO: fix
        kepzettsegek: besurranoTolvajKepzettsegek({ fegyverVagyFegyverTipus: '' }),
        oktatasok: {},
      } as Iskola,
    },
  },

  Bard: {
    Alap: { nev: 'Bárd', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
    AszisziEnekmondo: { nev: 'Bárd (Asziszi Énekmondó)', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
    LombhullasArvai: { nev: 'Bárd (Lombhullás Árvái)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
    VandorloDalnok: { nev: 'Bárd (Vándorló dalnok)', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
    SotetBard: { nev: 'Bárd (Sötét bárd)', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Harcmuvesz: {
    ShienKaTo: { nev: 'Harcművész (Shien-ka-to)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    DartNidKinito: { nev: 'Harcművész (Dart-nid-kinito)', kap: 5, kepzettsegek: [], oktatasok: {} } as Iskola,
    AvadKaKinito: { nev: 'Harcművész (Avad-ka-kinito)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    NisenNidTo: { nev: 'Harcművész (Nisen-nid-to)', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
    UdvariKardmuvesz: { nev: 'Harcművész (Udvari Kardművész)', kap: 9, kepzettsegek: [], oktatasok: {} } as Iskola,
    HarcUtjaKardmuvesz: { nev: 'Harcművész (Harc útja Kardművész)', kap: 9, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Pap: {
    Ranagol: { nev: 'Pap (Ranagol)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    Arel: { nev: 'Pap (Arel)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    Kyel: { nev: 'Pap (Kyel)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    Sogron: { nev: 'Pap (Sogron)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    Tharr: { nev: 'Pap (Tharr)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Paplovag: {
    Darton: { nev: 'Paplovag (Darton)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    Domvik: { nev: 'Paplovag (Domvik)', kap: 9, kepzettsegek: [], oktatasok: {} } as Iskola,
    Dreina: { nev: 'Paplovag (Dreina)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    AranykorKrad: { nev: 'Paplovag (Aranykör (Krad))', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    Ranagol: { nev: 'Paplovag (Ranagol)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    FonixSogron: { nev: 'Paplovag (Főnix (Sogron))', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    BosszuangyalUwel: { nev: 'Paplovag (Bosszúangyal (Uwel))', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Boszorkany: {
    Alap: { nev: 'Boszorkány', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
    LiviniaiGyulekezet: { nev: 'Boszorkány (Liviniai Gyülekezet)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    MaidaSaluquas: { nev: 'Boszorkány (Maida Saluquas)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    StellaProsylens: { nev: 'Boszorkány (Stella Prosylens)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    AlidaxiBoszorkanyrend: {
      nev: 'Boszorkány (Alidaxi boszorkányrend)',
      kap: 7,
      kepzettsegek: [],
      oktatasok: {},
    } as Iskola,
    EzerFatyolNoverei: { nev: 'Boszorkány (Ezer Fátyol Nővérei)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Boszorkanymester: {
    Alap: { nev: 'Boszorkánymester', kap: 6, kepzettsegek: [], oktatasok: {} } as Iskola,
    AszisziVerkelyhesek: {
      nev: 'Boszorkánymester (Asziszi Vérkelyhesek)',
      kap: 9,
      kepzettsegek: [],
      oktatasok: {},
    } as Iskola,
    AscensMorga: { nev: 'Boszorkánymester (Ascens Morga)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    HergoliVillammester: {
      nev: 'Boszorkánymester (Hergoli Villámmester)',
      kap: 8,
      kepzettsegek: [],
      oktatasok: {},
    } as Iskola,
  },

  Tuzvarazslo: {
    Ordani: { nev: 'Tűzvarázsló (Ordani)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
    Renegat: { nev: 'Tűzvarázsló (Renegát)', kap: 7, kepzettsegek: [], oktatasok: {} } as Iskola,
    AschaonTuzmesterei: { nev: 'Tűzvarázsló (Aschaon Tűzmesterei)', kap: 8, kepzettsegek: [], oktatasok: {} } as Iskola,
  },

  Varazslo: {
    Alap: { nev: 'Varázsló', kap: 9, kepzettsegek: [], oktatasok: {} } as Iskola,
    LarDori: { nev: 'Varázsló (Lar-Dori)', kap: 10, kepzettsegek: [], oktatasok: {} } as Iskola,
    Pyarroni: { nev: 'Varázsló (Pyarroni)', kap: 10, kepzettsegek: [], oktatasok: {} } as Iskola,
    Dorani: { nev: 'Varázsló (Dorani)', kap: 10, kepzettsegek: [], oktatasok: {} } as Iskola,
  },
};
