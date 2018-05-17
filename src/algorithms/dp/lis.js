/**
 * Naive recursive solution to get longest increasing subsequence
 * Time: O(exponential)
 * Space: O(1)
 * @param  {Number[]} array
 * @return {Number} Length of longest increasing subsequence
 */
export const recursive = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  if (array.length === 0) {
    return 0;
  }

  let max = 1;

  const _recursive = (arr, i) => {
    if (i < 1) {
      return 1;
    }

    let res;
    let curMax = 1;
    for (let j = i - 1; j >= 0; j--) {
      res = _recursive(arr, j);
      if (arr[i] > arr[j] && res + 1 > curMax) {
        curMax = res + 1;
      }

      if (curMax > max) {
        max = curMax;
      }
    }

    return curMax;
  };

  _recursive(array, array.length - 1);

  return max;
};

/**
 * Bottom up solution to get longest increasing subsequence
 * Time: O(n^2)
 * Space: O(n)
 * @param  {Number[]} array
 * @return {Number} Length of longest increasing subsequence
 */
export const bottomUp = array => {
  if (!array) {
    throw new Error('Missing param: array');
  }

  if (array.length === 0) {
    return 0;
  }

  const lookup = [1];

  for (let i = 1; i < array.length; i++) {
    let max = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] > array[j] && lookup[j] + 1 > max) {
        max = lookup[j] + 1;
      }
    }
    lookup[i] = max;
  }

  return Math.max(...lookup);
};
