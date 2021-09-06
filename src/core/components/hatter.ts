import { KarakterMapper } from '../karakter2';

export interface Hatter {
  nev: string;
  kap: number;
}

export function mapHatter(hatter: Hatter): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    hatterek: [...karakter.hatterek, hatter.nev],
    szintenkentiKap: karakter.szintenkentiKap - hatter.kap,
  });
}

export const Hatterek = {
  HoltakSzeme: { nev: 'Holtak szeme', kap: 1 } as Hatter,
  Kegyelt: { nev: 'Kegyelt', kap: 1 } as Hatter,
  Leleklenyomat: { nev: 'Léleklenyomat', kap: 1 } as Hatter,
  Magiatagadas1: { nev: 'Mágiatagadás', kap: 1 } as Hatter,
  Magiatagadas2: { nev: 'Mágiatagadás', kap: 2 } as Hatter,
  Magiatagadas3: { nev: 'Mágiatagadás', kap: 3 } as Hatter,
  Magiatagadas4: { nev: 'Mágiatagadás', kap: 4 } as Hatter,
  Magiatagadas5: { nev: 'Mágiatagadás', kap: 5 } as Hatter,
  MagikusFogekonysag: { nev: 'Mágikus fogékonyság', kap: 1 } as Hatter,
  Manalato2: { nev: 'Manalátó', kap: 2 } as Hatter,
  Manalato3: { nev: 'Manalátó', kap: 3 } as Hatter,
  Muvesztehetseg: { nev: 'Művésztehetség', kap: 1 } as Hatter,
  NemesiVer: { nev: 'Nemesi vér', kap: 1 } as Hatter,
  PsziErzekenyseg: { nev: 'Pszi érzékenység', kap: 1 } as Hatter,
  Rang1: { nev: 'Rang', kap: 1 } as Hatter,
  Rang2: { nev: 'Rang', kap: 2 } as Hatter,
  Rang3: { nev: 'Rang', kap: 3 } as Hatter,
  Sugallat: { nev: 'Sugallat', kap: 1 } as Hatter,
  SzellemekJoindulata1: { nev: 'Szellemek jóindulata', kap: 1 } as Hatter,
  SzellemekJoindulata2: { nev: 'Szellemek jóindulata', kap: 2 } as Hatter,
  SzellemekJoindulata3: { nev: 'Szellemek jóindulata', kap: 3 } as Hatter,
  Vagyon1: { nev: 'Vagyon', kap: 1 } as Hatter,
  Vagyon2: { nev: 'Vagyon', kap: 2 } as Hatter,
  Vagyon3: { nev: 'Vagyon', kap: 3 } as Hatter,
};
