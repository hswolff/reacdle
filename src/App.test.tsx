import { assert, describe, expect, it } from 'vitest';

describe('App', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it('bar', () => {
    expect(1 + 1).eq(2);
  });
});
