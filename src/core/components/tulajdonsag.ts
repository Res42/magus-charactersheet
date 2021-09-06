import { KarakterMapper } from '../karakter2';

export enum TulajdonsagType {
  Ero = 'ero',
  Gyorsasag = 'gyorsasag',
  Ugyesseg = 'ugyesseg',
  Allokepesseg = 'allokepesseg',
  Karizma = 'karizma',
  Egeszseg = 'egeszseg',
  Intelligencia = 'intelligencia',
  Akaratero = 'akaratero',
  Asztral = 'asztral',
  Erzekeles = 'erzekeles',
}

export type ITulajdonsagok = Record<TulajdonsagType, number>;

export function mapEro(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    te: karakter.te + karakter.tulajdonsagok.ero,
  });
}

export function mapGyorsasag(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    ke: karakter.ke + karakter.tulajdonsagok.gyorsasag,
    te: karakter.te + karakter.tulajdonsagok.gyorsasag,
    ve: karakter.ve + karakter.tulajdonsagok.gyorsasag,
    ce: karakter.ce + karakter.tulajdonsagok.gyorsasag,
  });
}

export function mapUgyesseg(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    te: karakter.te + karakter.tulajdonsagok.ugyesseg,
    ve: karakter.ve + karakter.tulajdonsagok.ugyesseg,
    ce: karakter.ce + karakter.tulajdonsagok.ugyesseg,
  });
}

export function mapAllokepesseg(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    maxFp: karakter.maxFp + karakter.tulajdonsagok.allokepesseg,
  });
}

export function mapEgeszseg(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    maxEp: karakter.maxEp + karakter.tulajdonsagok.egeszseg,
  });
}

export function mapAkaratero(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    maxFp: karakter.maxFp + karakter.tulajdonsagok.akaratero,
  });
}

export function mapIntelligencia(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    maxPszi: karakter.maxPszi + karakter.tulajdonsagok.intelligencia,
  });
}

export function mapErzekeles(): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    ke: karakter.maxPszi + karakter.tulajdonsagok.erzekeles,
  });
}

export const TULAJDONSAG_MAPPERS: KarakterMapper[] = [
  mapEro(),
  mapGyorsasag(),
  mapUgyesseg(),
  mapAllokepesseg(),
  mapEgeszseg(),
  mapAkaratero(),
  mapIntelligencia(),
  mapErzekeles(),
];
