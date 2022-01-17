import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getRandomWord } from './word-utils';

interface StoreState {
  answer: string;
  guesses: string[];
  addGuess(guess: string): void;
  newGame(): void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      answer: getRandomWord(),
      guesses: ['hello', 'solar', 'penny'],
      addGuess: (guess) => set({ guesses: get().guesses.concat(guess) }),
      newGame() {
        set({
          answer: getRandomWord(),
          guesses: [],
        });
      },
    }),
    {
      name: 'reacdle',
      getStorage: () => localStorage,
    }
  )
);

// useStore.persist.clearStorage();

export const answerSelector = (state: StoreState) => state.answer;
