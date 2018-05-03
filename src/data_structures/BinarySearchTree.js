import BinaryTreeNode from './BinaryTreeNode';
import BinaryTree from './BinaryTree';

class BinarySearchTree extends BinaryTree {
	/**
	 * Insert a value to the tree
	 * @param  {} value  value to insert
	 */
	insert(value) {
		const _insert = (value, node) => {
			if (value < node.value) {
				if (node.left) {
					_insert(value, node.left);
				} else {
					node.left = new BinaryTreeNode(value);
				}
			}

			if (value > node.value) {
				if (node.right) {
					_insert(value, node.right);
				} else {
					node.right = new BinaryTreeNode(value);;
				}
			}
		};

		if (!this.root) {
			this.root = new BinaryTreeNode(value);
			return;
		}

		_insert(value, this.root);
	}

	/**
	 * Search the tree for a value
	 * @param  {} value value to search
	 * @return {BinaryTreeNode}       node with the value
	 */
	search(value) {
		const _search = (value, node) => {
			if (!value || !node) {
				return null;
			}

			if (value < node.value) {
				return _search(value, node.left);
			} else if (value > node.value) {
				return _search(value, node.right);
			} else {
				return node;
			}
		};

		return _search(value, this.root);
	}

	/**
	 * Get min value of the tree
	 * @return {} Min value
	 */
	getMinimum() {
		if (!this.root) return null;

		let node = this.root;
		while (node.left) {
			node = node.left;
		}
		
		return node.value;
	}

	/**
	 * Get max value of the tree
	 * @return {} Max value
	 */
	getMaxmum() {
		if (!this.root) return null;

		let node = this.root;
		while (node.right) {
			node = node.right;
		}
		
		return node.value;
	}
}

export default BinarySearchTree;