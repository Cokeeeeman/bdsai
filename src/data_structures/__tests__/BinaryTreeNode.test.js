const BinaryTreeNode = require('../BinaryTreeNode.js');

test('constructor()', () => {
	const node = new BinaryTreeNode(1);
  	expect(node.value).toBe(1);
  	expect(node.left).toBe(null);
  	expect(node.right).toBe(null);
});