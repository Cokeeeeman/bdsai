import selectionSort from '../selectionSort';
import bubbleSort from '../bubbleSort';
import insertionSort from '../insertionSort';
import mergeSort from '../mergeSort';
import quickSort from '../quickSort';
import heapSort from '../heapSort';

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
      const res = sorting([]);
      expect(res).toEqual([]);
    });

    test('nonempty array', () => {
      expect(sorting([54])).toEqual([54]);
      expect(sorting([54, 26])).toEqual([26, 54]);
      expect(sorting([54, 26, 93])).toEqual([26, 54, 93]);
      expect(sorting([54, 26, 93, 17, 77, 31, 44, 55, 20])).toEqual([
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
      expect(sorting([54, 26, 26])).toEqual([26, 26, 54]);
      expect(sorting([54, 26, 93, 26, 93, 54])).toEqual([
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
testSorting(mergeSort);
testSorting(quickSort);
testSorting(heapSort);
