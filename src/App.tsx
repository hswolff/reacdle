import { useEffect, useRef, useState } from 'react';
import { useStore, NUMBER_OF_GUESSES, WORD_LENGTH } from './store';
import WordRow from './WordRow';

export default function App() {
  const state = useStore();
  const [guess, setGuess] = useGuess();

  const isGameOver = state.gameState !== 'playing';

  let rows = [...state.rows];

  if (rows.length < NUMBER_OF_GUESSES) {
    rows.push({ guess });
  }

  const guessesRemaining = NUMBER_OF_GUESSES - rows.length;

  rows = rows.concat(Array(guessesRemaining).fill(''));

  return (
    <div className="mx-auto w-96 relative h-screen">
      <header className="border-b border-gray-400 py-4 mb-4">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase">
          Reacdle
        </h1>
      </header>

      <main className="grid grid-rows-6 gap-4">
        {rows.map((word, index) => (
          <WordRow key={index} word={word.guess} result={word.result} />
        ))}
      </main>

      {isGameOver && (
        <div
          role="modal"
          className="absolute bg-white border border-gray-500 rounded text-center w-3/4 h-1/2 p-6 left-0 right-0 mx-auto top-1/4"
        >
          <p>Game Over</p>
          <WordRow word={state.answer} />

          <button
            className="border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow"
            onClick={() => {
              state.newGame();
              setGuess('');
            }}
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
}

function useGuess() {
  const addGuess = useStore((s) => s.addGuess);
  const guessState = useState('');
  const [guess, setGuess] = guessState;
  const previousGuess = usePrevious(guess);

  const onKeyDown = (e: KeyboardEvent) => {
    setGuess((curGuess) => {
      let letter = e.key;

      const newGuess =
        letter.length === 1 && curGuess.length !== WORD_LENGTH
          ? curGuess + letter
          : curGuess;

      switch (e.key) {
        case 'Backspace':
          return newGuess.slice(0, -1);
        case 'Enter':
          if (newGuess.length === WORD_LENGTH) {
            return '';
          }
      }

      if (newGuess.length === WORD_LENGTH) {
        return newGuess;
      }

      return newGuess;
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (guess.length === 0 && previousGuess?.length === WORD_LENGTH) {
      addGuess(previousGuess);
    }
  }, [guess]);

  return guessState;
}

// source https://usehooks.com/usePrevious/
function usePrevious<T>(value: T): T {
  const ref: any = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
