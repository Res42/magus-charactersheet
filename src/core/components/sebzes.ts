import {
  Parser,
  Token,
  alt,
  apply,
  buildLexer,
  expectEOF,
  expectSingleResult,
  opt,
  rep_sc,
  seq,
  tok,
} from 'typescript-parsec';
import { mergeWith } from '../utils';

/**
 * Kockadobásos sebzés típus.
 * A property név a kocka oldalszáma, az érték a dobott kockák száma.
 * A konstansokat az 1 oldalú kocka ábrázolja.
 */
export interface Sebzes {
  [sides: number]: number;
}

enum TokenKind {
  Integer,
  Add,
  Sub,
  Div,
  Dice,
  Space,
}

const lexer = buildLexer([
  [true, /^\d+/g, TokenKind.Integer],
  [true, /^\+/g, TokenKind.Add],
  [true, /^-/g, TokenKind.Sub],
  [true, /^\//g, TokenKind.Div],
  [true, /^[kKdD]/g, TokenKind.Dice],
  [false, /^\s+/g, TokenKind.Space],
]);

function applyNumber(value: Token<TokenKind.Integer>): number {
  return +value.text;
}

function applyUnary([token, num]: [Token<TokenKind> | undefined, number]): number {
  if (token == null) {
    return +num;
  }

  switch (token.text) {
    case '+':
      return +num;
    case '-':
      return -num;
    default:
      throw new Error(`Unknown unary operator: ${token.text}`);
  }
}

function applyBinary([first, token, second]: [number, Token<TokenKind>, number]): number {
  switch (token.text) {
    case '/':
      return first / second;
    default:
      throw new Error(`Unknown binary operator: ${token.text}`);
  }
}

function applyConstant(dices: number): Sebzes {
  return { 1: dices };
}

function applyDice([dices, , sides]: [number, Token<TokenKind>, number]): Sebzes {
  return { [sides]: dices };
}

function applySebzesList(sebzesek: Sebzes[]): Sebzes {
  return sebzesek.reduce((sum, curr) => mergeWith(sum, curr, (d1, d2) => (d1 ?? 0) + (d2 ?? 0)), {});
}

/**
 * `INTEGER`
 *   - `('+' | '-' | nil) int`
 */
const INTEGER: Parser<TokenKind, number> = apply(
  seq(opt(alt(tok(TokenKind.Add), tok(TokenKind.Sub))), apply(tok(TokenKind.Integer), applyNumber)),
  applyUnary
);
/**
 * `SIDES`
 * - `INTEGER '/' INTEGER`
 * - `INTEGER`
 */
const SIDES: Parser<TokenKind, number> = alt(apply(seq(INTEGER, tok(TokenKind.Div), INTEGER), applyBinary), INTEGER);

/**
 * `EXPRESSION`
 *   - `INTEGER DICE SIDES`
 *   - `INTEGER`
 */
const EXPRESSION: Parser<TokenKind, Sebzes> = alt(
  apply(seq(INTEGER, tok(TokenKind.Dice), SIDES), applyDice),
  apply(INTEGER, applyConstant)
);

const SUM_EXPRESSION: Parser<TokenKind, Sebzes> = apply(rep_sc(EXPRESSION), applySebzesList);

export function parseSebzes(sebzes: string): Sebzes {
  return expectSingleResult(expectEOF(SUM_EXPRESSION.parse(lexer.parse(sebzes))));
}
