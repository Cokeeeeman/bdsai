/**
 * Stack implementation using Array
 */
class Stack1 {
	/**
	 * Initialize a stack
	 */
	constructor() {
		this._array = [];
	}

	/**
	 * Push a value to the top of the stack
	 * @param  {*} value Value to push
	 * @return {Number}       Size of the stack
	 */
	push(value) {
		this._array.push(value);
		return this._array.length;
	}

	/**
	 * Removes and returns the value on the top of the stack
	 * @return {*} Value on the top
	 */
	pop() {
		if (this._array.length === 0) {
			return null;
		} else {
			return this._array.pop();
			/**
			 * Alternative: 
			 * 	const spliced = this._array.splice(this._array.length - 1, 1);
			 * 	return spliced[0];
			 */
		}
	}

	/**
	 * Returns the value on the top of the stack
	 * @return {*} Value on the top
	 */
	peek() {
		return this._array.length === 0 ?
			null : this._array[this._array.length - 1];
	}

	/**
	 * Get size of the stack
	 * @return {Number} Size
	 */
	getSize() {
		return this._array.length;
	}
}

export default Stack1;