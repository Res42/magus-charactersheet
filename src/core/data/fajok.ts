import { Faj } from '../models/hatter';
import { alkepzettsegNev, KepzettsegType, SZOCIALIS_KEPZETTSEG_TYPES } from '../models/kepzettseg';

export const ember: Faj = {
  nev: 'ember',
  kap: 0,
  tulajdonsagLimitek: {
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
  },
};

export const elf: Faj = {
  nev: 'elf',
  kap: 1,
  tulajdonsagLimitek: {
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
  },
  ce: 10,
  oktatasok: {
    [KepzettsegType.Allatismeret]: 2,
    [KepzettsegType.Idomitas]: 2,
    [alkepzettsegNev(KepzettsegType.Vadonjaras, 'erdő')]: 2,
    [KepzettsegType.Lovaglas]: 2,
  },
};

export const felelf: Faj = {
  nev: 'félelf',
  kap: 1,
  tulajdonsagLimitek: {
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
  },
  ce: 5,
  oktatasok: {
    [KepzettsegType.Allatismeret]: 1,
    [KepzettsegType.Idomitas]: 1,
    [alkepzettsegNev(KepzettsegType.Vadonjaras, 'erdő')]: 1,
    [KepzettsegType.Lovaglas]: 1,
  },
};

export const udvariOrk: Faj = {
  nev: 'udvari ork',
  kap: 1,
  tulajdonsagLimitek: {
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
  },
};

export const torpe: Faj = {
  nev: 'törpe',
  kap: 1,
  tulajdonsagLimitek: {
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
  },
  oktatasok: {
    [KepzettsegType.Epiteszet]: 2,
    [KepzettsegType.Terkepeszet]: 2,
    [KepzettsegType.Mechanika]: 2,
    [alkepzettsegNev(KepzettsegType.Muveszetek, 'szobrászat')]: 2,
    [KepzettsegType.Szakma]: 2,
  },
};

export const kyrSzarmazek: Faj = {
  nev: 'kyr származék',
  kap: 1,
  tulajdonsagLimitek: {
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
  },
  oktatasok: Object.fromEntries(SZOCIALIS_KEPZETTSEG_TYPES.map((kepzettsegType) => [kepzettsegType, 2])),
};
