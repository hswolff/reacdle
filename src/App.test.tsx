import { describe, expect, test } from 'vitest';
import App from './App';
import { useStore } from './store';
import { render, screen, userEvent, within } from './test/test-utils';

describe('App', () => {
  test('the title is visible', () => {
    render(<App />);
    // @ts-expect-error
    expect(screen.getByText(/Reacdle/i)).toBeInTheDocument();
  });

  test('shows empty state', () => {
    useStore.getState().newGame([]);
    render(<App />);
    expect(screen.queryByText('Game Over')).toBeNull();
    expect(document.querySelectorAll('main div')).toHaveLength(6);
    expect(document.querySelector('main')?.textContent).toEqual('');
  });

  test('shows one row of guesses', () => {
    useStore.getState().newGame(['hello']);
    render(<App />);
    expect(document.querySelector('main')?.textContent).toEqual('hello');
  });

  test('shows lost game state', () => {
    useStore.getState().newGame(Array(6).fill('hello'));
    render(<App />);
    // @ts-expect-error
    expect(screen.getByText('Game Over')).toBeInTheDocument();
  });

  test('show won game state', () => {
    const initialState = Array(2).fill('hello');
    useStore.getState().newGame(initialState);
    const answer = useStore.getState().answer;
    useStore.getState().addGuess(answer);

    render(<App />);

    // shows all guesses in the DOM
    expect(document.querySelector('main')?.textContent).toEqual(
      initialState.join('') + answer
    );
    // @ts-expect-error
    expect(screen.getByText('Game Over')).toBeInTheDocument();
  });

  test('can start new game', () => {
    useStore.getState().newGame(Array(6).fill('hello'));
    render(<App />);
    // @ts-expect-error
    expect(screen.getByText('Game Over')).toBeInTheDocument();

    userEvent.click(
      within(screen.getByRole('modal')).getByText('New Game', {})
    );
    expect(document.querySelector('main')?.textContent).toEqual('');
    expect(screen.queryByText('Game Over')).toBeNull();
  });
});
