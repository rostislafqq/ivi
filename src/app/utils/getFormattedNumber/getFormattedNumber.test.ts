import { getFormattedNumber } from './getFormattedNumber';

describe('getFormattedNumber', () => {
	it('should return the same number if it is less than 1000', () => {
		expect(getFormattedNumber(999)).toBe(999);
	});

	it('should return a formatted string for numbers between 1000 and 999_999', () => {
		expect(getFormattedNumber(1_000)).toBe('1K');
		expect(getFormattedNumber(1500)).toBe('1.5K');
		expect(getFormattedNumber(999_999)).toBe('999.999K');
	});

	it('should return a formatted string for numbers greater than or equal to 1_000_000', () => {
		expect(getFormattedNumber(1_000_000)).toBe('1M');
		expect(getFormattedNumber(1_500_000)).toBe('1.5M');
	});
});
