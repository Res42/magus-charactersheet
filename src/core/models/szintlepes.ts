import { Kepzettseg } from './kepzettseg';
import { Tulajdonsagok, TulajdonsagType } from './tulajdonsag';

export interface Szintlepes extends Partial<Tulajdonsagok> {
  mana?: number;
  kegy?: number;
  ke?: number;
  ce?: number;
  te?: number;
  ve?: number;
  fp?: number;
  pszi?: number;
  kepzettsegek?: KepzettsegSzintlepes[];
}

export interface KepzettsegSzintlepes {
  kepzettseg: Kepzettseg;
  kp: number;
  /** 4-es szintre lépéskor vagy 80% elérése esetén kap a karakter egy extra tulajdonság pontot. */
  tulajdonsag?: TulajdonsagType;
}

export interface KepzettsegSzintlepesResult {
  ujSzint: number;
  shouldAddTulajdonsag: boolean;
}

export function getKapOfSzintlepes(szintlepes: Szintlepes): number {
  return (
    (szintlepes.mana ?? 0) * 3 +
    (szintlepes.kegy ?? 0) * 3 +
    (szintlepes.ke ?? 0) * 2 +
    (szintlepes.ce ?? 0) * 2 +
    (szintlepes.te ?? 0) * 2 +
    (szintlepes.ve ?? 0) * 2 +
    (szintlepes.fp ?? 0) +
    (szintlepes.pszi ?? 0) * 2 +
    (szintlepes.kepzettsegek ?? []).map((k) => k.kp).reduce((sum, kp) => sum + kp, 0) +
    (szintlepes.ero ?? 0) * 20 +
    (szintlepes.gyorsasag ?? 0) * 20 +
    (szintlepes.ugyesseg ?? 0) * 20 +
    (szintlepes.allokepesseg ?? 0) * 20 +
    (szintlepes.karizma ?? 0) * 20 +
    (szintlepes.egeszseg ?? 0) * 20 +
    (szintlepes.intelligencia ?? 0) * 20 +
    (szintlepes.akaratero ?? 0) * 20 +
    (szintlepes.asztral ?? 0) * 20 +
    (szintlepes.erzekeles ?? 0) * 20
  );
}
