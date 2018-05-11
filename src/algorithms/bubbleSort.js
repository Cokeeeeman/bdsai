import { swap } from '../utils';
/**
 * Bubble sort.
 * Iterate from left to right, compare every pair of adjacent numbers, swap if they are in wrong order.
 * In this way, fro each iteration, the biggest number of the sub-array will be swapped to the right most
 * position.
 * @param  {Number[]} array input
 * @return {Number[]}       sorted array
 */
const bubbleSort = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  const n = array.length;
  let i = n - 1;

  while (i > 0) {
    for (let j = 0; j < n - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
    i -= 1;
  }

  return array;
};

export default bubbleSort;
