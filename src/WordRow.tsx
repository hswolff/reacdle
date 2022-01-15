interface WordRowProps {
  letters: string[];
}
export default function WordRow({ letters: lettersProp = [] }: WordRowProps) {
  const lettersRemaining = Math.abs(lettersProp.length - 5);
  const letters = lettersProp.concat(Array(lettersRemaining).fill(''));

  return (
    <div className="grid grid-cols-5 gap-4">
      {letters.map((char, index) => (
        <CharacterBox key={index} value={char} />
      ))}
    </div>
  );
}

interface CharacterBoxProps {
  value?: string;
}
function CharacterBox({ value }: CharacterBoxProps) {
  return (
    <span className="border-2 border-gray-400 p-4 uppercase text-center">
      {value}
    </span>
  );
}
