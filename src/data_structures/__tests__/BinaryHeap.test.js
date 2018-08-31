import BinaryHeap from '../BinaryHeap';

describe('BinaryHeap', () => {
  test('constructor()', () => {
    const heap = new BinaryHeap();
    expect(heap.heap).toEqual([]);
  });

  describe('insert()', () => {
    test('Insert values should always form a binary max heap', () => {
      const heap = new BinaryHeap();
      heap.insert(1);
      expect(heap.peek()).toBe(1);
      heap.insert(6);
      expect(heap.peek()).toBe(6);
      heap.insert(5);
      expect(heap.heap).toEqual([6, 1, 5]);
      heap.insert(10);
      expect(heap.heap).toEqual([10, 6, 5, 1]);
      heap.insert(7);
      expect(heap.heap).toEqual([10, 7, 5, 1, 6]);
      heap.insert(8);
      expect(heap.heap).toEqual([10, 7, 8, 1, 6, 5]);
    });
  });

  describe('pop()', () => {
    test('Pop() should always get the max value', () => {
      const heap = new BinaryHeap();
      heap.heap = [10, 7, 8, 1, 6, 5];
      expect(heap.pop()).toBe(10);
      expect(heap.pop()).toBe(8);
      expect(heap.pop()).toBe(7);
      expect(heap.pop()).toBe(6);
      expect(heap.pop()).toBe(5);
      expect(heap.pop()).toBe(1);
    });
  });

  describe('peek()', () => {
    test('peek() should always get the max value', () => {
      const heap = new BinaryHeap();
      heap.heap = [10, 7, 8, 1, 6, 5];
      expect(heap.peek()).toBe(10);
      heap.pop();
      expect(heap.peek()).toBe(8);
    });
  });
});
