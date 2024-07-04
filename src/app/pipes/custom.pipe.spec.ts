import { UpperCasePipe } from './custom.pipe';

describe('UpperCasePipe', () => {
  const pipe = new UpperCasePipe();

  it('transform "abc" a "ABC"', () => {
    const result = pipe.transform('abc');
    expect(result).toBe('ABC');
  });

  it('transform "hello world" a "HELLO WORLD"', () => {
    const result = pipe.transform('hello world');
    expect(result).toBe('HELLO WORLD');
  });
});
