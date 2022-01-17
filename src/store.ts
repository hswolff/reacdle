import create from 'zustand';
import { persist } from 'zustand/middleware';
import { computeGuess, getRandomWord, LetterState } from './word-utils';

interface GuessRow {
  guess: string;
  result?: LetterState[];
}

interface StoreState {
  answer: string;
  rows: GuessRow[];
  addGuess(guess: string): void;
  newGame(initialGuess?: string[]): void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => {
      const addGuess = (guess: string) =>
        set({
          rows: get().rows.concat({
            guess,
            result: computeGuess(guess, get().answer),
          }),
        });

      return {
        answer: getRandomWord(),
        rows: [],
        addGuess,
        newGame(initialRows = []) {
          set({
            answer: getRandomWord(),
            rows: [],
          });

          initialRows.forEach(addGuess);
        },
      };
    },
    {
      name: 'reacdle',
      getStorage: () => localStorage,
    }
  )
);

// useStore.persist.clearStorage();

export const answerSelector = (state: StoreState) => state.answer;
