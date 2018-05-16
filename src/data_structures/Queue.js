/**
 * Queue implementation using Linked List
 */
import Node from './Node';

class Queue {
  /**
   * Initialize a queue
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Add a value to the end of the queue
   * @param  {*} value value to add
   * @return {Number}       Size of the queue
   */
  enqueue(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.tail = node;
      this.head = this.tail;
    }
    this.size += 1;
    return this.size;
  }

  /**
   * Remove and return a value from the start of the queue
   * @return {*} Removed value
   */
  dequeue() {
    if (this.size === 0) {
      return null;
    }

    const node = this.head;
    this.head = node.next;
    if (this.size === 1) {
      this.tail = null;
    }
    this.size -= 1;
    return node.value;
  }
}

export default Queue;
