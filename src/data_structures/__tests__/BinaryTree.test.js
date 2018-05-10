import BinaryTree from '../BinaryTree';
import BinaryTreeNode from '../BinaryTreeNode';

describe('BinaryTree', () => {
  describe('constructor()', () => {
    test('Specify with no value should create an empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.getRoot()).toBe(undefined);
    });

    test('Specify with value should create a tree with root of that value', () => {
      const tree = new BinaryTree(1);
      expect(tree.getRoot().value).toBe(1);
    });
  });

  describe('getSize()', () => {
    test('root undefined', () => {
      const tree = new BinaryTree();
      expect(tree.getSize()).toBe(0);
    });

    test('single root', () => {
      const tree = new BinaryTree(1);
      expect(tree.getSize()).toBe(1);
    });

    test('more nodes', () => {
      const tree = new BinaryTree(1);
      const root = tree.getRoot();
      root.left = new BinaryTreeNode(2);
      root.right = new BinaryTreeNode(3);
      expect(tree.getSize()).toBe(3);
    });
  });

  describe('getHeight()', () => {
    test('root undefined', () => {
      const tree = new BinaryTree();
      expect(tree.getHeight()).toBe(0);
    });

    test('single root', () => {
      const tree = new BinaryTree(1);
      expect(tree.getHeight()).toBe(0);
    });

    test('more nodes', () => {
      const tree = new BinaryTree(1);
      const root = tree.getRoot();
      root.left = new BinaryTreeNode(2);
      root.right = new BinaryTreeNode(3);
      root.left.left = new BinaryTreeNode(4);
      expect(tree.getHeight()).toBe(2);
    });
  });

  describe('inorder()', () => {
    test('root undefined', () => {
      const tree = new BinaryTree();
      expect(tree.inorder()).toEqual([]);
    });

    test('single root', () => {
      const tree = new BinaryTree(1);
      expect(tree.inorder()).toEqual([1]);
    });

    test('more nodes', () => {
      const tree = new BinaryTree(1);
      const root = tree.getRoot();
      root.left = new BinaryTreeNode(2);
      root.right = new BinaryTreeNode(3);
      root.left.left = new BinaryTreeNode(4);
      root.left.right = new BinaryTreeNode(5);
      root.left.left.left = new BinaryTreeNode(6);
      expect(tree.inorder()).toEqual([6, 4, 2, 5, 1, 3]);
    });
  });

  describe('preorder()', () => {
    test('root undefined', () => {
      const tree = new BinaryTree();
      expect(tree.preorder()).toEqual([]);
    });

    test('single root', () => {
      const tree = new BinaryTree(1);
      expect(tree.preorder()).toEqual([1]);
    });

    test('more nodes', () => {
      const tree = new BinaryTree(1);
      const root = tree.getRoot();
      root.left = new BinaryTreeNode(2);
      root.right = new BinaryTreeNode(3);
      root.left.left = new BinaryTreeNode(4);
      root.left.right = new BinaryTreeNode(5);
      root.left.left.left = new BinaryTreeNode(6);
      expect(tree.preorder()).toEqual([1, 2, 4, 6, 5, 3]);
    });
  });

  describe('postorder()', () => {
    test('root undefined', () => {
      const tree = new BinaryTree();
      expect(tree.postorder()).toEqual([]);
    });

    test('single root', () => {
      const tree = new BinaryTree(1);
      expect(tree.postorder()).toEqual([1]);
    });

    test('more nodes', () => {
      const tree = new BinaryTree(1);
      const root = tree.getRoot();
      root.left = new BinaryTreeNode(2);
      root.right = new BinaryTreeNode(3);
      root.left.left = new BinaryTreeNode(4);
      root.left.right = new BinaryTreeNode(5);
      root.left.left.left = new BinaryTreeNode(6);
      expect(tree.postorder()).toEqual([6, 4, 5, 2, 3, 1]);
    });
  });
});
