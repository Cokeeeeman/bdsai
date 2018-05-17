/**
 * Merge two arrays into one
 * @param  {Number[]} arr1
 * @param  {Number[]} arr2
 * @return {Number[]} merged
 */
const merge = (arr1, arr2) => {
  const merged = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      merged.push(arr1[p1]);
      p1 += 1;
    } else {
      merged.push(arr2[p2]);
      p2 += 1;
    }
  }

  merged.push(...arr1.slice(p1), ...arr2.slice(p2));
  return merged;
};

/**
 *  * Merge sort
 * @param  {Number[]} array Input array
 * @return {Number[]}       Sorted array
 */
const mergeSort = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  if (array.length < 2) {
    return array.slice(0);
  }

  const left = 0;
  const right = array.length - 1;
  const middle = Math.ceil((left + right) / 2);

  const leftArray = array.slice(left, middle);
  const rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

export default mergeSort;
