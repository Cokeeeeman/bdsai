import { swap } from '../utils';

/**
 * Sift down the root node to its correct position so that the tree is heapified
 * @param  {Number[]} array
 * @param  {Number} start Index of the root node that needs to be sifted down
 * @param  {Number} end   The range bound for the current sub-heap tree
 */
const siftDown = (array, start, end) => {
  if (start >= end) {
    return;
  }

  const left = start * 2 + 1;
  const right = start * 2 + 2;

  let larggest = start;

  if (left <= end && array[left] > array[larggest]) {
    larggest = left;
  }

  if (right <= end && array[right] > array[larggest]) {
    larggest = right;
  }

  if (larggest !== start) {
    swap(array, start, larggest);
    siftDown(array, larggest, end);
  }
};

/**
 * Make a random array max heap
 * @param  {Number[]} array
 */
const heapify = array => {
  const lastParentIndex = Math.floor((array.length - 2) / 2);
  for (let i = lastParentIndex; i >= 0; i--) {
    siftDown(array, i, array.length - 1);
  }
};

/**
 * Heap sort.
 * 1. Build a map heap first, from an unsorted array(total length: n)
 * 2. Swap the first(0) with the last node(i) in the current heap, so that the biggest number of the current heap is swapped to the first position
 * of the sorted portion(that is, say if the last node's index is i, after swap, [i: n] becomes sorted portion, in ascending order).
 * 3. Sift down the top node to its correct position to rebuild the max heap. Now the last index of current heap is i - 1.
 * 4. Repeat from 2 until the heap size is 1
 * @param  {Number[]} array input
 * @return {Number[]}       sorted array
 */
const heapSort = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  const n = array.length;

  if (n < 2) {
    return array;
  }

  // build the max heap
  heapify(array);

  let i = n - 1;

  // gradually build the sorted portion, which is the end of the array.
  // E.g. [..., n - 1] => [..., n - 2, n - 1] => [..., n-3, n - 2, n - 1]...
  while (i > 0) {
    swap(array, 0, i);

    siftDown(array, 0, i - 1);
    i -= 1;
  }

  return array;
};

export default heapSort;
