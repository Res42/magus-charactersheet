import { Adottsag, Hatter } from '../components/hatter';
import { SZOCIALIS_KEPZETTSEG_TYPES } from '../components/kepzettseg';
import { TulajdonsagType } from '../components/tulajdonsag';

export const holtakSzeme: Hatter = { nev: 'Holtak szeme', kap: 1 };

export const kegyelt: Hatter = { nev: 'Kegyelt', kap: 1 };

export const leleklenyomat: Hatter = { nev: 'Léleklenyomat', kap: 1 };

export function magiatagadas(ertek: 1 | 2 | 3 | 4 | 5): Hatter {
  return {
    nev: `Mágiatagadás ${ertek}`,
    kap: ertek,
    szintenkentiAsztralTME: ertek,
    szintenkentiMentalTME: ertek,
  };
}

export const magikusFogekonysag: Hatter = { nev: 'Mágikus fogékonyság', kap: 1 };

export function manalato(ertek: 2 | 3): Hatter {
  return { nev: `Manalátó ${ertek}`, kap: ertek };
}

export const muvesztehetseg: Hatter = { nev: 'Művésztehetség', kap: 1 };

export const nemesiVer: Hatter = {
  nev: 'Nemesi vér',
  kap: 1,
  oktatasOsszeadodikFajiOktatassal: true,
  oktatasok: Object.fromEntries(SZOCIALIS_KEPZETTSEG_TYPES.map((kepzettsegType) => [kepzettsegType, 2])),
};

export const psziErzekenyseg: Hatter = { nev: 'Pszi érzékenység', kap: 1 };

export function rang(ertek: 1 | 2 | 3): Hatter {
  return { nev: `Rang ${ertek}`, kap: ertek };
}

export const sugallat: Hatter = { nev: 'Sugallat', kap: 1 };

export function szellemekJoindulata(ertek: 1 | 2 | 3): Hatter {
  return {
    nev: `Szellemek jóindulata ${ertek}`,
    kap: ertek,
    szintenkentiAsztralTME: ertek > 1 ? 1 : undefined,
    szintenkentiMentalTME: ertek > 1 ? 1 : undefined,
  };
}

export function vagyon(ertek: 1 | 2 | 3): Hatter {
  return { nev: `Vagyon ${ertek}`, kap: ertek };
}

export function adottsag(tulajdonsag: TulajdonsagType.Ero, ertek: 1 | 2 | 3 | 4): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Gyorsasag, ertek: 1 | 2): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Ugyesseg, ertek: 1 | 2): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Allokepesseg, ertek: 1 | 2 | 3 | 4): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Karizma, ertek: 1 | 2 | 3 | 4): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Egeszseg, ertek: 1 | 2 | 3): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Intelligencia, ertek: 1 | 2 | 3 | 4): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Akaratero, ertek: 1 | 2): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Asztral, ertek: 1 | 2 | 3 | 4): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType.Erzekeles, ertek: 1 | 2): Adottsag;
export function adottsag(tulajdonsag: TulajdonsagType, ertek: number): Adottsag {
  return { nev: `Adottság (${tulajdonsag}) ${ertek}`, kap: ertek, tulajdonsag };
}
