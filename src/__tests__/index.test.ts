import { hello } from '../index';

describe('hello function', () => {
  it('should return "hello world"', () => {
    expect(hello()).toBe('hello world');
  });

  it('should return a string', () => {
    const result = hello();
    expect(typeof result).toBe('string');
  });

  it('should not be empty', () => {
    const result = hello();
    expect(result.length).toBeGreaterThan(0);
  });
}); 