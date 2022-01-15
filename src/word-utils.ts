import wordBank from './word-bank.json';

export function getRandomWord(): string {
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}
