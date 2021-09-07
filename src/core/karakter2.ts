import { InitKarakter, Karakter, emptykarakter } from './components/model';
import { TULAJDONSAG_MAPPERS } from './components/tulajdonsag';
import { mapHatterek } from './components/hatter';

export function createKarakter(init: InitKarakter): Karakter {
  let karakter: Karakter = { ...emptykarakter(), nev: init.nev, tulajdonsagok: init.tulajdonsagok };

  const mappers = [
    ...mapHatterek(init.hatterek),
    // TODO: szintlépés mapper
    // TODO: státusz mapper
    ...TULAJDONSAG_MAPPERS,
    // TODO: equipment mapper
  ];

  for (const mapper of mappers) {
    karakter = mapper(karakter);
  }

  return karakter;
}
