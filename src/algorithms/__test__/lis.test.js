import { recursive, memoization } from '../lis';

const testLis = lis => {
  describe(lis.name, () => {
    test('undefined', () => {
      try {
        lis();
      } catch (e) {
        expect(e.message).toBe('Missing param: array');
      }
    });

    test('empty array', () => {
      expect(lis([])).toEqual(0);
    });

    test('nonempty array', () => {
      expect(lis([1])).toEqual(1);
      expect(lis([1, 2])).toEqual(2);
      expect(lis([2, 1])).toEqual(1);
      expect(lis([2, 1, 3, 4, 5, 1])).toEqual(4);
      expect(lis([10, 22, 9, 33, 21, 50, 41, 60])).toEqual(5);
    });
  });
};

testLis(recursive);
testLis(memoization);
