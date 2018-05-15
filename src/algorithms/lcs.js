/**
 * Get the longest common subsequence(lcs) of 2 strings.
 * E.g. if str1 = 'ABD', str2 = 'ADC', then lcs = 2 from 'AD'.
 *
 * Breaking into smaller problems, we have:
 * lcs[i][j] = lcs[i-1][j-1] + 1, if str1.charAt(i) == str2.charAt(j);
 * lcs[i][j] = Max(lcs[i-1][j], lcs[i][j-1]), if str1.charAt(i) != str2.charAt(j)
 *
 * Recursive solution
 * @param  {String} str1
 * @param  {String} str2
 * @return {Number} Number of chars in lcs
 */
export const recursive = (str1, str2) => {
  if (
    str1 === undefined ||
    str2 === undefined ||
    str1 === null ||
    str2 === null
  ) {
    throw new Error('Invalid input: two strings must be provided.');
  }

  const _recursive = (m, n) => {
    if (m === 0 || n === 0) {
      return 0;
    }

    if (str1.charAt(m - 1) === str2.charAt(n - 1)) {
      return _recursive(m - 1, n - 1) + 1;
    }

    return Math.max(_recursive(m, n - 1), _recursive(m - 1, n));
  };

  return _recursive(str1.length, str2.length);
};

/**
 * Bottom up solution
 * @param  {String} str1
 * @param  {String} str2
 * @return {Number} Number of chars in lcs
 */
export const bottomUp = (str1, str2) => {
  if (
    str1 === undefined ||
    str2 === undefined ||
    str1 === null ||
    str2 === null
  ) {
    throw new Error('Invalid input: two strings must be provided.');
  }

  const lookup = [];

  for (let i = 0; i <= str1.length; i++) {
    const row = [];
    lookup.push(row);
  }

  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) {
        lookup[i][j] = 0;
      } else if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        lookup[i][j] = lookup[i - 1][j - 1] + 1;
      } else {
        lookup[i][j] = Math.max(lookup[i][j - 1], lookup[i - 1][j]);
      }
    }
  }

  return lookup[str1.length][str2.length];
};
