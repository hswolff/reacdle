import wordBank from './word-bank.json';

export enum LetterState {
  Miss, // Letter doesn't exist at all
  Present, // Letter exists but wrong location
  Match, // Letter exists and is in the right location
}

export function computeGuess(
  guess: string,
  answerString: string = word
): LetterState[] {
  const result: LetterState[] = [];

  if (guess.length !== answerString.length) {
    return result;
  }

  const answer = answerString.split('');

  const guessAsArray = guess.split('');

  const answerLetterCount: Record<string, number> = {};

  guessAsArray.forEach((letter, index) => {
    const currentAnswerLetter = answer[index];

    answerLetterCount[currentAnswerLetter] = answerLetterCount[
      currentAnswerLetter
    ]
      ? answerLetterCount[currentAnswerLetter] + 1
      : 1;

    if (currentAnswerLetter === letter) {
      result.push(LetterState.Match);
    } else if (answer.includes(letter)) {
      result.push(LetterState.Present);
    } else {
      result.push(LetterState.Miss);
    }
  });

  result.forEach((curResult, resultIndex) => {
    if (curResult !== LetterState.Present) {
      return;
    }
    console.log(answerLetterCount);

    const guessLetter = guessAsArray[resultIndex];
    console.log({ guessLetter });

    //      50|     expect(computeGuess('alloy', 'smelt')).toEqual([

    answer.forEach((currentAnswerLetter, answerIndex) => {
      console.log({
        resultIndex,
        guessLetter,
        currentAnswerLetter,
        resultAnswerIndex: result[answerIndex],
        answerIndex,
        answerLetterCount: answerLetterCount[guessLetter],
      });

      if (currentAnswerLetter !== guessLetter) {
        return;
      }

      if (result[answerIndex] === LetterState.Match) {
        result[resultIndex] = LetterState.Miss;
      }

      if (answerLetterCount[guessLetter] <= 0) {
        result[resultIndex] = LetterState.Miss;
      }
    });

    answerLetterCount[guessLetter]--;
    console.log('end loop');
  });

  return result;
}

function getRandomWord(): string {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}

export const word = getRandomWord();
