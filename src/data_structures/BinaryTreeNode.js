class BinaryTreeNode {
	/**
	 * Initialize a node with value
	 * @param  {} value - The value that stored in node
	 */
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	/**
	 * Check if the node is leaf
	 * @return {Boolean} Whether the node is leaf
	 */
	isLeaf() {
		return !this.left && !this.right;
	}
}

module.exports = BinaryTreeNode;