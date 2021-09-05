import { sum } from 'mathjs';
import { KepzettsegType } from './components/kepzettseg';
import { ITulajdonsagok } from './components/tulajdonsag';

export interface ISzintlepes {
  mana?: number;
  kegy?: number;
  ke?: number;
  ce?: number;
  te?: number;
  ve?: number;
  fp?: number;
  pszi?: number;
  kepzettsegek?: IKepzettsegLepes[];
}

export interface IKepzettsegLepes {
  kepzettseg: KepzettsegType;
  szint?: number;
  szazalek?: number;
  kp: number;
  tulajdonsag?: Partial<ITulajdonsagok>;
}

export class Szintlepes {
  mana: number;
  kegy: number;
  ke: number;
  ce: number;
  te: number;
  ve: number;
  fp: number;
  pszi: number;
  kepzettsegek: IKepzettsegLepes[];

  get kapOfSzintlepes() {
    return (
      this.mana * 3 +
      this.kegy * 3 +
      this.ke * 2 +
      this.ce * 2 +
      this.te * 2 +
      this.ve * 2 +
      this.fp +
      this.pszi * 2 +
      sum(this.kepzettsegek.map((k) => k.kp))
    );
  }

  constructor(init: ISzintlepes) {
    this.mana = init.mana ?? 0;
    this.kegy = init.kegy ?? 0;
    this.ke = init.ke ?? 0;
    this.ce = init.ce ?? 0;
    this.te = init.te ?? 0;
    this.ve = init.ve ?? 0;
    this.fp = init.fp ?? 0;
    this.pszi = init.pszi ?? 0;
    this.kepzettsegek = init.kepzettsegek ?? [];
  }
}
