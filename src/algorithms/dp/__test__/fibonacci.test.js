import { recursive, memoization, bottomUp } from '../fibonacci';

const testFib = fib => {
  describe(fib.name, () => {
    test('n = 1', () => {
      expect(fib(1)).toBe(1);
    });

    test('n = 2', () => {
      expect(fib(2)).toBe(1);
    });

    test('n = 5', () => {
      expect(fib(5)).toBe(5);
    });

    test('n = 10', () => {
      expect(fib(10)).toBe(55);
    });

    test('n = 20', () => {
      expect(fib(20)).toBe(6765);
    });
  });
};

const testLargeInput = fib => {
  describe(fib.name, () => {
    test('n = 100', () => {
      expect(fib(100)).toBe(354224848179262000000);
    });
  });
};

testFib(recursive);
testFib(memoization);
testFib(bottomUp);

testLargeInput(memoization);
testLargeInput(bottomUp);
