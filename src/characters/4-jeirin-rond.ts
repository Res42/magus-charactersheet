import { prettyPrint } from '../display/pretty-print';
import { Fajok } from '../core/data/fajok';
import { Iskolak } from '../core/data/iskolak';
import { Hatterek } from '../core/data/hatterek';
import { createKarakter } from '../core/karakter2';

const jeirin2 = createKarakter({
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
});
// első szint
// jeirin.szintlepes({});

console.log(prettyPrint(jeirin2));
