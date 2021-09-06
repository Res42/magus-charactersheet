// import { sum } from 'mathjs';
// import {
//   isAkarateroAdottsag,
//   isAllokepessegAdottsag,
//   isAsztralAdottsag,
//   isEgeszsegAdottsag,
//   isEroAdottsag,
//   isErzekelesAdottsag,
//   isGyorsasagAdottsag,
//   isIntelligenciaAdottsag,
//   isKarizmaAdottsag,
//   isUgyessegAdottsag,
// } from './components/adottsag';
// import { DEFAULT_KAP, DEFAULT_VE, MAX_TULAJDONSAG_PONT } from './constants';
// import { Faj, Fajok, isFaj } from './components/faj';
// import { ISzintlepes, Szintlepes } from './szintlepes';
// import { ITulajdonsagok } from './components/tulajdonsag';
// import { Hatter } from './components/hatter';

// export class Karakter {
//   private szintlepesek: Szintlepes[] = [];

//   constructor(public nev: string, public hatterek: Hatter[], private defaultTulajdonsagok: ITulajdonsagok) {
//     if (sum(Object.values(defaultTulajdonsagok)) !== MAX_TULAJDONSAG_PONT) {
//       console.warn('INIT.NEM_135_TULAJDONSAG_PONT');
//     }
//   }

//   get szintenkentiKap() {
//     return DEFAULT_KAP - sum(this.hatterek.map((h) => h.kap));
//   }

//   get szint() {
//     return this.szintlepesek.length;
//   }

//   get faj() {
//     return this.hatterek.filter(isFaj)[0] ?? Fajok.Ember;
//   }

//   get eroLimit() {
//     return this.faj.tulajdonsagLimitek.ero + sum(this.hatterek.filter(isEroAdottsag).map((a) => a.kap));
//   }

//   get ero() {
//     // TODO: statuszok, kepzettseg bonuszok
//     return this.defaultTulajdonsagok.ero + sum(this.hatterek.filter(isEroAdottsag).map((a) => a.kap));
//   }

//   get gyorsasagLimit() {
//     return this.faj.tulajdonsagLimitek.gyorsasag + sum(this.hatterek.filter(isGyorsasagAdottsag).map((a) => a.kap));
//   }

//   get gyorsasag() {
//     // TODO: statuszok, kepzettseg bonuszok
//     // NOTE: mivel az MGT negatív szám (vagy 0), ezért hozzáadni kell
//     return (
//       this.defaultTulajdonsagok.gyorsasag + sum(this.hatterek.filter(isGyorsasagAdottsag).map((a) => a.kap)) + this.mgt
//     );
//   }

//   get ugyessegLimit() {
//     return this.faj.tulajdonsagLimitek.ugyesseg + sum(this.hatterek.filter(isUgyessegAdottsag).map((a) => a.kap));
//   }

//   get ugyesseg() {
//     // TODO: statuszok, kepzettseg bonuszok
//     // NOTE: mivel az MGT negatív szám (vagy 0), ezért hozzáadni kell
//     return (
//       this.defaultTulajdonsagok.ugyesseg + sum(this.hatterek.filter(isUgyessegAdottsag).map((a) => a.kap)) + this.mgt
//     );
//   }

//   get allokepessegLimit() {
//     return (
//       this.faj.tulajdonsagLimitek.allokepesseg + sum(this.hatterek.filter(isAllokepessegAdottsag).map((a) => a.kap))
//     );
//   }

//   get allokepesseg() {
//     // TODO: statuszok, kepzettseg bonuszok
//     // NOTE: mivel az MGT negatív szám (vagy 0), ezért hozzáadni kell
//     return (
//       this.defaultTulajdonsagok.allokepesseg +
//       sum(this.hatterek.filter(isAllokepessegAdottsag).map((a) => a.kap)) +
//       this.mgt
//     );
//   }

//   get karizmaLimit() {
//     return this.faj.tulajdonsagLimitek.karizma + sum(this.hatterek.filter(isKarizmaAdottsag).map((a) => a.kap));
//   }

//   get karizma() {
//     // TODO: statuszok, kepzettseg bonuszok
//     return this.defaultTulajdonsagok.karizma + sum(this.hatterek.filter(isKarizmaAdottsag).map((a) => a.kap));
//   }

//   get egeszsegLimit() {
//     return this.faj.tulajdonsagLimitek.egeszseg + sum(this.hatterek.filter(isEgeszsegAdottsag).map((a) => a.kap));
//   }

//   get egeszseg() {
//     // TODO: statuszok, kepzettseg bonuszok
//     return this.defaultTulajdonsagok.egeszseg + sum(this.hatterek.filter(isEgeszsegAdottsag).map((a) => a.kap));
//   }

//   get intelligenciaLimit() {
//     return (
//       this.faj.tulajdonsagLimitek.intelligencia + sum(this.hatterek.filter(isIntelligenciaAdottsag).map((a) => a.kap))
//     );
//   }

//   get intelligencia() {
//     // TODO: statuszok, kepzettseg bonuszok
//     return (
//       this.defaultTulajdonsagok.intelligencia + sum(this.hatterek.filter(isIntelligenciaAdottsag).map((a) => a.kap))
//     );
//   }

//   get akarateroLimit() {
//     return this.faj.tulajdonsagLimitek.akaratero + sum(this.hatterek.filter(isAkarateroAdottsag).map((a) => a.kap));
//   }

//   get akaratero() {
//     // TODO: statuszok, kepzettseg bonuszok
//     return this.defaultTulajdonsagok.akaratero + sum(this.hatterek.filter(isAkarateroAdottsag).map((a) => a.kap));
//   }

//   get asztralLimit() {
//     return this.faj.tulajdonsagLimitek.asztral + sum(this.hatterek.filter(isAsztralAdottsag).map((a) => a.kap));
//   }

//   get asztral() {
//     // TODO: statuszok, kepzettseg bonuszok
//     return this.defaultTulajdonsagok.asztral + sum(this.hatterek.filter(isAsztralAdottsag).map((a) => a.kap));
//   }

//   get erzekelesLimit() {
//     return this.faj.tulajdonsagLimitek.erzekeles + sum(this.hatterek.filter(isErzekelesAdottsag).map((a) => a.kap));
//   }

//   get erzekeles() {
//     // TODO: statuszok, kepzettseg bonuszok
//     return this.defaultTulajdonsagok.erzekeles + sum(this.hatterek.filter(isErzekelesAdottsag).map((a) => a.kap));
//   }

//   get maxEp() {
//     return this.egeszseg;
//   }

//   get maxFp() {
//     return this.allokepesseg + this.akaratero + sum(this.szintlepesek.map((sz) => sz.fp));
//   }

//   get maxKegy() {
//     return sum(this.szintlepesek.map((sz) => sz.kegy));
//   }

//   get maxPszi() {
//     return this.intelligencia + sum(this.szintlepesek.map((sz) => sz.pszi));
//   }

//   get ke() {
//     // TODO: statuszok, fegyverek
//     return this.gyorsasag + this.erzekeles + sum(this.szintlepesek.map((sz) => sz.ke));
//   }

//   get te() {
//     // TODO: statuszok, fegyverek
//     return this.ero + this.gyorsasag + this.ugyesseg + sum(this.szintlepesek.map((sz) => sz.te));
//   }

//   get ve() {
//     // TODO: statuszok, fegyverek, pancel
//     return DEFAULT_VE + this.gyorsasag + this.ugyesseg + sum(this.szintlepesek.map((sz) => sz.ve));
//   }

//   get ce() {
//     // TODO: statuszok, fegyverek
//     return this.ugyesseg + this.gyorsasag + sum(this.szintlepesek.map((sz) => sz.ce));
//   }

//   get mgt() {
//     // TODO: implement
//     return 0;
//   }

//   get sfe() {
//     // TODO: implement
//     return 0;
//   }

//   szintlepes(szint: ISzintlepes, force = false) {
//     const actualSzintlepes = new Szintlepes(szint);

//     if (!force && actualSzintlepes.kapOfSzintlepes !== this.szintenkentiKap) {
//       throw new Error('SZINTLEPES.NEM_EGYEZO_KAP');
//     }

//     this.szintlepesek.push(actualSzintlepes);
//   }
// }
