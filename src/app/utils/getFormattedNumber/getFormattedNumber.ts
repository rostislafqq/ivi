export function getFormattedNumber(number: number) {
	if (number >= 1_000_000) {
		return `${number / 1_000_000}M`;
	}
	if (number >= 1000) {
		return `${number / 1000}K`;
	}
	return number;
}
