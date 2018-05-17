import findMax from '../activitySelection';

describe('findMax()', () => {
  test('undefined or empty input', () => {
    expect(findMax()).toEqual([]);
    expect(findMax([])).toEqual([]);
  });

  test('1 activity', () => {
    expect(findMax([[1, 2]])).toEqual([[1, 2]]);
  });

  test('more activities', () => {
    expect(findMax([[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]])).toEqual([
      [1, 2],
      [3, 4],
      [5, 7],
      [8, 9]
    ]);
  });
});
