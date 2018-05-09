/**
 * Stack implementation using Linked List
 */
import Node from './Node';

class Stack {
  /**
   * Initialize a stack
   */
  constructor() {
    this.tail = null;
    this.size = 0;
  }

  /**
   * Push a value to the top of the stack
   * @param  {*} value Value to push
   * @return {Number}       Size of the stack
   */
  push(value) {
    const node = new Node(value);
    node.next = this.tail;
    this.tail = node;
    this.size += 1;
    return this.size;
  }

  /**
   * Removes and returns the value on the top of the stack
   * @return {*} Value on the top
   */
  pop() {
    if (this.tail === null) {
      return null;
    }
    const node = this.tail;
    this.tail = node.next;
    this.size -= 1;
    return node.value;
  }

  /**
   * Returns the value on the top of the stack
   * @return {*} Value on the top
   */
  peek() {
    return this.tail ? this.tail.value : null;
  }

  /**
   * Get size of the stack
   * @return {Number} Size
   */
  getSize() {
    return this.size;
  }
}

export default Stack;
