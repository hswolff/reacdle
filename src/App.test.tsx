import { describe, expect, test } from 'vitest';
import App from './App';
import { useStore } from './store';
import { render, screen, userEvent, within } from './test/test-utils';

describe('App', () => {
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Reacdle/i)).toBeInTheDocument();
  });

  test('shows empty state', () => {
    useStore.setState({ guesses: [] });
    render(<App />);
    expect(screen.queryByText('Game Over')).toBeNull();
    expect(document.querySelectorAll('main div')).toHaveLength(6);
    expect(document.querySelector('main')?.textContent).toEqual('');
  });

  test('shows one row of guesses', () => {
    useStore.setState({ guesses: ['hello'] });
    render(<App />);
    expect(document.querySelector('main')?.textContent).toEqual('hello');
  });

  test('shows end game state', () => {
    useStore.setState({ guesses: Array(6).fill('hello') });
    render(<App />);
    expect(screen.getByText('Game Over')).toBeInTheDocument();
  });

  test('can start new game', () => {
    useStore.setState({ guesses: Array(6).fill('hello') });
    render(<App />);
    expect(screen.getByText('Game Over')).toBeInTheDocument();

    userEvent.click(
      within(screen.getByRole('modal')).getByText('New Game', {})
    );
    expect(document.querySelector('main')?.textContent).toEqual('');
  });
});
