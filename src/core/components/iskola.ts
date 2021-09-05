import { Hatter } from './hatter';
import { KepzettsegType } from './kepzettseg';

export interface IIskolaAlapKepzettseg {
  kepzettseg: KepzettsegType;
  szint?: number;
  szazalek?: number;
}

export const BESURRANO_TOLVAJ_KEPZETTSEGEK: IIskolaAlapKepzettseg[] = [
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

export class Iskola extends Hatter {
  protected constructor(
    nev: string,
    kap: number,
    public readonly kepzettsegek: IIskolaAlapKepzettseg[],
    // TODO: oktatás szintet is tárolni
    public readonly oktatasok: KepzettsegType[]
  ) {
    super(nev, kap);
  }

  static Harcos = {
    Alap: new Iskola('Harcos', 4, [], []),
    Amazon: new Iskola('Amazon', 6, [], []),
    Barbar: new Iskola('Barbár', 7, [], []),
    ErigowiSzamszerijasz: new Iskola('Erigowi számszeríjász', 4, [], []),
    Siedon: new Iskola('Siedon', 5, [], []),
    PredociVertes: new Iskola('Predoci vértes', 5, [], []),
  };

  static Tolvaj = {
    Alap: new Iskola('Tolvaj', 5, [], []),
    Zsebes: new Iskola('Zsebes', 5, [], []),
    Hamisito: new Iskola('Hamisító', 6, [], []),
    Besurrano: new Iskola('Besurranó', 6, BESURRANO_TOLVAJ_KEPZETTSEGEK, []),

    Kobrak: {
      Alap: new Iskola('Tolvaj (Kobrák)', 6, [], []),
      Zsebes: new Iskola('Zsebes (Kobrák)', 6, [], []),
      Hamisito: new Iskola('Hamisító (Kobrák)', 6, [], []),
      Besurrano: new Iskola('Besurranó (Kobrák)', 7, BESURRANO_TOLVAJ_KEPZETTSEGEK, []),
    },

    TalavarCsodamuvesei: {
      Alap: new Iskola('Tolvaj (Talavar csodaművesei)', 6, [], []),
      Zsebes: new Iskola('Zsebes (Talavar csodaművesei)', 6, [], []),
      Hamisito: new Iskola('Hamisító (Talavar csodaművesei)', 7, [], []),
      Besurrano: new Iskola('Besurranó (Talavar csodaművesei)', 7, BESURRANO_TOLVAJ_KEPZETTSEGEK, []),
    },

    Szurkecsuklyasok: {
      Alap: new Iskola('Tolvaj (Szürkecsuklyások)', 5, [], []),
      Zsebes: new Iskola('Zsebes (Szürkecsuklyások)', 6, [], []),
      Hamisito: new Iskola('Hamisító (Szürkecsuklyások)', 6, [], []),
      Besurrano: new Iskola('Besurranó (Szürkecsuklyások)', 6, BESURRANO_TOLVAJ_KEPZETTSEGEK, []),
    },
  };

  // TODO: többi iskola HGB alapján
}
