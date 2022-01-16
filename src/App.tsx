import { word } from './word-utils';
import WordRow from './WordRow';

function App() {
  return (
    <div className="mx-1auto w-96">
      <h1 className="text-3xl font-bold underline mb-8">Reacdle</h1>
      <p className="my-4">Test word</p>
      <WordRow word={word} />
      <hr className="my-4" />

      <div className="grid grid-rows-5 gap-4">
        <WordRow word={'hello'} />
        <WordRow word={'solar'} />
        <WordRow word={'penny'} />
        <WordRow word={'snack'} />
        <WordRow word={'stare'} />
        <WordRow word={'he'} />
      </div>
    </div>
  );
}

export default App;
