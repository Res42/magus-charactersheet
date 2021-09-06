import { MAX_TULAJDONSAG_SZINT } from '../constants';
import { KarakterMapper } from '../karakter2';
import { TulajdonsagType } from './tulajdonsag';

export interface Adottsag {
  nev: string;
  kap: number;
  tulajdonsag: TulajdonsagType;
}

export function mapAdottsag(adottsag: Adottsag): KarakterMapper {
  return (karakter) => ({
    ...karakter,
    hatterek: [...karakter.hatterek, adottsag.nev],
    szintenkentiKap: karakter.szintenkentiKap - adottsag.kap,
    tulajdonsagLimitek: {
      ...karakter.tulajdonsagLimitek,
      [adottsag.tulajdonsag]: Math.max(
        karakter.tulajdonsagLimitek[adottsag.tulajdonsag] + adottsag.kap,
        MAX_TULAJDONSAG_SZINT
      ),
    },
  });
}
