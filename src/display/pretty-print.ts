import columnify from 'columnify';
import { Karakter } from '../core/karakter';

export function prettyPrint(karakter: Karakter): string {
  const alapadatok = columnify(
    [
      ['Név', karakter.nev],
      ['Faj', karakter.faj.nev],
      ['Szint', karakter.szint],
      ['Szintenkénti KAP', karakter.szintenkentiKap],
    ],
    { columnSplitter: ' | ', showHeaders: false }
  );

  const tulajdosagok = columnify(
    [
      ['Erő', karakter.ero],
      ['Gyorsaság', karakter.gyorsasag],
      ['Ügyesség', karakter.ugyesseg],
      ['Állóképesség', karakter.allokepesseg],
      ['Karizma', karakter.karizma],
      ['Egészség', karakter.egeszseg],
      ['Intelligencia', karakter.intelligencia],
      ['Akaraterő', karakter.akaratero],
      ['Asztrál', karakter.asztral],
      ['Érzékelés', karakter.erzekeles],
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
