/**
 * Queue implementation using Linked List
 */
import Node from './Node';

class Queue {
	/**
	 * Initialize a queue
	 */
	constructor() {
		this._head = null;
		this._tail = null;
		this.size = 0;
	}

	/**
	 * Add a value to the end of the queue
	 * @param  {*} value value to add
	 * @return {Number}       Size of the queue
	 */
	enqueue(value) {
		const node = new Node(value);
		if (this._tail) {
			this._tail.next = node;
			this._tail = node;
		} else {
			this._tail = node;
			this._head = this._tail;
		}
		return ++this.size;
	}

	/**
	 * Remove and return a value from the start of the queue
	 * @return {*} Removed value
	 */
	dequeue() {
		if (this.size === 0) {
			return null;
		}

		const node = this._head;
		this._head = node.next;
		if (this.size === 1) {
			this._tail = null;
		}
		this.size--;
		return node.value;
	}

	/**
	 * Returns the head of the queue
	 * @return {*} head
	 */
	head() {
		return this._head ? this._head.value : null;
	}

	/**
	 * Returns the tail of the queue
	 * @return {*} tail
	 */
	tail() {
		return this._tail ? this._tail.value : null;
	}
}