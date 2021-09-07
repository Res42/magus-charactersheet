import { InitKarakter, Karakter, KarakterMapperFn, emptykarakter } from './components/model';
import { TULAJDONSAG_MAPPERS } from './components/tulajdonsag';
import { mapHatterek } from './components/hatter';
import { mapSzintlepesek } from './components/szintlepes';

export function createKarakter(init: InitKarakter): Karakter {
  let karakter: Karakter = { ...emptykarakter(), nev: init.nev, jellem: init.jellem ?? '', tulajdonsagok: init.tulajdonsagok };

  const mappers: KarakterMapperFn[] = [
    ...mapHatterek(init.hatterek),
    ...mapSzintlepesek(init.szintlepesek),
    // TODO: saját nyelv, kultúra, helyismeret
    // TODO: kezdő KP = intelligencia kezelése KÉRDÉS: ez nő, ha az intelligencia stat nő?
    // TODO: erő sebzés bónusz
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
