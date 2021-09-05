import { Karakter } from '../core/karakter';
import { prettyPrint } from '../display/pretty-print';
import { Faj } from '../core/components/faj';
import { Iskola } from '../core/components/iskola';
import { Hatter } from '../core/components/hatter';

const jeirin = new Karakter(
  'Jeirin Rond',
  [Faj.Ember, Iskola.Tolvaj.Besurrano, Hatter.PSZI_ERZEKENYSEG, Hatter.MANALATO_2, Hatter.VAGYON_1],
  {
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
  }
);
// első szint
// jeirin.szintlepes({});

console.log(prettyPrint(jeirin));
