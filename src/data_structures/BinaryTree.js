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
    const inorder = node => {
      if (!node) return;
      inorder(node.left);
      arr.push(node.value);
      inorder(node.right);
    };
    inorder(this.root);
    return arr;
  }

  /**
   * Preorder traversal of the tree
   * @return {Array} Array of values
   */
  preorder() {
    const arr = [];
    const preorder = node => {
      if (!node) return;
      arr.push(node.value);
      preorder(node.left);
      preorder(node.right);
    };
    preorder(this.root);
    return arr;
  }

  /**
   * Postorder traversal of the tree
   * @return {Array} Array of values
   */
  postorder() {
    const arr = [];
    const postorder = node => {
      if (!node) return;
      postorder(node.left);
      postorder(node.right);
      arr.push(node.value);
    };
    postorder(this.root);
    return arr;
  }
}

export default BinaryTree;
