import { Karakter } from '../core/components/model';
import { Fajok } from '../core/data/fajok';
import { Hatterek } from '../core/data/hatterek';
import { Iskolak } from '../core/data/iskolak';
import { createKarakter } from '../core/karakter';

test('Character: Jeirin Rond', () => {
  const jeirin = createKarakter({
    nev: 'Jeirin Rond',
    hatterek: [Fajok.Ember, Iskolak.Tolvaj.Besurrano, Hatterek.PsziErzekenyseg, Hatterek.Manalato2, Hatterek.Vagyon1],
    tulajdonsagok: {
      ero: 13,
      gyorsasag: 14,
      ugyesseg: 15,
      allokepesseg: 13,
      karizma: 12,
      egeszseg: 12,
      intelligencia: 14,
      akaratero: 14,
      asztral: 13,
      erzekeles: 15,
    },
    szintlepesek: [{}, {}, { ce: 16, fp: 12, pszi: 1 }],
  });

  const expected: Karakter = {
    nev: 'Jeirin Rond',
    faj: 'Ember',
    szint: 3,
    jellem: '',
    kaszt: ['Tolvaj (Besurranó)'],
    tulajdonsagok: {
      ero: 14,
      gyorsasag: 14,
      ugyesseg: 18,
      allokepesseg: 13,
      karizma: 12,
      egeszseg: 12,
      intelligencia: 14,
      akaratero: 14,
      asztral: 13,
      erzekeles: 17,
    },
    tulajdonsagLimitek: {
      ero: 18,
      gyorsasag: 18,
      ugyesseg: 18,
      allokepesseg: 18,
      karizma: 18,
      egeszseg: 18,
      intelligencia: 18,
      akaratero: 18,
      asztral: 18,
      erzekeles: 18,
    },
    maxEp: 12,
    maxFp: 39,
    maxKegy: 0,
    maxMana: 0,
    maxPszi: 15,
    ke: 31,
    te: 46,
    ve: 107,
    ce: 51,
    asztralTME: 13,
    mentalTME: 14,
    szintenkentiAsztralTME: 0,
    szintenkentiMentalTME: 0,
    szintenkentiKap: 40,
    oktatasok: {},
    hatterek: ['Pszi érzékenység', 'Manalátó', 'Vagyon'],
  };

  expect(jeirin).toEqual(expected);
});
