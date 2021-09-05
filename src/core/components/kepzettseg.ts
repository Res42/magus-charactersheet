export enum KepzettsegType {
  Fegyverhasznalat,
  AlcazasAlruha,
  Mechanika,
  SzamtanMertan,
  Ertekbecsles,
  Orvtamadas,
  Jelbeszed,
  Szabadulomuveszet,
  Csomozas,
  Lelektan,
  Rejtekhelykutatas,
  Zarnyitas,
  Zsebmetszes,
  Lopodzas,
  Rejtozes,
  Maszas,
  Eses,
  Akrobatika,
  Csapdakereses,
  Veszelyerzek,
}

export class Kepzettseg {
  protected constructor(public nev: string) {}
}
