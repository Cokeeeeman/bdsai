import Queue from '../Queue';

describe('Queue', () => {
  test('constructor()', () => {
    const queue = new Queue();
    expect(queue.size).toBe(0);
  });

  describe('enqueue()', () => {
    test('empty queue', () => {
      const queue = new Queue();
      expect(queue.enqueue(1)).toBe(1);
    });

    test('nonempty queue', () => {
      const queue = new Queue();
      expect(queue.enqueue(1)).toBe(1);
      expect(queue.enqueue(10)).toBe(2);
      expect(queue.enqueue(100)).toBe(3);
    });
  });

  describe('dequeue()', () => {
    test('empty queue', () => {
      const queue = new Queue();
      expect(queue.dequeue()).toBe(null);
    });

    test('nonempty queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.dequeue()).toBe(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(2);
    });
  });
});
