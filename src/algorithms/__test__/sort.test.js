import selectionSort from '../selectionSort';
import bubbleSort from '../bubbleSort';
import insertionSort from '../insertionSort';

const testSorting = sorting => {
  describe(sorting.name, () => {
    test('undefined array', () => {
      try {
        sorting();
      } catch (e) {
        expect(e.message).toBe('Missing param: array');
      }
    });

    test('empty array', () => {
      const res = selectionSort([]);
      expect(res).toEqual([]);
    });

    test('nonempty array', () => {
      expect(selectionSort([54])).toEqual([54]);
      expect(selectionSort([54, 26])).toEqual([26, 54]);
      expect(selectionSort([54, 26, 93])).toEqual([26, 54, 93]);
      expect(selectionSort([54, 26, 93, 17, 77, 31, 44, 55, 20])).toEqual([
        17,
        20,
        26,
        31,
        44,
        54,
        55,
        77,
        93
      ]);
    });

    test('duplicate elements', () => {
      expect(selectionSort([54, 26, 26])).toEqual([26, 26, 54]);
      expect(selectionSort([54, 26, 93, 26, 93, 54])).toEqual([
        26,
        26,
        54,
        54,
        93,
        93
      ]);
    });
  });
};

testSorting(selectionSort);
testSorting(bubbleSort);
testSorting(insertionSort);
