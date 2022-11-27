import { mapHatterek } from './components/hatter';
import { emptykarakter, InitKarakter, Karakter, KarakterMapperFn } from './components/model';
import { mapSzintlepesek } from './components/szintlepes';
import { TULAJDONSAG_MAPPERS } from './components/tulajdonsag';

export function createKarakter(init: InitKarakter): Karakter {
  let karakter: Karakter = {
    ...emptykarakter(),
    nev: init.nev,
    jellem: init.jellem ?? '',
    tulajdonsagok: init.tulajdonsagok,
  };

  const mappers: KarakterMapperFn[] = [
    ...mapHatterek(init.hatterek),
    ...mapSzintlepesek(init.szintlepesek),
    // TODO: kezdő KP = intelligencia kezelése KÉRDÉS: ez nő, ha az intelligencia stat nő?
    // TODO: erő sebzés bónusz
    // TODO: státusz mapper
    ...TULAJDONSAG_MAPPERS,
    // TODO: equipment mapper
  ];

  for (const mapper of mappers) {
    karakter = mapper(karakter);
  }

  return karakter;
}
