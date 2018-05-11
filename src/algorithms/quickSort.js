import { swap } from '../utils';

/**
 * Find the pivot so that all numbers on the left of the pivot are smaller and all numbers on the right are bigger.
 * @param  {Number[]} array
 * @param  {Number} left  The index for the left most number in the sub-array
 * @param  {Number} right The index for the right most number in the sub-array
 * @return {Number} pivot The index where pivot is
 */
const partition = (array, left, right) => {
  let p = left;
  let l = left;
  let r = right;

  while (l < r) {
    if (p === l) {
      if (array[p] <= array[r]) {
        r -= 1;
      } else {
        swap(array, p, r);
        p = r;
      }
    }

    if (p === r) {
      if (array[l] <= array[p]) {
        l += 1;
      } else {
        swap(array, l, p);
        p = l;
      }
    }
  }

  return p;
};

/**
 * Quick sort
 * @param  {Number[]} array
 * @param  {Number} left  The index for the left most number in the sub-array
 * @param  {Number} right The index for the right most number in the sub-array
 */
const quickSort = (array, left, right) => {
  if (left >= right) {
    return;
  }

  const index = partition(array, left, right);
  quickSort(array, left, index - 1);
  quickSort(array, index + 1, right);
};

/**
 * Quick sort
 * @param  {Number[]} array
 * @return {Number[]} sorted array
 */
export default array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  const result = array.slice(0);
  quickSort(result, 0, array.length - 1);
  return result;
};
