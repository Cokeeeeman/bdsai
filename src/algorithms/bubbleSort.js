/**
 * Bubble sort
 * @param  {Number[]} array input
 * @return {Number[]}       sorted array
 */
const bubbleSort = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[i] > array[j]) {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }

  return array;
};

export default bubbleSort;
