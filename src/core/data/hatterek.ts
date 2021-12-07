import { Adottsag, Hatter } from '../components/hatter';
import { SZOCIALIS_KEPZETTSEG_TYPES } from './kepzettsegek';
import { TulajdonsagType } from '../components/tulajdonsag';

export const Hatterek = {
  HoltakSzeme: { nev: 'Holtak szeme', kap: 1 } as Hatter,
  Kegyelt: { nev: 'Kegyelt', kap: 1 } as Hatter,
  Leleklenyomat: { nev: 'Léleklenyomat', kap: 1 } as Hatter,
  Magiatagadas1: { nev: 'Mágiatagadás 1', kap: 1, szintenkentiAsztralTME: 1, szintenkentiMentalTME: 1 } as Hatter,
  Magiatagadas2: { nev: 'Mágiatagadás 2', kap: 2, szintenkentiAsztralTME: 2, szintenkentiMentalTME: 2 } as Hatter,
  Magiatagadas3: { nev: 'Mágiatagadás 3', kap: 3, szintenkentiAsztralTME: 3, szintenkentiMentalTME: 3 } as Hatter,
  Magiatagadas4: { nev: 'Mágiatagadás 4', kap: 4, szintenkentiAsztralTME: 4, szintenkentiMentalTME: 4 } as Hatter,
  Magiatagadas5: { nev: 'Mágiatagadás 5', kap: 5, szintenkentiAsztralTME: 5, szintenkentiMentalTME: 5 } as Hatter,
  MagikusFogekonysag: { nev: 'Mágikus fogékonyság', kap: 1 } as Hatter,
  Manalato2: { nev: 'Manalátó 2', kap: 2 } as Hatter,
  Manalato3: { nev: 'Manalátó 3', kap: 3 } as Hatter,
  Muvesztehetseg: { nev: 'Művésztehetség', kap: 1 } as Hatter,
  NemesiVer: {
    nev: 'Nemesi vér',
    kap: 1,
    oktatasOsszeadodikFajiOktatassal: true,
    oktatasok: Object.fromEntries(SZOCIALIS_KEPZETTSEG_TYPES.map((kepzettsegType) => [kepzettsegType, 2])),
  } as Hatter,
  PsziErzekenyseg: { nev: 'Pszi érzékenység', kap: 1 } as Hatter,
  Rang1: { nev: 'Rang 1', kap: 1 } as Hatter,
  Rang2: { nev: 'Rang 2', kap: 2 } as Hatter,
  Rang3: { nev: 'Rang 3', kap: 3 } as Hatter,
  Sugallat: { nev: 'Sugallat', kap: 1 } as Hatter,
  SzellemekJoindulata1: { nev: 'Szellemek jóindulata', kap: 1 } as Hatter,
  SzellemekJoindulata2: {
    nev: 'Szellemek jóindulata 2',
    kap: 2,
    szintenkentiAsztralTME: 1,
    szintenkentiMentalTME: 1,
  } as Hatter,
  SzellemekJoindulata3: {
    nev: 'Szellemek jóindulata 3',
    kap: 3,
    szintenkentiAsztralTME: 1,
    szintenkentiMentalTME: 1,
  } as Hatter,
  Vagyon1: { nev: 'Vagyon 1', kap: 1 } as Hatter,
  Vagyon2: { nev: 'Vagyon 2', kap: 2 } as Hatter,
  Vagyon3: { nev: 'Vagyon 3', kap: 3 } as Hatter,

  Adottsagok: {
    Ero1: { nev: 'Adottság (Erő) 1', kap: 1, tulajdonsag: TulajdonsagType.Ero } as Adottsag,
    Ero2: { nev: 'Adottság (Erő) 2', kap: 2, tulajdonsag: TulajdonsagType.Ero } as Adottsag,
    Ero3: { nev: 'Adottság (Erő) 3', kap: 3, tulajdonsag: TulajdonsagType.Ero } as Adottsag,
    Ero4: { nev: 'Adottság (Erő) 4', kap: 4, tulajdonsag: TulajdonsagType.Ero } as Adottsag,

    Gyorsasag1: { nev: 'Adottság (Gyorsaság) 1', kap: 1, tulajdonsag: TulajdonsagType.Gyorsasag } as Adottsag,
    Gyorsasag2: { nev: 'Adottság (Gyorsaság) 2', kap: 2, tulajdonsag: TulajdonsagType.Gyorsasag } as Adottsag,

    Ugyesseg1: { nev: 'Adottság (Ügyesség) 1', kap: 1, tulajdonsag: TulajdonsagType.Ugyesseg } as Adottsag,
    Ugyesseg2: { nev: 'Adottság (Ügyesség) 2', kap: 2, tulajdonsag: TulajdonsagType.Ugyesseg } as Adottsag,

    Allokepesseg1: { nev: 'Adottság (Állóképesség) 1', kap: 1, tulajdonsag: TulajdonsagType.Allokepesseg } as Adottsag,
    Allokepesseg2: { nev: 'Adottság (Állóképesség) 2', kap: 2, tulajdonsag: TulajdonsagType.Allokepesseg } as Adottsag,
    Allokepesseg3: { nev: 'Adottság (Állóképesség) 3', kap: 3, tulajdonsag: TulajdonsagType.Allokepesseg } as Adottsag,
    Allokepesseg4: { nev: 'Adottság (Állóképesség) 4', kap: 4, tulajdonsag: TulajdonsagType.Allokepesseg } as Adottsag,

    Karizma1: { nev: 'Adottság (Karizma) 1', kap: 1, tulajdonsag: TulajdonsagType.Karizma } as Adottsag,
    Karizma2: { nev: 'Adottság (Karizma) 2', kap: 2, tulajdonsag: TulajdonsagType.Karizma } as Adottsag,
    Karizma3: { nev: 'Adottság (Karizma) 3', kap: 3, tulajdonsag: TulajdonsagType.Karizma } as Adottsag,
    Karizma4: { nev: 'Adottság (Karizma) 4', kap: 3, tulajdonsag: TulajdonsagType.Karizma } as Adottsag,

    Egeszseg1: { nev: 'Adottság (Egészség) 1', kap: 1, tulajdonsag: TulajdonsagType.Egeszseg } as Adottsag,
    Egeszseg2: { nev: 'Adottság (Egészség) 2', kap: 2, tulajdonsag: TulajdonsagType.Egeszseg } as Adottsag,
    Egeszseg3: { nev: 'Adottság (Egészség) 3', kap: 3, tulajdonsag: TulajdonsagType.Egeszseg } as Adottsag,

    Intelligencia1: {
      nev: 'Adottság (Intelligencia) 1',
      kap: 1,
      tulajdonsag: TulajdonsagType.Intelligencia,
    } as Adottsag,
    Intelligencia2: {
      nev: 'Adottság (Intelligencia) 2',
      kap: 2,
      tulajdonsag: TulajdonsagType.Intelligencia,
    } as Adottsag,
    Intelligencia3: {
      nev: 'Adottság (Intelligencia) 3',
      kap: 3,
      tulajdonsag: TulajdonsagType.Intelligencia,
    } as Adottsag,
    Intelligencia4: {
      nev: 'Adottság (Intelligencia) 4',
      kap: 3,
      tulajdonsag: TulajdonsagType.Intelligencia,
    } as Adottsag,

    Akaratero1: { nev: 'Adottság (Akaraterő) 1', kap: 1, tulajdonsag: TulajdonsagType.Akaratero } as Adottsag,
    Akaratero2: { nev: 'Adottság (Akaraterő) 2', kap: 2, tulajdonsag: TulajdonsagType.Akaratero } as Adottsag,

    Asztral1: { nev: 'Adottság (Asztrál) 1', kap: 1, tulajdonsag: TulajdonsagType.Asztral } as Adottsag,
    Asztral2: { nev: 'Adottság (Asztrál) 2', kap: 2, tulajdonsag: TulajdonsagType.Asztral } as Adottsag,
    Asztral3: { nev: 'Adottság (Asztrál) 3', kap: 3, tulajdonsag: TulajdonsagType.Asztral } as Adottsag,
    Asztral4: { nev: 'Adottság (Asztrál) 4', kap: 3, tulajdonsag: TulajdonsagType.Asztral } as Adottsag,

    Erzekeles1: { nev: 'Adottság (Érzékelés) 1', kap: 1, tulajdonsag: TulajdonsagType.Erzekeles } as Adottsag,
    Erzekeles2: { nev: 'Adottság (Érzékelés) 2', kap: 2, tulajdonsag: TulajdonsagType.Erzekeles } as Adottsag,
  },
};
