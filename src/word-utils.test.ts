import { describe, expect, test } from 'vitest';
import { computeGuess, isValidWord, LetterState } from './word-utils';

describe('computeGuess', () => {
  test('works with match and presents', () => {
    expect(computeGuess('boost', 'basic')).toEqual([
      LetterState.Match,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Present,
      LetterState.Miss,
    ]);
  });

  test('full match', () => {
    expect(computeGuess('boost', 'boost')).toEqual([
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
    ]);
  });

  test('full miss', () => {
    expect(computeGuess('guard', 'boost')).toEqual([
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
    ]);
  });

  test('only does one match when two letters exist', () => {
    expect(computeGuess('solid', 'boost')).toEqual([
      LetterState.Present,
      LetterState.Match,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
    ]);
  });

  test('returns empty array when given incomplete guess', () => {
    expect(computeGuess('so', 'boost')).toEqual([]);
  });

  test('when 2 letters are present but answer has only 1 of those letters', () => {
    expect(computeGuess('allol', 'smelt')).toEqual([
      LetterState.Miss,
      LetterState.Present,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
    ]);
  });

  test('when 1 letter matches but guess has more of the same letter', () => {
    expect(computeGuess('allol', 'colon')).toEqual([
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Match,
      LetterState.Match,
      LetterState.Miss,
    ]);
  });
});

describe('isValidWord', () => {
  test('with valid word', () => {
    expect(isValidWord('boost')).toBe(true);
  });

  test('with invalid word', () => {
    expect(isValidWord('lulze')).toBe(false);
  });
});
