import { mapHatterek } from './mappers/hatter.mapper';
import { mapSzintlepesek } from './mappers/szintlepes.mapper';
import { TULAJDONSAG_MAPPERS } from './mappers/tulajdonsag.mapper';
import { emptykarakter, InitKarakter, Karakter, KarakterMapperFn } from './models/karakter';

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
