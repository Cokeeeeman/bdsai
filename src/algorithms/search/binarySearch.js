/**
 * Binary search
 * @param  {Array} array  Input array
 * @param  {Number} target Target value
 * @return {Number}        The index of the target
 */
const binarySearch = (array, target) => {
  if (!Array.isArray(array) || !target) {
    return -1;
  }

  let l = 0;
  let r = array.length - 1;
  while (l <= r) {
    const m = Math.ceil((l + r) / 2);
    if (array[m] === target) {
      return m;
    } else if (array[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
};

export default binarySearch;
