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

  rows = rows.concat(Array(guessesRemaining).fill(''));

  return (
    <div className="mx-1auto w-96">
      <h1 className="text-3xl font-bold underline mb-8">Reacdle</h1>
      <p className="my-4">Test word</p>
      <WordRow word={state.answer} />
      <input
        type="text"
        className="w-1/2 mx-auto mt-4 border border-gray-400 p-2"
        value={guess}
        onChange={onChange}
      />
      <hr className="my-4 border-2 border-black rounded" />

      <div className="grid grid-rows-6 gap-4">
        {rows.map((word, index) => (
          <WordRow key={index} word={word} />
        ))}
      </div>
    </div>
  );
}

export default App;
