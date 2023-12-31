import { createKarakter } from '../core/create-karakter';
import { torpe } from '../core/data/fajok';
import { sajatKultura } from '../core/data/hatterek';
import { harcosBarbar } from '../core/data/iskolak';
import {
  fajdalomtures,
  fegyverhasznalat,
  harciLaz,
  harcteriGyakorlat,
  nyelvtudas,
  vertviselet,
} from '../core/data/kepzettsegek';
import { Karakter } from '../core/models/karakter';
import { TulajdonsagType } from '../core/models/tulajdonsag';

test('Character: Grond', () => {
  const grond = createKarakter({
    nev: 'Grond',
    hatterek: [
      torpe,
      sajatKultura('törpe'),
      harcosBarbar({
        fegyverhasznalat3: 'pika',
        fegyverhasznalat2_2: 'X',
        fegyverhasznalat2_1: 'Y',
        allatismeret2: 'Z',
        magiatagadas: 2,
      }),
    ],
    tulajdonsagok: {
      ero: 14,
      gyorsasag: 14,
      ugyesseg: 15,
      allokepesseg: 14,
      karizma: 9,
      egeszseg: 14,
      intelligencia: 9,
      akaratero: 15,
      asztral: 16,
      erzekeles: 15,
    },
    szintlepesek: [
      {
        kepzettsegek: [
          { kepzettseg: fajdalomtures, kp: 18, tulajdonsag: TulajdonsagType.Allokepesseg },
          { kepzettseg: harcteriGyakorlat, kp: 18, tulajdonsag: TulajdonsagType.Gyorsasag },
        ],
        te: 3,
      },
      {
        kepzettsegek: [
          { kepzettseg: fegyverhasznalat('pika'), kp: 28, tulajdonsag: TulajdonsagType.Ero },
          { kepzettseg: vertviselet, kp: 6 },
        ],
        te: 4,
      },
      {
        kepzettsegek: [
          { kepzettseg: harciLaz, kp: 21, tulajdonsag: TulajdonsagType.Egeszseg },
          { kepzettseg: nyelvtudas('erv'), kp: 4 },
        ],
        te: 13,
      },
    ],
  });

  const expected: Karakter = {
    nev: 'Grond',
    jellem: '',
    faj: 'törpe',
    kaszt: ['Harcos (Barbár)'],
    szintenkentiKap: 42,
    hatterek: {
      Mágiatagadás: 2,
    },
    szint: 3,
    tulajdonsagLimitek: {
      ero: 19,
      gyorsasag: 18,
      ugyesseg: 18,
      allokepesseg: 19,
      egeszseg: 19,
      karizma: 17,
      intelligencia: 17,
      akaratero: 18,
      asztral: 17,
      erzekeles: 18,
    },
    tulajdonsagok: {
      ero: 15,
      gyorsasag: 15,
      ugyesseg: 15,
      allokepesseg: 15,
      karizma: 9,
      egeszseg: 15,
      intelligencia: 9,
      akaratero: 15,
      asztral: 16,
      erzekeles: 15,
    },
    maxEp: 15,
    maxFp: 39,
    maxPszi: 0,
    maxMana: 0,
    maxKegy: 0,
    ke: 30,
    te: 74,
    ce: 30,
    ve: 90,
    asztralTME: 22,
    mentalTME: 21,
    szintenkentiAsztralTME: 2,
    szintenkentiMentalTME: 2,
    szintenkentiKegy: 0,
    szintenkentiPszi: 0,
    szintenkentiFp: 0,
    oktatasok: {
      Építészet: 2,
      Térképészet: 2,
      Mechanika: 2,
      'Művészetek (szobrászat)': 2,
      Szakma: 2,
      Fájdalomtűrés: 2,
      Fegyverhasználat: 2,
      Fegyverismeret: 2,
      Hadvezetés: 2,
      'Harci láz': 2,
      Harcművészet: 2,
      'Harctéri gyakorlat': 2,
      Kétkezesharc: 2,
      Pajzshasználat: 2,
      'Pusztakezes harc': 2,
      Pusztítás: 2,
      Taktika: 2,
      Vakharc: 2,
      Vértviselet: 2,
      Állatismeret: 2,
      'Csapdaállítás/leszedés': 2,
      Csomozás: 2,
      Értékbecslés: 2,
      Futás: 2,
      Hajozás: 2,
      Hangutánzás: 2,
      Helyismeret: 2,
      Idomítás: 2,
      Időjóslás: 2,
      Kocsihajtás: 2,
      Lovaglás: 2,
      Nyomolvasás: 2,
      Úszás: 2,
      Vadonjárás: 2,
      Akrobatika: 2,
      Esés: 2,
      Mászás: 2,
    },
    kepzettsegek: {
      Fájdalomtűrés: 5,
      'Fegyverhasználat (pika)': 5,
      'Fegyverhasználat (X)': 2,
      'Fegyverhasználat (Y)': 2,
      Fegyverismeret: 2,
      'Harci láz': 5,
      'Harctéri gyakorlat': 5,
      'Pusztakezes harc': 2,
      Vértviselet: 3,
      'Állatismeret (Z)': 2,
      Futás: 2,
      'Szakma (vadászat)': 2,
      Úszás: 2,
      'Vadonjárás (keleti sztyeppék)': 2,
      Herbalizmus: 2,

      'Helyismeret (törpe)': 3,
      'Kultúra (törpe)': 3,
      'Nyelvtudás (törpe)': 3,

      'Nyelvtudás (erv)': 2,
    },
  };

  expect(grond).toEqual(expected);
});
