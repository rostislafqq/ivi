export const useFilmCount = (value: number | string) => {
	if (typeof value !== 'number') {
		return value;
	}
	if (value === 1) {
		return '1 фильм';
	}
	if (value >= 2 && value <= 4) {
		return `${value} фильма`;
	}
	return `${value} фильмов`;
};
