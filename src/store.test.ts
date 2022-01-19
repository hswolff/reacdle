import { describe, expect, test } from 'vitest';
import { useStore, NUMBER_OF_GUESSES, WORD_LENGTH } from './store';
import { LetterState } from './word-utils';

describe('keyboardLetterState', () => {
  test('new game resets keyboardLetterState', () => {
    useStore.getState().newGame();
    expect(useStore.getState().keyboardLetterState).toEqual({});
  });

  test('computes keyboardLetterState correctly', () => {
    useStore.getState().newGame();
    const answer = 'score';
    useStore.setState({ answer });

    useStore.getState().addGuess('since');
    expect(useStore.getState().keyboardLetterState).toEqual({
      s: LetterState.Match,
      i: LetterState.Miss,
      n: LetterState.Miss,
      c: LetterState.Present,
      e: LetterState.Match,
    });

    useStore.getState().addGuess('enter');
    expect(useStore.getState().keyboardLetterState).toEqual({
      s: LetterState.Match,
      i: LetterState.Miss,
      n: LetterState.Miss,
      r: LetterState.Present, // new
      c: LetterState.Present,
      e: LetterState.Match,
      t: LetterState.Miss, // new
    });

    useStore.getState().addGuess('waste');
    expect(useStore.getState().keyboardLetterState).toEqual({
      a: LetterState.Miss,
      s: LetterState.Match, // check that this didn't change
      i: LetterState.Miss,
      n: LetterState.Miss,
      r: LetterState.Present,
      c: LetterState.Present,
      e: LetterState.Match,
      t: LetterState.Miss,
      w: LetterState.Miss, // new
    });

    useStore.getState().addGuess('rival');
    expect(useStore.getState().keyboardLetterState).toEqual({
      a: LetterState.Miss,
      s: LetterState.Match,
      i: LetterState.Miss,
      l: LetterState.Miss, // new
      n: LetterState.Miss,
      r: LetterState.Present, // check that this didn't change
      c: LetterState.Present,
      e: LetterState.Match,
      t: LetterState.Miss,
      v: LetterState.Miss, // new
      w: LetterState.Miss,
    });
  });
});
