import { capitalize } from './capitalize';

describe('capitalize', () => {
	it('should transform the string correctly', () => {
		expect(capitalize('hello world')).toBe('Hello world');
		expect(capitalize('world')).toBe('World');
	});

	it('should return an empty string if the input is empty', () => {
		expect(capitalize('')).toBe('');
	});
});
