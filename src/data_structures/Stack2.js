/**
 * Stack implementation using Linked List
 */
import Node from './Node';

class Stack2 {
	/**
	 * Initialize a stack
	 */
	constructor() {
		this._tail = null;
		this._size = 0;
	}

	/**
	 * Push a value to the top of the stack
	 * @param  {*} value Value to push
	 * @return {Number}       Size of the stack
	 */
	push(value) {
		const node = new Node(value);
		node.next = this._tail;
		this._tail = node;
		this._size++;
		return this._size;
	}

	/**
	 * Removes and returns the value on the top of the stack
	 * @return {*} Value on the top
	 */
	pop() {
		if (this._tail === null) {
			return null;
		} else {
			const node = this._tail;
			this._tail = node.next;
			this._size--;
			return node.value;
		}
	}

	/**
	 * Returns the value on the top of the stack
	 * @return {*} Value on the top
	 */
	peek() {
		return this._tail ? this._tail.value : null;
	}

	/**
	 * Get size of the stack
	 * @return {Number} Size
	 */
	getSize() {
		return this._size;
	}
}

export default Stack2;