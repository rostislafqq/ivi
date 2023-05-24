export const useAssessmentCount = (count: number) => {
	if (count === 1) {
		return '1 оценка';
	}
	if (count % 10 > 1 && count % 10 < 5) {
		return `${count} оценки`;
	}
	return `${count} оценок`;
};
