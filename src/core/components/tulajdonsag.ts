import { Karakter, KarakterMapperFn, MAX_TULAJDONSAG_SZINT } from './model';

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

export type Tulajdonsagok = Record<TulajdonsagType, number>;

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
  });
}

function mapIntelligencia(): KarakterMapperFn {
  return (karakter) => ({
    ...karakter,
    // TODO: csak akkor, ha megvan a Pszi érzékenység háttér
    maxPszi: karakter.maxPszi + karakter.tulajdonsagok.intelligencia,
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
  mapErzekeles(),
];

export function tulajdonsagLimitNoveles(karakter: Karakter, tulajdonsag: TulajdonsagType, noveles: number): number {
  return Math.min(karakter.tulajdonsagLimitek[tulajdonsag] + noveles, MAX_TULAJDONSAG_SZINT);
}

export function tulajdonsagNoveles(
  karakter: Karakter,
  tulajdonsag: TulajdonsagType,
  noveles: number,
  tulajdonsagLimit?: number
): number {
  return Math.min(
    karakter.tulajdonsagok[tulajdonsag] + noveles,
    tulajdonsagLimit ?? karakter.tulajdonsagLimitek[tulajdonsag]
  );
}
