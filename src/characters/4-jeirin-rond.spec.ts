import { KepzettsegType } from '../core/components/kepzettseg';
import { Karakter } from '../core/components/model';
import { TulajdonsagType } from '../core/components/tulajdonsag';
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
    szintlepesek: [
      {
        kepzettsegek: [
          { kepzettseg: KepzettsegType.Fegyverhasznalat, kp: 15 }, // számszeríj
          { kepzettseg: KepzettsegType.AlcazasAlruha, kp: 3 },
          { kepzettseg: KepzettsegType.Elettan, kp: 5 },
          { kepzettseg: KepzettsegType.Pszi, kp: 10 },
          { kepzettseg: KepzettsegType.Lopodzas, kp: 7, tulajdonsag: TulajdonsagType.Ugyesseg },
        ],
      },
      {
        kepzettsegek: [
          { kepzettseg: KepzettsegType.Csapdakereses, kp: 4 },
          { kepzettseg: KepzettsegType.Rejtozes, kp: 7, tulajdonsag: TulajdonsagType.Erzekeles },
          { kepzettseg: KepzettsegType.Rejtekhelykutatas, kp: 7, tulajdonsag: TulajdonsagType.Erzekeles },
          { kepzettseg: KepzettsegType.Zarnyitas, kp: 7, tulajdonsag: TulajdonsagType.Ugyesseg },
          { kepzettseg: KepzettsegType.Akrobatika, kp: 7, tulajdonsag: TulajdonsagType.Ugyesseg },
          { kepzettseg: KepzettsegType.Eses, kp: 3 },
          { kepzettseg: KepzettsegType.Maszas, kp: 7, tulajdonsag: TulajdonsagType.Ero },
        ],
      },
      { ce: 16, fp: 12, pszi: 1 },
    ],
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
    oktatasok: {
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
    },
    kepzettsegek: {
      'Fegyverhasználat (tőr)': 3,
      'Fegyverhasználat (számszeríj)': 3,
      'Álcázás/álruha': 3,
      Jelbeszéd: 1,
      Orvtámadás: 3,
      Szabadulóművészet: 1,
      Csapdakeresés: 57,
      Lopódzás: 83,
      Rejtozes: 83,
      Rejtekhelykutatás: 82,
      Zárnyitás: 83,
      Zsebmetszés: 28,
      Veszélyérzék: 32,
      Csomozás: 1,
      Értékbecslés: 3,
      Lovaglás: 1,
      Akrobatika: 83,
      Esés: 48,
      Mászás: 83,
      Élettan: 2,
      'Írás/Olvasás': 1,
      Mechanika: 2,
      'Számtan/Mértan': 2,
      'Kultúra (saját)': 3,
      Lélektan: 1,
      Pszi: 2,
    },
    hatterek: ['Pszi érzékenység', 'Manalátó 2', 'Vagyon 1'],
  };

  expect(jeirin).toEqual(expected);
});
