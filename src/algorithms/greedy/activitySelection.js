/**
 * Activity Selection Problem:
 * You are given n activities with their start and finish times.
 * Select the maximum number of activities that can be performed by a single person, assuming
 * that a person can only work on a single activity at a time.
 *
 * E.g. consider [[10, 20], [12, 25,], [20, 30]]
 * Maximum set is [[10, 20], [20, 30]]
 */

/**
 * Assumm the input is sorted by finish time.
 * Time: O(n)
 * If input is not sorted, then we need to sort it first. Then
 * Time: O(nlogn)(sorting time) + O(n)
 * @param  {Array} activities - Sorted by finish time
 * @return {Array} max activity set that can be finished
 */
const findMax = activities => {
  const res = [];

  if (!activities || activities.length === 0) {
    return res;
  }

  res.push(activities[0]);

  let prev = activities[0];
  let current;

  for (let i = 1; i < activities.length; i++) {
    current = activities[i];
    if (current[0] >= prev[1]) {
      res.push(current);
      prev = current;
    }
  }

  return res;
};

export default findMax;
