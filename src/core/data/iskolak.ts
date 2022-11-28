/** UTK + HBG alapján iskolák. */

import { AlapKepzettseg, Iskola } from '../models/hatter';
import { KepzettsegType } from '../models/kepzettseg';
import { Oktatasok } from '../models/oktatas';
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

export const harcos: Iskola = { nev: 'Harcos', kap: 4, kepzettsegek: [], oktatasok: {} };

export const harcosAmazon: Iskola = { nev: 'Harcos (Amazon)', kap: 6, kepzettsegek: [], oktatasok: {} };

export const harcosBarbar: Iskola = { nev: 'Harcos (Barbár)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const harcosErigowiSzamszerijasz: Iskola = {
  nev: 'Harcos (Erigowi Számszeríjász)',
  kap: 4,
  kepzettsegek: [],
  oktatasok: {},
};

export const harcosSiedon: Iskola = { nev: 'Harcos (Siedon)', kap: 5, kepzettsegek: [], oktatasok: {} };

export const harcosPredociVertes: Iskola = { nev: 'Harcos (Predoci Vértes)', kap: 5, kepzettsegek: [], oktatasok: {} };

export const lovag: Iskola = { nev: 'Lovag', kap: 6, kepzettsegek: [], oktatasok: {} };

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

export const tolvaj: Iskola = { nev: 'Tolvaj', kap: 5, kepzettsegek: [], oktatasok: TOLVAJ_OKTATASOK };

export const tolvajZsebes: Iskola = { nev: 'Tolvaj (Zsebes)', kap: 5, kepzettsegek: [], oktatasok: TOLVAJ_OKTATASOK };

export const tolvajHamisito: Iskola = {
  nev: 'Tolvaj (Hamisító)',
  kap: 6,
  kepzettsegek: [],
  oktatasok: TOLVAJ_OKTATASOK,
};

export function tolvajBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Besurranó)',
    kap: 6,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: TOLVAJ_OKTATASOK,
  };
}

export const tolvajKobrak: Iskola = { nev: 'Tolvaj (Kobrák)', kap: 6, kepzettsegek: [], oktatasok: {} };

export const tolvajKobrakZsebes: Iskola = { nev: 'Tolvaj (Kobrák, Zsebes)', kap: 6, kepzettsegek: [], oktatasok: {} };

export const tolvajKobrakHamisito: Iskola = {
  nev: 'Tolvaj (Kobrák, Hamisító)',
  kap: 6,
  kepzettsegek: [],
  oktatasok: {},
};

export function tolvajKobrakBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Kobrák, Besurranó)',
    kap: 7,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: {},
  };
}

export const tolvajTalavarCsodamuvesei: Iskola = {
  nev: 'Tolvaj (Talavar csodaművesei)',
  kap: 6,
  kepzettsegek: [],
  oktatasok: {},
};

export const tolvajTalavarCsodamuveseiZsebes: Iskola = {
  nev: 'Tolvaj (Talavar csodaművesei, Zsebes)',
  kap: 6,
  kepzettsegek: [],
  oktatasok: {},
};

export const tolvajTalavarCsodamuveseiHamisito: Iskola = {
  nev: 'Tolvaj (Talavar csodaművesei, Hamisító)',
  kap: 7,
  kepzettsegek: [],
  oktatasok: {},
};

export function tolvajTalavarCsodamuveseiBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Talavar csodaművesei, Besurranó)',
    kap: 7,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: {},
  };
}

export const tolvajSzurkecsuklyasok: Iskola = {
  nev: 'Tolvaj (Szürkecsuklyások)',
  kap: 5,
  kepzettsegek: [],
  oktatasok: {},
};

export const tolvajSzurkecsuklyasokZsebes: Iskola = {
  nev: 'Tolvaj (Szürkecsuklyások, Zsebes)',
  kap: 6,
  kepzettsegek: [],
  oktatasok: {},
};

export const tolvajSzurkecsuklyasokHamisito: Iskola = {
  nev: 'Tolvaj (Szürkecsuklyások, Hamisító)',
  kap: 6,
  kepzettsegek: [],
  oktatasok: {},
};

export function tolvajSzurkecsuklyasokBesurrano(options: BesurranoTolvajKepzettsegekOptions): Iskola {
  return {
    nev: 'Tolvaj (Szürkecsuklyások, Besurranó)',
    kap: 6,
    kepzettsegek: besurranoTolvajKepzettsegek(options),
    oktatasok: {},
  };
}

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

export const tuzvarazsloOrdani: Iskola = { nev: 'Tűzvarázsló (Ordani)', kap: 8, kepzettsegek: [], oktatasok: {} };

export const tuzvarazsloRenegat: Iskola = { nev: 'Tűzvarázsló (Renegát)', kap: 7, kepzettsegek: [], oktatasok: {} };

export const tuzvarazsloAschaonTuzmesterei: Iskola = {
  nev: 'Tűzvarázsló (Aschaon Tűzmesterei)',
  kap: 8,
  kepzettsegek: [],
  oktatasok: {},
};

export const varazslo: Iskola = { nev: 'Varázsló', kap: 9, kepzettsegek: [], oktatasok: {} };

export const LarDori: Iskola = { nev: 'Varázsló (Lar-Dori)', kap: 10, kepzettsegek: [], oktatasok: {} };

export const Pyarroni: Iskola = { nev: 'Varázsló (Pyarroni)', kap: 10, kepzettsegek: [], oktatasok: {} };

export const Dorani: Iskola = { nev: 'Varázsló (Dorani)', kap: 10, kepzettsegek: [], oktatasok: {} };
