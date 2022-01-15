import WordRow from './WordRow';

function App() {
  return (
    <div className="mx-auto w-96">
      <h1 className="text-3xl font-bold underline mb-8">Reacdle</h1>

      <WordRow letters={['h', 'e']} />
    </div>
  );
}

export default App;
