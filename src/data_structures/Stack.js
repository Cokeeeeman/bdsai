class Stack {
	/**
	 * Initialize a stack
	 */
	constructor() {
		this.array = [];
	}

	/**
	 * Push a value to the top of the stack
	 * @param  {*} value Value to push
	 * @return {Number}       Size of the stack
	 */
	push(value) {
		this.array.push(value);
		return this.array.length;
	}

	/**
	 * Removes and returns the value on the top of the stack
	 * @return {*} Value on the top
	 */
	pop() {
		if (this.array.length === 0) {
			return null;
		} else {
			return this.array.pop();
			/**
			 * Alternative: 
			 * 	const spliced = this.array.splice(this.array.length - 1, 1);
			 * 	return spliced[0];
			 */
		}
	}

	/**
	 * Returns the value on the top of the stack
	 * @return {*} Value on the top
	 */
	peek() {
		return this.array.length === 0 ?
			null : this.array[this.array.length - 1];
	}
}