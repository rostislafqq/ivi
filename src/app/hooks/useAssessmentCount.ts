export const useAssessmentCount = (count: number) => {
	if (count === 1) {
		return '1 оценка';
	}
	if (
		count % 10 > 1 &&
		count % 10 < 5 &&
		count % 100 !== 11 &&
		count % 100 !== 12 &&
		count % 100 !== 13 &&
		count % 100 !== 14
	) {
		return `${count} оценки`;
	}
	return `${count} оценок`;
};
