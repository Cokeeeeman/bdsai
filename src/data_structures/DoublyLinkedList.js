class ListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Doubly Linked List
 */
class DoublyLinkedList {
  constructor() {
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.size = 0;
  }

  /**
   * Add a value to the end of the list
   * @param {Number} value
   */
  add(value) {
    const toAdd = new ListNode(value);
    const last = this.dummyTail.prev;
    last.next = toAdd;
    toAdd.prev = last;
    toAdd.next = this.dummyTail;
    this.dummyTail.prev = toAdd;
    this.size += 1;
  }

  /**
   * Get the node of a specified index
   * @param  {Number} index
   * @return {ListNode} ListNode at given index
   */
  getNode(index) {
    if (index < 0 || this.size === 0 || index > this.size - 1) {
      return null;
    }

    let i = 0;
    let curNode = this.dummyHead.next;

    while (i < index) {
      curNode = curNode.next;
      i += 1;
    }

    return curNode;
  }

  /**
   * Get the value of a specified index
   * @param  {Number} index
   * @return {Number} value of the given index
   */
  getValue(index) {
    const node = this.getNode(index);
    return node ? node.value : null;
  }

  /**
   * Remove a node from given index
   * @param  {Number} index
   * @return {Number} value of the removed node
   */
  remove(index) {
    if (index < 0 || this.size === 0 || index > this.size - 1) {
      return null;
    }

    const prev = index === 0 ? this.dummyHead : this.getNode(index - 1);
    const toRemove = this.getNode(index);
    const { next } = toRemove.next;

    prev.next = toRemove.next;
    next.prev = prev;
    toRemove.prev = null;
    toRemove.next = null;
    this.size -= 1;
    return toRemove.value;
  }

  /**
   * Get size of the Linked List
   * @return {Number} size
   */
  getSize() {
    return this.size;
  }
}

export default DoublyLinkedList;
