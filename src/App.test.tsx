import { assert, describe, expect, it } from 'vitest';
import App from './App';
import { render, screen, userEvent } from './test/test-utils';

describe('App', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Reacdle/i)).toBeInTheDocument();
  });
});
