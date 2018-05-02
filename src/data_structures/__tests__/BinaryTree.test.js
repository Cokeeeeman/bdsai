import BinaryTree from '../BinaryTree';

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
});