import { renderHook } from '@testing-library/react';

import { useSort } from './useSort';

describe('useSort', () => {
	it('should sort an array of numbers in ascending order', () => {
		const items = [5, 2, 8, 3, 1, 4];
		const compareFn = (a: number, b: number) => a - b;

		const { result } = renderHook(() => useSort(items, compareFn));

		expect(result.current).toEqual([1, 2, 3, 4, 5, 8]);
	});

	it('should sort an array of strings in descending order', () => {
		const items = ['apple', 'banana', 'cherry', 'date'];
		const compareFn = (a: string, b: string) => b.localeCompare(a);

		const { result } = renderHook(() => useSort(items, compareFn));

		expect(result.current).toEqual(['date', 'cherry', 'banana', 'apple']);
	});

	it('should sort an array of objects by a property in ascending order', () => {
		type ItemType = {
			name: string;
			age: number;
		};

		const items: ItemType[] = [
			{ name: 'John', age: 30 },
			{ name: 'Jane', age: 25 },
			{ name: 'Bob', age: 40 },
		];
		const compareFn = (a: ItemType, b: ItemType) => a.age - b.age;

		const { result } = renderHook(() => useSort(items, compareFn));

		expect(result.current).toEqual([
			{ name: 'Jane', age: 25 },
			{ name: 'John', age: 30 },
			{ name: 'Bob', age: 40 },
		]);
	});

	it('should sort an array of objects by a property in descending order', () => {
		type ItemType = {
			name: string;
			age: number;
		};

		const items: ItemType[] = [
			{ name: 'John', age: 30 },
			{ name: 'Jane', age: 25 },
			{ name: 'Bob', age: 40 },
		];
		const compareFn = (a: ItemType, b: ItemType) => b.age - a.age;

		const { result } = renderHook(() => useSort(items, compareFn));

		expect(result.current).toEqual([
			{ name: 'Bob', age: 40 },
			{ name: 'John', age: 30 },
			{ name: 'Jane', age: 25 },
		]);
	});
});
