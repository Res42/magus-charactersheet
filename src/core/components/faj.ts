import { MAX_TULAJDONSAG_SZINT } from '../constants';
import { KarakterMapper } from '../karakter2';
import { ITulajdonsagok } from './tulajdonsag';

export interface Faj {
  nev: string;
  kap: number;
  tulajdonsagLimitek: ITulajdonsagok;
}

export function mapFaj(faj: Faj): KarakterMapper {
  return (karakter) => {
    if (karakter.faj) {
      // ha már van besettelve valami truthy (a default üres string, ezért azon nem akad meg)
      // akkor több, mint 1 fajt adott meg, ilyet nem lehet
      throw new Error('HATTER.NINCS_PONTOSAN_1_FAJ');
    }

    return {
      ...karakter,
      faj: faj.nev,
      szintenkentiKap: karakter.szintenkentiKap - faj.kap,
      tulajdonsagLimitek: Object.fromEntries(
        Object.entries(faj.tulajdonsagLimitek).map(([tulajdonsag, ertek]) => [
          tulajdonsag,
          Math.max(karakter.tulajdonsagLimitek[tulajdonsag as keyof ITulajdonsagok] + ertek, MAX_TULAJDONSAG_SZINT),
        ])
      ) as ITulajdonsagok,
    };
  };
}

export const Fajok = {
  Ember: {
    nev: 'Ember',
    kap: 0,
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
  } as Faj,

  Elf: {
    nev: 'Elf',
    kap: 1,
    tulajdonsagLimitek: {
      ero: 16,
      gyorsasag: 20,
      ugyesseg: 18,
      allokepesseg: 16,
      egeszseg: 18,
      karizma: 20,
      intelligencia: 18,
      akaratero: 18,
      asztral: 18,
      erzekeles: 20,
    },
  } as Faj,

  Felelf: {
    nev: 'Félelf',
    kap: 1,
    tulajdonsagLimitek: {
      ero: 17,
      gyorsasag: 19,
      ugyesseg: 18,
      allokepesseg: 17,
      egeszseg: 18,
      karizma: 19,
      intelligencia: 18,
      akaratero: 18,
      asztral: 18,
      erzekeles: 19,
    },
  } as Faj,

  UdvariOrk: {
    nev: 'Udvari ork',
    kap: 1,
    tulajdonsagLimitek: {
      ero: 20,
      gyorsasag: 18,
      ugyesseg: 18,
      allokepesseg: 20,
      egeszseg: 20,
      karizma: 16,
      intelligencia: 16,
      akaratero: 18,
      asztral: 16,
      erzekeles: 18,
    },
  } as Faj,

  Torpe: {
    nev: 'Törpe',
    kap: 1,
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
  } as Faj,

  KyrSzarmazek: {
    nev: 'Kyr származék',
    kap: 1,
    tulajdonsagLimitek: {
      ero: 17,
      gyorsasag: 18,
      ugyesseg: 18,
      allokepesseg: 17,
      egeszseg: 17,
      karizma: 19,
      intelligencia: 19,
      akaratero: 18,
      asztral: 19,
      erzekeles: 18,
    },
  } as Faj,
};
