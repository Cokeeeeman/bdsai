import Stack2 from '../Stack2';

describe('Stack2', () => {
	test('constructor()', () => {
		const stack = new Stack2();
		expect(stack.getSize()).toBe(0);
	});

	test('push()', () => {
		const stack = new Stack2();
		expect(stack.push(1)).toBe(1);
	});

	describe('pop()', () => {
		test('empty stack', () => {
			const stack = new Stack2();
			expect(stack.pop()).toBe(null);
		});

		test('nonempty stack', () => {
			const stack = new Stack2();
			stack.push(1);
			stack.push(2);
			stack.push(3);
			expect(stack.pop()).toBe(3);
			expect(stack.getSize()).toBe(2);
		});
	});

	describe('peek()', () => {
		test('empty stack', () => {
			const stack = new Stack2();
			expect(stack.peek()).toBe(null);
		});

		test('nonempty stack', () => {
			const stack = new Stack2();
			stack.push(1);
			stack.push(2);
			stack.push(3);
			expect(stack.peek()).toBe(3);
		});
	});

	test('getSize()', () => {
		const stack = new Stack2();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		expect(stack.getSize()).toBe(3);
	});
});