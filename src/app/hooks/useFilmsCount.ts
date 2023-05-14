export const useFilmCount = (count: number) => {
	if (count === 1) {
		return '1 фильм';
	}
	if (count >= 2 && count <= 4) {
		return `${count} фильма`;
	}
	return `${count} фильмов`;
};
