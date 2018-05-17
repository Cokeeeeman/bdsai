import recursive from '../knapsack';

const testKnapsack = knapsack => {
  describe(knapsack.name, () => {
    test('n === 0', () => {
      expect(knapsack(10, [3, 5], [3, 6], 0)).toBe(0);
    });

    test('1 item', () => {
      expect(knapsack(10, [3], [11], 1)).toBe(0);
      expect(knapsack(10, [3], [10], 1)).toBe(3);
    });

    test('more items', () => {
      expect(knapsack(10, [3, 5], [5, 4], 2)).toBe(8);
      expect(knapsack(10, [3, 5], [5, 6], 2)).toBe(5);
      expect(knapsack(50, [6, 10, 12], [10, 20, 30], 3)).toBe(22);
    });
  });
};

testKnapsack(recursive);
