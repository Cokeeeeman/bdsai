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
	 * Get size of the binary tree with the node as root
	 * @return {Number} size
	 */
	getSize() {
		const leftSize = this.left ? this.left.getSize() : 0;
		const rightSize = this.right ? this.right.getSize() : 0;
		return 1 + leftSize + rightSize;
	}

	/**
	 * Get height of the binary tree with the node as root
	 * @return {Number} height
	 */
	getHeight() {
		return Math.max(
			this.left ? this.left.getHeight() + 1 : 0,
			this.right ? this.right.getHeight() + 1 : 0
		);
	}

	/**
	 * Check if the node is leaf
	 * @return {Boolean} Whether the node is leaf
	 */
	isLeaf() {
		return !this.left && !this.right;
	}
}

export default BinaryTreeNode;