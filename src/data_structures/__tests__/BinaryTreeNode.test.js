import BinaryTreeNode from '../BinaryTreeNode';

describe('BinaryTreeNode', () => {
  test('constructor()', () => {
    const node = new BinaryTreeNode(1);
    expect(node.value).toBe(1);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });

  describe('value', () => {
    test('get', () => {
      const node = new BinaryTreeNode(1);
      expect(node.value).toBe(1);
    });

    test('set', () => {
      const node = new BinaryTreeNode(1);
      node.value = 2;
      expect(node.value).toBe(2);
    });
  });

  describe('left', () => {
    test('Left should be null if it is not set', () => {
      const node = new BinaryTreeNode(1);
      expect(node.left).toBe(null);
    });

    test('Left should be set if it is set', () => {
      const node = new BinaryTreeNode(1);
      const left = new BinaryTreeNode(2);
      node.left = left;
      expect(node.left).toBe(left);
    });
  });

  describe('right', () => {
    test('Right should be null if it is not set', () => {
      const node = new BinaryTreeNode(1);
      expect(node.right).toBe(null);
    });

    test('Right should be set if it is set', () => {
      const node = new BinaryTreeNode(1);
      const right = new BinaryTreeNode(2);
      node.right = right;
      expect(node.right).toBe(right);
    });
  });

  describe('getSize()', () => {
    test('single node', () => {
      const node = new BinaryTreeNode(1);
      expect(node.getSize()).toBe(1);
    });

    test('more nodes', () => {
      const node = new BinaryTreeNode(1);
      node.left = new BinaryTreeNode(2);
      node.right = new BinaryTreeNode(3);
      node.left.left = new BinaryTreeNode(4);
      node.left.right = new BinaryTreeNode(5);
      node.right.left = new BinaryTreeNode(6);
      node.right.right = new BinaryTreeNode(7);
      expect(node.getSize()).toBe(7);
    });
  });

  describe('getHeight()', () => {
    test('single node', () => {
      const node = new BinaryTreeNode(1);
      expect(node.getHeight()).toBe(0);
    });

    test('more nodes', () => {
      const node = new BinaryTreeNode(1);
      node.left = new BinaryTreeNode(2);
      node.right = new BinaryTreeNode(3);
      node.left.left = new BinaryTreeNode(4);
      node.left.left.left = new BinaryTreeNode(5);
      expect(node.getHeight()).toBe(3);
    });
  });

  describe('isLeaf()', () => {
    test('Single node should be a leaf', () => {
      const node = new BinaryTreeNode(1);
      expect(node.isLeaf()).toBe(true);
    });

    test('Node with only left child shoud not be a leaf', () => {
      const node = new BinaryTreeNode(1);
      node.left = new BinaryTreeNode(2);
      expect(node.isLeaf()).toBe(false);
    });

    test('Node with only right child shoud not be a leaf', () => {
      const node = new BinaryTreeNode(1);
      node.right = new BinaryTreeNode(2);
      expect(node.isLeaf()).toBe(false);
    });

    test('Node with both children shoud not be a leaf', () => {
      const node = new BinaryTreeNode(1);
      node.left = new BinaryTreeNode(2);
      node.right = new BinaryTreeNode(3);
      expect(node.isLeaf()).toBe(false);
    });
  });
});
