import { Sebzes, addSebzes, parseSebzes, substractSebzes } from './sebzes';

const UTK_TESZTESETEK: [string, Sebzes][] = [
  ['1k10', { 10: 1 }],
  ['1k10+1', { 10: 1, 1: 1 }],
  ['1k10+2', { 10: 1, 1: 2 }],
  ['1k6/2', { 3: 1 }],
  ['1k6/3', { 2: 1 }],
  ['1k6', { 6: 1 }],
  ['1k6+1', { 6: 1, 1: 1 }],
  ['1k6+2', { 6: 1, 1: 2 }],
  ['2k6', { 6: 2 }],
  ['2k6+1', { 6: 2, 1: 1 }],
  ['2k6+2', { 6: 2, 1: 2 }],
  ['2k6+3', { 6: 2, 1: 3 }],
  ['3k6', { 6: 3 }],
  ['3k6+1', { 6: 3, 1: 1 }],
  ['3k6+2', { 6: 3, 1: 2 }],
  ['4k6', { 6: 4 }],
  ['4k6+2', { 6: 4, 1: 2 }],
  ['5k6', { 6: 5 }],
  ['6k6', { 6: 6 }],
  ['8k6', { 6: 8 }],
];

const SAJAT_TESZTESETEK: [string, Sebzes][] = [
  // csak konstans
  ['1', { 1: 1 }],
  ['2', { 1: 2 }],
  ['-1', { 1: -1 }],
  ['-2', { 1: -2 }],
  // szóközök
  ['1k6 + 2', { 6: 1, 1: 2 }],
  // ismételt kocka típus
  ['2k10+1k6+2 + 2k10+2k6+4', { 10: 4, 6: 3, 1: 6 }],
  // kivonás
  ['9k10+8k6+7 -6k10 -4k6 -2', { 10: 3, 6: 4, 1: 5 }],
  // TODO: elhagyott kockaszám support
  // ['k6', { 6: 1 }],
];

test.each([...UTK_TESZTESETEK, ...SAJAT_TESZTESETEK])('Sebzés parser: "%s"', (sebzes, expected) => {
  const result = parseSebzes(sebzes);

  expect(result).toEqual(expected);
});

const OSSZEADAS_TESZTESETEK: [Sebzes, Sebzes, Sebzes][] = [
  [{ 10: 1 }, { 10: 2 }, { 10: 3 }],
  [
    { 10: 1, 1: 1 },
    { 6: 2, 1: 3 },
    { 10: 1, 6: 2, 1: 4 },
  ],
];

test.each(OSSZEADAS_TESZTESETEK)('Sebzés összeadás', (sebzes1, sebzes2, expected) => {
  const result = addSebzes(sebzes1, sebzes2);

  expect(result).toEqual(expected);
});

const KIVONAS_TESZTESETEK: [Sebzes, Sebzes, Sebzes][] = [
  [{ 10: 1 }, { 10: 2 }, { 10: -1 }],
  [
    { 10: 1, 1: 1 },
    { 6: 2, 1: 3 },
    { 10: 1, 6: -2, 1: -2 },
  ],
];

test.each(KIVONAS_TESZTESETEK)('Sebzés kivonás', (sebzes1, sebzes2, expected) => {
  const result = substractSebzes(sebzes1, sebzes2);

  expect(result).toEqual(expected);
});
