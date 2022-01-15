import wordBank from './word-bank.json';

export enum LetterState {
  Miss, // Letter doesn't exist at all
  Present, // Letter exists but wrong location
  Match, // Letter exists and is in the right location
}

export function getRandomWord(): string {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}

export function computeGuess(guess: string, wordString: string): LetterState[] {
  const result: LetterState[] = [];
  const word = wordString.split('');

  guess.split('').forEach((letter, index) => {
    const currentWordLetter = word[index];

    if (currentWordLetter === letter) {
      result.push(LetterState.Match);
    } else if (word.includes(letter)) {
      result.push(LetterState.Present);
    } else {
      result.push(LetterState.Miss);
    }
  });

  return result;
}
