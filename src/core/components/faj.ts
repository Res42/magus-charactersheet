import { Hatter } from './hatter';
import { ITulajdonsagok } from './tulajdonsag';

export class Faj extends Hatter {
  protected constructor(nev: string, kap: number, public readonly tulajdonsagLimitek: ITulajdonsagok) {
    super(nev, kap);
  }

  static Ember = new Faj('Ember', 0, {
    ero: 18,
    gyorsasag: 18,
    ugyesseg: 18,
    allokepesseg: 18,
    egeszseg: 18,
    karizma: 18,
    intelligencia: 18,
    akaratero: 18,
    asztral: 18,
    erzekeles: 18,
  });

  static Elf = new Faj('Elf', 1, {
    ero: 16,
    gyorsasag: 20,
    ugyesseg: 18,
    allokepesseg: 16,
    egeszseg: 18,
    karizma: 20,
    intelligencia: 18,
    akaratero: 18,
    asztral: 18,
    erzekeles: 20,
  });

  static Felelf = new Faj('Félelf', 1, {
    ero: 17,
    gyorsasag: 19,
    ugyesseg: 18,
    allokepesseg: 17,
    egeszseg: 18,
    karizma: 19,
    intelligencia: 18,
    akaratero: 18,
    asztral: 18,
    erzekeles: 19,
  });

  static UdvariOrk = new Faj('Udvari ork', 1, {
    ero: 20,
    gyorsasag: 18,
    ugyesseg: 18,
    allokepesseg: 20,
    egeszseg: 20,
    karizma: 16,
    intelligencia: 16,
    akaratero: 18,
    asztral: 16,
    erzekeles: 18,
  });

  static Torpe = new Faj('Törpe', 1, {
    ero: 19,
    gyorsasag: 18,
    ugyesseg: 18,
    allokepesseg: 19,
    egeszseg: 19,
    karizma: 17,
    intelligencia: 17,
    akaratero: 18,
    asztral: 17,
    erzekeles: 18,
  });

  static KyrSzarmazek = new Faj('Kyr származék', 1, {
    ero: 17,
    gyorsasag: 18,
    ugyesseg: 18,
    allokepesseg: 17,
    egeszseg: 17,
    karizma: 19,
    intelligencia: 19,
    akaratero: 18,
    asztral: 19,
    erzekeles: 18,
  });
}

export function isFaj(hatter: Hatter): hatter is Faj {
  return hatter instanceof Faj;
}
