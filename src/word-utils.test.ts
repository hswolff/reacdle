import { assert, describe, expect, it } from 'vitest';
import { getRandomWord } from './word-utils';

describe('word-utils', () => {
  it('foo', () => {
    assert.equal(getRandomWord(), 'empty');
  });
});
