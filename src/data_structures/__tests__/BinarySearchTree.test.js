import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  describe('insert()', () => {
    test('Insert a value into an empty BST should create a root node with the value', () => {
      const tree = new BinarySearchTree();
      tree.insert(1);
      expect(tree.getRoot().value).toBe(1);
    });

    test('BST only 1 root, value < root.value, should be inserted as the left child of root', () => {
      const tree = new BinarySearchTree(2);
      tree.insert(1);
      expect(tree.getRoot().left.value).toBe(1);
    });

    test('BST only 1 root, value > root.value, should be inserted as the right child of root', () => {
      const tree = new BinarySearchTree(1);
      tree.insert(2);
      expect(tree.getRoot().right.value).toBe(2);
    });

    test('Nodes should be inserted to correct positions', () => {
      const tree = new BinarySearchTree(3);
      tree.insert(1);
      tree.insert(4);
      tree.insert(2);
      tree.insert(5);
      expect(tree.getRoot().left.value).toBe(1);
      expect(tree.getRoot().right.value).toBe(4);
      expect(tree.getRoot().left.right.value).toBe(2);
      expect(tree.getRoot().right.right.value).toBe(5);
    });
  });

  describe('search()', () => {
    test('Node should be found if value is in the tree', () => {
      const tree = new BinarySearchTree(3);
      tree.insert(1);
      tree.insert(4);
      tree.insert(2);
      tree.insert(5);
      expect(tree.search(5).value).toBe(5);
      expect(tree.search(1).value).toBe(1);
    });

    test('Node not found if value is not in the tree', () => {
      const tree = new BinarySearchTree(3);
      tree.insert(1);
      tree.insert(4);
      tree.insert(2);
      tree.insert(5);
      expect(tree.search(6)).toBe(null);
    });
  });

  describe('getMinimum()', () => {
    test('Should return null if it is empty tree', () => {
      const tree = new BinarySearchTree();
      expect(tree.getMinimum()).toBe(null);
    });

    test('Should return correct min value if it is not empty tree', () => {
      const tree = new BinarySearchTree(3);
      tree.insert(1);
      tree.insert(4);
      tree.insert(2);
      tree.insert(5);
      expect(tree.getMinimum()).toBe(1);
    });
  });

  describe('getMaxmum()', () => {
    test('Should return null if it is empty tree', () => {
      const tree = new BinarySearchTree();
      expect(tree.getMaxmum()).toBe(null);
    });

    test('Should return correct max value if it is not empty tree', () => {
      const tree = new BinarySearchTree(3);
      tree.insert(1);
      tree.insert(4);
      tree.insert(2);
      tree.insert(5);
      expect(tree.getMaxmum()).toBe(5);
    });
  });
});
