import { createKarakter } from '../core/create-karakter';
import { ember } from '../core/data/fajok';
import { sajatKultura } from '../core/data/hatterek';
import { papDomvik } from '../core/data/iskolak';
import { kultura, nyelvtudas, vallasismeret } from '../core/data/kepzettsegek';
import { Karakter } from '../core/models/karakter';
import { TulajdonsagType } from '../core/models/tulajdonsag';

test('Character: Bor Ven', () => {
  const bor = createKarakter({
    nev: 'Bor Ven',
    hatterek: [
      ember,
      sajatKultura('shadoni'),
      papDomvik({ fegyverVagyFegyverTipus: 'tőr', nyelvtudas3: 'közös', nyelvtudas2: 'X' }),
    ],
    tulajdonsagok: {
      ero: 12,
      gyorsasag: 13,
      ugyesseg: 13,
      allokepesseg: 13,
      karizma: 12,
      egeszseg: 14,
      intelligencia: 14,
      akaratero: 15,
      asztral: 15,
      erzekeles: 14,
    },
    szintlepesek: [
      {
        kepzettsegek: [
          { kepzettseg: nyelvtudas('shadoni'), kp: 5 },
          { kepzettseg: kultura('shadoni'), kp: 5 },
          { kepzettseg: vallasismeret, kp: 8, tulajdonsag: TulajdonsagType.Asztral },
        ],
        kegy: 13,
      },
    ],
  });

  const expected: Karakter = {
    nev: 'Bor Ven',
    jellem: '',
    faj: 'ember',
    kaszt: ['Pap (Domvik)'],
    szintenkentiKap: 43,
    hatterek: {},
    szint: 1,
    tulajdonsagLimitek: {
      ero: 18,
      gyorsasag: 18,
      ugyesseg: 18,
      allokepesseg: 18,
      egeszseg: 18,
      karizma: 18,
      intelligencia: 18,
      akaratero: 18,
      asztral: 18,
      erzekeles: 18,
    },
    tulajdonsagok: {
      ero: 12,
      gyorsasag: 13,
      ugyesseg: 13,
      allokepesseg: 13,
      karizma: 12,
      egeszseg: 14,
      intelligencia: 14,
      akaratero: 15,
      asztral: 16,
      erzekeles: 14,
    },
    maxEp: 14,
    maxFp: 28,
    maxPszi: 0,
    maxMana: 0,
    maxKegy: 15,
    ke: 27,
    te: 38,
    ce: 26,
    ve: 86,
    asztralTME: 18,
    mentalTME: 17,
    szintenkentiAsztralTME: 2,
    szintenkentiMentalTME: 2,
    szintenkentiKegy: 2,
    oktatasok: {
      Ékesszólás: 2,
      Élettan: 2,
      Fegyverhasználat: 2,
      Heraldika: 2,
      Herbalizmus: 2,
      'Írás/Olvasás': 2,
      'Jog/Törvénykezés': 2,
      Kultúra: 2,
      Legendaismeret: 2,
      Lélektan: 2,
      Művészetek: 2,
      Nyelvtudás: 2,
      Orvoslás: 2,
      'Ősi nyelv': 2,
      'Politika/diplomácia': 2,
      Pszi: 2,
      'Számtan/Mértan': 2,
      Térképészet: 2,
      Történelem: 2,
      'Udvari etikett/intrika': 2,
      Vallásismeret: 2,
      Hadvezetés: 2,
      Oktatás: 2,
    },
    kepzettsegek: {
      'Fegyverhasználat (tőr)': 2,
      Vallásismeret: 4,
      Lélektan: 2,
      Ékesszólás: 2,
      'Helyismeret (shadoni)': 3,
      'Kultúra (shadoni)': 4,
      'Írás/Olvasás': 3,
      'Nyelvtudás (shadoni)': 4,
      'Nyelvtudás (közös)': 3,
      'Nyelvtudás (X)': 2,
      Történelem: 2,
      Legendaismeret: 1,
      'Jog/Törvénykezés': 2,
      'Ősi nyelv (lingua domini)': 3,
      Herbalizmus: 2,
      Orvoslás: 2,
      Élettan: 2,
    },
  };

  expect(bor).toEqual(expected);
});
