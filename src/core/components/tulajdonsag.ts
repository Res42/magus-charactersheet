export const MAX_TULAJDONSAG = 135;

export enum TulajdonsagType {
  Ero,
  Gyorsasag,
  Ugyesseg,
  Allokepesseg,
  Karizma,
  Egeszseg,
  Intelligencia,
  Akaratero,
  Asztral,
  Erzekeles,
}

export interface ITulajdonsagok {
  ero: number;
  gyorsasag: number;
  ugyesseg: number;
  allokepesseg: number;
  karizma: number;
  egeszseg: number;
  intelligencia: number;
  akaratero: number;
  asztral: number;
  erzekeles: number;
}
