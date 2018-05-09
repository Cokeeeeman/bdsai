import binarySearch from '../binarySearch';

describe('binarySearch', () => {
	test('array not specified', () => {
		const array = undefined, target = 1;
		expect(binarySearch(array, target)).toBe(-1);
	});

	test('target not specified', () => {
		const array = [], target = undefined;
		expect(binarySearch(array, target)).toBe(-1);
	});

	test('empty array', () => {
		const array = [], target = 1;
		expect(binarySearch(array, target)).toBe(-1);
	});

	test('target in the array', () => {
		expect(binarySearch([2], 2)).toBe(0);
		expect(binarySearch([2, 6], 2)).toBe(0);
		expect(binarySearch([2, 6], 6)).toBe(1);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 2)).toBe(0);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 6)).toBe(1);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 10)).toBe(2);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 20)).toBe(3);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 30)).toBe(4);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 50)).toBe(5);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 100)).toBe(6);
	});

	test('target not in the array', () => {
		expect(binarySearch([2], 1)).toBe(-1);
		expect(binarySearch([2, 6], 10)).toBe(-1);
		expect(binarySearch([2, 6, 10, 20, 30, 50, 100], 55)).toBe(-1);
	});
});