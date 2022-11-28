import { Karakter, MAX_TULAJDONSAG_SZINT } from './karakter';

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

export function tulajdonsagLimitNoveles(karakter: Karakter, tulajdonsag: TulajdonsagType, noveles: number): number {
  return Math.min(karakter.tulajdonsagLimitek[tulajdonsag] + noveles, MAX_TULAJDONSAG_SZINT);
}

export function tulajdonsagNoveles(karakter: Karakter, tulajdonsag: TulajdonsagType, noveles: number): number {
  return Math.min(karakter.tulajdonsagok[tulajdonsag] + noveles, karakter.tulajdonsagLimitek[tulajdonsag]);
}
