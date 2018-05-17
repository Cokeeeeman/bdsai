/**
 * 0-1 Knapsack Problem:
 * Given weights and values of n items, put these items in a knapsack of capacity W
 * to get the maximum total value in the knapsack. In other words, given two integer
 * arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated
 * with n items respectively. Also given an integer W which represents knapsack capacity,
 * find out the maximum value subset of val[] such that sum of the weights of this subset
 * is smaller than or equal to W. You cannot break an item, either pick the complete item,
 * or don’t pick it (0-1 property).
 */

/**
 * For any given item, either it's contained in the optimal set or not. We have:
 *   Either k(weight, val, wt, n - 1), if (n - 1)th item is not in the optimal solution; or
 *   k(weight - wt[n - 1], val, wt, n - 1) + wt[n - 1] is the optimal solution, if item is included
 *
 * If wt[n - 1] > total weight, then apprently (n - 1)th item is not included.
 * @param  {Number} weight Total weight of knapsack
 * @param  {Number[]} val    Array of item values
 * @param  {Number[]} wt     Array of item weights
 * @param  {Number} n      Number of items to consider
 * @return {Number}        Maxumum value
 */
const recursive = (weight, val, wt, n) => {
  if (n === 0) {
    return 0;
  }

  if (wt[n - 1] > weight) {
    return recursive(weight, val, wt, n - 1);
  }

  return Math.max(
    recursive(weight, val, wt, n - 1),
    recursive(weight - wt[n - 1], val, wt, n - 1) + val[n - 1]
  );
};

export default recursive;
