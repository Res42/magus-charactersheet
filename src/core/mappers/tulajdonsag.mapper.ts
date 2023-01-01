import { psziErzekenyseg } from '../data/hatterek';
import { KarakterMapperFn } from '../models/karakter';

function mapEro(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    te: karakter.te + karakter.tulajdonsagok.ero,
  });
}

function mapGyorsasag(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    ke: karakter.ke + karakter.tulajdonsagok.gyorsasag,
    te: karakter.te + karakter.tulajdonsagok.gyorsasag,
    ve: karakter.ve + karakter.tulajdonsagok.gyorsasag,
    ce: karakter.ce + karakter.tulajdonsagok.gyorsasag,
  });
}

function mapUgyesseg(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    te: karakter.te + karakter.tulajdonsagok.ugyesseg,
    ve: karakter.ve + karakter.tulajdonsagok.ugyesseg,
    ce: karakter.ce + karakter.tulajdonsagok.ugyesseg,
  });
}

function mapAllokepesseg(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    maxFp: karakter.maxFp + karakter.tulajdonsagok.allokepesseg,
  });
}

function mapEgeszseg(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    maxEp: karakter.maxEp + karakter.tulajdonsagok.egeszseg,
  });
}

function mapAkaratero(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    maxFp: karakter.maxFp + karakter.tulajdonsagok.akaratero,
    mentalTME: karakter.mentalTME + karakter.tulajdonsagok.akaratero,
  });
}

function mapAsztral(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    asztralTME: karakter.asztralTME + karakter.tulajdonsagok.asztral,
  });
}

function mapIntelligencia(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    maxPszi:
      karakter.maxPszi +
      (Object.keys(karakter.hatterek).includes(psziErzekenyseg.nev) ? karakter.tulajdonsagok.intelligencia : 0),
  });
}

function mapErzekeles(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    ke: karakter.ke + karakter.tulajdonsagok.erzekeles,
  });
}

export const TULAJDONSAG_MAPPERS: KarakterMapperFn[] = [
  mapEro(),
  mapGyorsasag(),
  mapUgyesseg(),
  mapAllokepesseg(),
  mapEgeszseg(),
  mapAkaratero(),
  mapIntelligencia(),
  mapAsztral(),
  mapErzekeles(),
];
