import DoublyLinkedList from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  test('constructor()', () => {
    const list = new DoublyLinkedList();
    expect(list.getSize()).toBe(0);
  });

  test('add()', () => {
    const list = new DoublyLinkedList();
    list.add(1);
    expect(list.getSize()).toBe(1);
    expect(list.getValue(0)).toBe(1);
    list.add(2);
    expect(list.getSize()).toBe(2);
    expect(list.getValue(1)).toBe(2);
    list.add(3);
    expect(list.getSize()).toBe(3);
    expect(list.getValue(2)).toBe(3);
  });

  describe('getValue()', () => {
    test('negative index', () => {
      const list = new DoublyLinkedList();
      expect(list.getValue(-1)).toBe(null);
    });

    test('empty array', () => {
      const list = new DoublyLinkedList();
      expect(list.getValue(0)).toBe(null);
    });

    test('index out of bounds', () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.getValue(3)).toBe(null);
      expect(list.getValue(100)).toBe(null);
    });

    test('get correct value', () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(10);
      list.add(20);
      list.add(30);
      expect(list.getValue(1)).toBe(2);
      expect(list.getValue(5)).toBe(30);
    });
  });

  describe('remove()', () => {
    test('negative index', () => {
      const list = new DoublyLinkedList();
      expect(list.remove(-1)).toBe(null);
    });

    test('empty array', () => {
      const list = new DoublyLinkedList();
      expect(list.remove(0)).toBe(null);
    });

    test('index out of bounds', () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.remove(3)).toBe(null);
      expect(list.remove(100)).toBe(null);
    });

    test('remove correct value', () => {
      const list = new DoublyLinkedList();
      list.add(0);
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(10);
      list.add(20);
      list.add(30);
      expect(list.remove(0)).toBe(0);
      expect(list.remove(1)).toBe(2);
      expect(list.remove(3)).toBe(20);
      expect(list.remove(4)).toBe(null);
    });
  });

  test('getSize()', () => {
    const list = new DoublyLinkedList();
    expect(list.getSize()).toBe(0);
    list.add(1);
    expect(list.getSize()).toBe(1);
    list.add(2);
    expect(list.getSize()).toBe(2);
    list.add(3);
    expect(list.getSize()).toBe(3);
  });
});
