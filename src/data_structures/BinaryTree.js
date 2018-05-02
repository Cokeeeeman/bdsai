import BinaryTreeNode from './BinaryTreeNode';

class BinaryTree {
	/**
	 * Initialize binary tree with a value
	 * @param  {} value
	 */
	constructor(value) {
		if (value) {
			this.root = new BinaryTreeNode(value);
		}
	}

	/**
	 * Get root
	 * @return {BinaryTreeNode} root node
	 */
	getRoot() {
		return this.root;
	}

	/**
	 * Get size of the tree
	 * @return {Number} size
	 */
	getSize() {
		return this.root ? this.root.getSize() : 0;
	}

	/**
	 * Get height of the tree
	 * @return {Number} height
	 */
	getHeight() {
		return this.root ? this.root.getHeight() : 0;
	}

	/**
	 * Inorder traversal of the tree
	 * @return {Array} Array of values
	 */
	inorder() {
		const arr = []; 
		const _inorder = (node) => {
			if (!node) return;
			_inorder(node.left);
			arr.push(node.value);
			_inorder(node.right);
		};
		_inorder(this.root);
		return arr;
	}

	/**
	 * Preorder traversal of the tree
	 * @return {Array} Array of values
	 */
	preorder() {
		const arr = []; 
		const _preorder = (node) => {
			if (!node) return;
			arr.push(node.value);
			_preorder(node.left);
			_preorder(node.right);
		};
		_preorder(this.root);
		return arr;
	}

	/**
	 * Postorder traversal of the tree
	 * @return {Array} Array of values
	 */
	postorder() {
		const arr = []; 
		const _postorder = (node) => {
			if (!node) return;
			_postorder(node.left);
			_postorder(node.right);
			arr.push(node.value);
		};
		_postorder(this.root);
		return arr;
	}
}

export default BinaryTree;