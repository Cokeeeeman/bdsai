import { recursive, bottomUp } from '../lcs';

const testLcs = lcs => {
  describe(lcs.name, () => {
    test('arr1 undefined', () => {
      try {
        lcs(undefined, '');
      } catch (e) {
        expect(e.message).toBe('Invalid input: two strings must be provided.');
      }
    });

    test('arr2 undefined', () => {
      try {
        lcs('', undefined);
      } catch (e) {
        expect(e.message).toBe('Invalid input: two strings must be provided.');
      }
    });

    test('both strings undefined', () => {
      try {
        lcs();
      } catch (e) {
        expect(e.message).toBe('Invalid input: two strings must be provided.');
      }
    });

    test('empty string(s)', () => {
      expect(lcs('', 'a')).toEqual(0);
      expect(lcs('a', '')).toEqual(0);
      expect(lcs('', '')).toEqual(0);
    });

    test('nonempty strings', () => {
      expect(lcs('a', 'b')).toEqual(0);
      expect(lcs('a', 'a')).toEqual(1);
      expect(lcs('abc', 'adc')).toEqual(2);
      expect(lcs('aggtab', 'gxtxayb')).toEqual(4);
    });
  });
};

testLcs(recursive);
testLcs(bottomUp);
