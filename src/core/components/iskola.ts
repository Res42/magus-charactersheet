import { KarakterMapper } from '../karakter2';
import { KepzettsegType } from './kepzettseg';

export interface IskolaAlapKepzettseg {
  kepzettseg: KepzettsegType;
  szint?: number;
  szazalek?: number;
}

export interface Iskola {
  nev: string;
  kap: number;
  kepzettsegek: IskolaAlapKepzettseg[];
  // TODO: oktatás szintet is tárolni
  oktatasok: KepzettsegType[];
}

export function mapIskola(iskola: Iskola): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    kaszt: [...karakter.kaszt, iskola.nev],
    szintenkentiKap: karakter.szintenkentiKap - iskola.kap,
  });
}

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

export const Iskolak = {
  Harcos: {
    Alap: { nev: 'Harcos', kap: 4, kepzettsegek: [], oktatasok: [] } as Iskola,
    Amazon: { nev: 'Amazon', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    Barbar: { nev: 'Barbár', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
    ErigowiSzamszerijasz: { nev: 'Erigowi számszeríjász', kap: 4, kepzettsegek: [], oktatasok: [] } as Iskola,
    Siedon: { nev: 'Siedon', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    PredociVertes: { nev: 'Predoci vértes', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
  },

  Tolvaj: {
    Alap: { nev: 'Tolvaj', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    Zsebes: { nev: 'Zsebes', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
    Hamisito: { nev: 'Hamisító', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
    Besurrano: { nev: 'Besurranó', kap: 6, kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK, oktatasok: [] } as Iskola,

    Kobrak: {
      Alap: { nev: 'Tolvaj (Kobrák)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Zsebes: { nev: 'Zsebes (Kobrák)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Hamisito: { nev: 'Hamisító (Kobrák)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Besurrano: {
        nev: 'Besurranó (Kobrák)',
        kap: 7,
        kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK,
        oktatasok: [],
      } as Iskola,
    },

    TalavarCsodamuvesei: {
      Alap: { nev: 'Tolvaj (Talavar csodaművesei)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Zsebes: { nev: 'Zsebes (Talavar csodaművesei)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Hamisito: { nev: 'Hamisító (Talavar csodaművesei)', kap: 7, kepzettsegek: [], oktatasok: [] } as Iskola,
      Besurrano: {
        nev: 'Besurranó (Talavar csodaművesei)',
        kap: 7,
        kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK,
        oktatasok: [],
      } as Iskola,
    },

    Szurkecsuklyasok: {
      Alap: { nev: 'Tolvaj (Szürkecsuklyások)', kap: 5, kepzettsegek: [], oktatasok: [] } as Iskola,
      Zsebes: { nev: 'Zsebes (Szürkecsuklyások)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Hamisito: { nev: 'Hamisító (Szürkecsuklyások)', kap: 6, kepzettsegek: [], oktatasok: [] } as Iskola,
      Besurrano: {
        nev: 'Besurranó (Szürkecsuklyások)',
        kap: 6,
        kepzettsegek: BESURRANO_TOLVAJ_KEPZETTSEGEK,
        oktatasok: [],
      } as Iskola,
    },
  },

  // TODO: többi iskola HGB alapján
};
