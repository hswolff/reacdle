import { useState } from 'react';
import { useStore } from './store';
import WordRow from './WordRow';

const NUMBER_OF_GUESSES = 6;

function App() {
  const state = useStore();
  const [guess, setGuess] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newGuess = e.target.value;

    if (newGuess.length === 5) {
      state.addGuess(newGuess);
      newGuess = '';
    }

    setGuess(newGuess);
  };

  let rows = [...state.guesses];

  if (rows.length < NUMBER_OF_GUESSES) {
    rows.push(guess);
  }

  const guessesRemaining = NUMBER_OF_GUESSES - rows.length;

  const isGameOver = state.guesses.length === NUMBER_OF_GUESSES;

  rows = rows.concat(Array(guessesRemaining).fill(''));

  const newGameButton = (
    <button
      className="border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow"
      onClick={() => {
        state.newGame();
        setGuess('');
      }}
    >
      New Game
    </button>
  );

  return (
    <div className="mx-auto w-96 relative h-screen">
      <header className="border-b border-gray-400 py-4 mb-4">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase">
          Reacdle
        </h1>

        <div id="debug-area">
          <input
            type="text"
            placeholder="Enter Guess"
            className="w-1/2 mx-auto mt-4 mr-8 border border-gray-400 p-2"
            value={guess}
            disabled={isGameOver}
            onChange={onChange}
          />
          {newGameButton}
        </div>
      </header>

      <main className="grid grid-rows-6 gap-4">
        {rows.map((word, index) => (
          <WordRow key={index} word={word} />
        ))}
      </main>

      {isGameOver && (
        <div
          role="modal"
          className="absolute bg-white border border-gray-500 rounded text-center w-3/4 h-1/2 p-6 left-0 right-0 mx-auto top-1/4"
        >
          <p>Game Over</p>
          <WordRow word={state.answer} />

          {newGameButton}
        </div>
      )}
    </div>
  );
}

export default App;
