import { Iskola, IskolaAlapKepzettseg } from '../components/hatter';
import { KepzettsegType } from '../components/kepzettseg';

const BESURRANO_TOLVAJ_KEPZETTSEGEK: IskolaAlapKepzettseg[] = [
  { kepzettseg: KepzettsegType.Fegyverhasznalat, szint: 2 },
  { kepzettseg: KepzettsegType.AlcazasAlruha, szint: 2 },
  { kepzettseg: KepzettsegType.Mechanika, szint: 2 },
  { kepzettseg: KepzettsegType.SzamtanMertan, szint: 2 },
  { kepzettseg: KepzettsegType.Ertekbecsles, szint: 3 },
  { kepzettseg: KepzettsegType.Orvtamadas, szint: 1 },
  { kepzettseg: KepzettsegType.Jelbeszed, szint: 1 },
  { kepzettseg: KepzettsegType.Szabadulomuveszet, szint: 1 },
  { kepzettseg: KepzettsegType.Csomozas, szint: 1 },
  { kepzettseg: KepzettsegType.Lelektan, szint: 1 },
  { kepzettseg: KepzettsegType.Rejtekhelykutatas, szazalek: 30 },
  { kepzettseg: KepzettsegType.Zarnyitas, szazalek: 30 },
  { kepzettseg: KepzettsegType.Zsebmetszes, szazalek: 10 },
  { kepzettseg: KepzettsegType.Lopodzas, szazalek: 30 },
  { kepzettseg: KepzettsegType.Rejtozes, szazalek: 30 },
  { kepzettseg: KepzettsegType.Maszas, szazalek: 30 },
  { kepzettseg: KepzettsegType.Eses, szazalek: 15 },
  { kepzettseg: KepzettsegType.Akrobatika, szazalek: 30 },
  { kepzettseg: KepzettsegType.Csapdakereses, szazalek: 20 },
  { kepzettseg: KepzettsegType.Veszelyerzek, szazalek: 15 },
];

/** UTK + HBG alapjáni iskolák. */
export const Iskolak = {
  Harcos: {
    Alap: { nev: 'Harcos', kap: 4, kepzettsegek: [], oktatasok: [] } as Iskola,
    Amazon: { nev: 'Amazon', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    Barbar: { nev: 'Barbár', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    ErigowiSzamszerijasz: { nev: 'Erigowi számszeríjász', kap: 4, kepzettsegek: [], oktatasok: [] } as Iskola,
    Siedon: { nev: 'Siedon', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    PredociVertes: { nev: 'Predoci vértes', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Lovag: {
    Alap: { nev: 'Lovag', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    Feketerend: { nev: 'Feketerend', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    MaricoConRabora: { nev: 'Marico con Rabora', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    ShadoniElsoArc: { nev: 'Shadoni Első Arc', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    ShadoniMasodikArc: { nev: 'Shadoni Második Arc', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    ShadoniHarmadikArc: { nev: 'Shadoni Harmadik Arc', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    ShadoniNegyedikArc: { nev: 'Shadoni Negyedik Arc', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    ShadoniOtodikArc: { nev: 'Shadoni Ötödik Arc', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    ShadoniHatodikkArc: { nev: 'Shadoni Hatodik Arc', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    ErigowiKrad: { nev: 'Erigowi Krad', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Fejvadasz: {
    Harcos: { nev: 'Fejvadász (Harcos)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    Orgyilkos: { nev: 'Fejvadász (Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    Felderito: { nev: 'Fejvadász (Felderítő)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    Testor: { nev: 'Fejvadász (Testőr)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,

    Vertestver: {
      Harcos: { nev: 'Fejvadász (Vértestvér, Harcos)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
      Orgyilkos: { nev: 'Fejvadász (Vértestvér, Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
      Felderito: { nev: 'Fejvadász (Vértestvér, Felderítő)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
      Testor: { nev: 'Fejvadász (Vértestvér, Testőr)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    },

    AnatAkhan: {
      Harcos: { nev: 'Fejvadász (Anat-Akhan, Harcos)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
      Orgyilkos: { nev: 'Fejvadász (Anat-Akhan, Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
      Felderito: { nev: 'Fejvadász (Anat-Akhan, Felderítő)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
      Testor: { nev: 'Fejvadász (Anat-Akhan, Testőr)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    },

    Ikrek: {
      Harcos: { nev: 'Fejvadász (Ikrek, Harcos)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
      Orgyilkos: { nev: 'Fejvadász (Ikrek, Orgyilkos)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
      Felderito: { nev: 'Fejvadász (Ikrek, Felderítő)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
      Testor: { nev: 'Fejvadász (Ikrek, Testőr)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    },
  },

  Tolvaj: {
    Alap: { nev: 'Tolvaj', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    Zsebes: { nev: 'Tolvaj (Zsebes)', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    Hamisito: { nev: 'Tolvaj (Hamisító)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    Besurrano: { nev: 'Tolvaj (Besurranó)', kap: 6, kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK, oktatasok: [] } as Iskola,

    Kobrak: {
      Alap: { nev: 'Tolvaj (Kobrák)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Zsebes: { nev: 'Tolvaj (Kobrák, Zsebes)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Hamisito: { nev: 'Tolvaj (Kobrák, Hamisító)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Besurrano: { nev: 'Tolvaj (Kobrák, Besurranó)', kap: 7, kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK, oktatasok: [] } as Iskola,
    },

    TalavarCsodamuvesei: {
      Alap: { nev: 'Tolvaj (Talavar csodaművesei)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Zsebes: { nev: 'Tolvaj (Talavar csodaművesei, Zsebes)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Hamisito: { nev: 'Tolvaj (Talavar csodaművesei, Hamisító)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
      Besurrano: { nev: 'Tolvaj (Talavar csodaművesei, Besurranó)', kap: 7, kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK, oktatasok: [] } as Iskola,
    },

    Szurkecsuklyasok: {
      Alap: { nev: 'Tolvaj (Szürkecsuklyások)', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
      Zsebes: { nev: 'Tolvaj (Szürkecsuklyások, Zsebes)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Hamisito: { nev: 'Tolvaj (Szürkecsuklyások, Hamisító)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Besurrano: { nev: 'Tolvaj (Szürkecsuklyások, Besurranó)', kap: 6, kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK, oktatasok: [] } as Iskola,
    },
  },

  Bard: {
    Alap: { nev: 'Bárd', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    AszisziEnekmondo: { nev: 'Bárd (Asziszi Énekmondó)', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    LombhullasArvai: { nev: 'Bárd (Lombhullás Árvái)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    VandorloDalnok: { nev: 'Bárd (Vándorló dalnok)', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    SotetBard: { nev: 'Bárd (Sötét bárd)', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Harcmuvesz: {
    ShienKaTo: { nev: 'Harcművész (Shien-ka-to)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    DartNidKinito: { nev: 'Harcművész (Dart-nid-kinito)', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    AvadKaKinito: { nev: 'Harcművész (Avad-ka-kinito)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    NisenNidTo: { nev: 'Harcművész (Nisen-nid-to)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    UdvariKardmuvesz: { nev: 'Harcművész (Udvari Kardművész)', kap: 9, kepzettsegek: [], oktatasok: [] } as Iskola,
    HarcUtjaKardmuvesz: { nev: 'Harcművész (Harc útja Kardművész)', kap: 9, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Pap: {
    Domvik: { nev: 'Pap (Domvik)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    Ranagol: { nev: 'Pap (Ranagol)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    Arel: { nev: 'Pap (Arel)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    Kyel: { nev: 'Pap (Kyel)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    Sogron: { nev: 'Pap (Sogron)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    Tharr: { nev: 'Pap (Tharr)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Paplovag: {
    Darton: { nev: 'Paplovag (Darton)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    Domvik: { nev: 'Paplovag (Domvik)', kap: 9, kepzettsegek: [], oktatasok: [] } as Iskola,
    Dreina: { nev: 'Paplovag (Dreina)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    AranykorKrad: { nev: 'Paplovag (Aranykör (Krad))', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    Ranagol: { nev: 'Paplovag (Ranagol)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    FonixSogron: { nev: 'Paplovag (Főnix (Sogron))', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    BosszuangyalUwel: { nev: 'Paplovag (Bosszúangyal (Uwel))', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Boszorkany: {
    Alap: { nev: 'Boszorkány', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    LiviniaiGyulekezet: { nev: 'Boszorkány (Liviniai Gyülekezet)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    MaidaSaluquas: { nev: 'Boszorkány (Maida Saluquas)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    StellaProsylens: { nev: 'Boszorkány (Stella Prosylens)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    AlidaxiBoszorkanyrend: { nev: 'Boszorkány (Alidaxi boszorkányrend)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    EzerFatyolNoverei: { nev: 'Boszorkány (Ezer Fátyol Nővérei)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Boszorkanymester: {
    Alap: { nev: 'Boszorkánymester', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    AszisziVerkelyhesek: { nev: 'Boszorkánymester (Asziszi Vérkelyhesek)', kap: 9, kepzettsegek: [], oktatasok: [] } as Iskola,
    AscensMorga: { nev: 'Boszorkánymester (Ascens Morga)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    HergoliVillammester: { nev: 'Boszorkánymester (Hergoli Villámmester)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Tuzvarazslo: {
    Ordani: { nev: 'Tűzvarázsló (Ordani)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
    Renegat: { nev: 'Tűzvarázsló (Renegát)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    AschaonTuzmesterei: { nev: 'Tűzvarázsló (Aschaon Tűzmesterei)', kap: 8, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Varazslo: {
    Alap: { nev: 'Varázsló', kap: 9, kepzettsegek: [], oktatasok: [] } as Iskola,
    LarDori: { nev: 'Varázsló (Lar-Dori)', kap: 10, kepzettsegek: [], oktatasok: [] } as Iskola,
    Pyarroni: { nev: 'Varázsló (Pyarroni)', kap: 10, kepzettsegek: [], oktatasok: [] } as Iskola,
    Dorani: { nev: 'Varázsló (Dorani)', kap: 10, kepzettsegek: [], oktatasok: [] } as Iskola,
  },
};
