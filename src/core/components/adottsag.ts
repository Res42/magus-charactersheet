import { Hatter } from './hatter';
import { TulajdonsagType } from './tulajdonsag';

export class Adottsag extends Hatter {
  protected constructor(nev: string, kap: number, public tulajdonsag: TulajdonsagType) {
    super(nev, kap);
  }
}

export function isAdottsag(hatter: Hatter): hatter is Adottsag {
  return hatter instanceof Adottsag;
}

export function isEroAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Ero } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Ero;
}

export function isGyorsasagAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Gyorsasag } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Gyorsasag;
}

export function isUgyessegAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Ugyesseg } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Ugyesseg;
}

export function isAllokepessegAdottsag(
  hatter: Hatter
): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Allokepesseg } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Allokepesseg;
}

export function isKarizmaAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Karizma } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Karizma;
}

export function isEgeszsegAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Egeszseg } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Egeszseg;
}

export function isIntelligenciaAdottsag(
  hatter: Hatter
): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Intelligencia } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Intelligencia;
}

export function isAkarateroAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Akaratero } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Akaratero;
}

export function isAsztralAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Asztral } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Asztral;
}

export function isErzekelesAdottsag(hatter: Hatter): hatter is Adottsag & { tulajdonsag: TulajdonsagType.Erzekeles } {
  return isAdottsag(hatter) && hatter.tulajdonsag === TulajdonsagType.Erzekeles;
}
