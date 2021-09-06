import columnify from 'columnify';
import { IKarakter } from '../core/karakter2';

export function prettyPrint(karakter: IKarakter): string {
  const alapadatok = columnify(
    [
      ['Név', karakter.nev],
      ['Faj', karakter.faj],
      ['Szint', karakter.szint],
      ['Szintenkénti KAP', karakter.szintenkentiKap],
    ],
    { columnSplitter: ' | ', showHeaders: false }
  );

  const tulajdosagok = columnify(
    [
      ['Erő', karakter.tulajdonsagok.ero],
      ['Gyorsaság', karakter.tulajdonsagok.gyorsasag],
      ['Ügyesség', karakter.tulajdonsagok.ugyesseg],
      ['Állóképesség', karakter.tulajdonsagok.allokepesseg],
      ['Karizma', karakter.tulajdonsagok.karizma],
      ['Egészség', karakter.tulajdonsagok.egeszseg],
      ['Intelligencia', karakter.tulajdonsagok.intelligencia],
      ['Akaraterő', karakter.tulajdonsagok.akaratero],
      ['Asztrál', karakter.tulajdonsagok.asztral],
      ['Érzékelés', karakter.tulajdonsagok.erzekeles],
    ],
    { columnSplitter: ' | ', showHeaders: false, config: { 1: { align: 'right' } } }
  );

  const harcertekek = columnify(
    [
      ['KÉ', karakter.ke],
      ['TÉ', karakter.te],
      ['CÉ', karakter.ce],
      ['VÉ', karakter.ve],
    ],
    {
      columnSplitter: ' | ',
      showHeaders: false,
      config: { 1: { align: 'right' } },
    }
  );

  return `MAGUS UTK KARAKTERLAP

ALAPADATOK
${alapadatok}

TULAJDONSÁGOK
${tulajdosagok}

HARCÉRTÉKEK
${harcertekek}`;
}
