/**
 *  * Selection sort
 * @param  {Number[]} array Input array
 * @return {Number[]}       Sorted array
 */
const selectionSort = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const tmp = array[min];
      array[min] = array[i];
      array[i] = tmp;
    }
  }

  return array;
};

export default selectionSort;
