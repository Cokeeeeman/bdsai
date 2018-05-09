import BinaryTreeNode from './BinaryTreeNode';
import BinaryTree from './BinaryTree';

class BinarySearchTree extends BinaryTree {
  /**
   * Insert a value to the tree
   * @param  {} value  value to insert
   */
  insert(value) {
    const insert = (val, node) => {
      if (val < node.value) {
        if (node.left) {
          insert(val, node.left);
        } else {
          node.left = new BinaryTreeNode(val);
        }
      }

      if (val > node.value) {
        if (node.right) {
          insert(val, node.right);
        } else {
          node.right = new BinaryTreeNode(val);
        }
      }
    };

    if (!this.root) {
      this.root = new BinaryTreeNode(value);
      return;
    }

    insert(value, this.root);
  }

  /**
   * Search the tree for a value
   * @param  {} value value to search
   * @return {BinaryTreeNode}       node with the value
   */
  search(value) {
    const search = (val, node) => {
      if (!val || !node) {
        return null;
      }

      if (val < node.value) {
        return search(val, node.left);
      } else if (val > node.value) {
        return search(val, node.right);
      }
      return node;
    };

    return search(value, this.root);
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
