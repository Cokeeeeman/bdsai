/**
 *  * Insertion sort
 * @param  {Number[]} array Input array
 * @return {Number[]}       Sorted array
 */
const insertionSort = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = tmp;
      } else {
        break;
      }
    }
  }

  return array;
};

export default insertionSort;
