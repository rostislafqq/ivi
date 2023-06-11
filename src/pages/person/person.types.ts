interface FilmPerson {
	filmId: number;
	general: boolean;
	film: {
		nameOriginal: string;
		nameRu: string;
		logoUrl: string | null;
		rating: string;
		year: number;
		status: 'free' | 'subscribe' | 'buy';
	};
	role: {
		id: number;
		name: string;
		key: string;
	};
}

export interface PersonFilmData {
	id: number;
	nameOriginal: string;
	nameRu: string;
	url: string | null;
	growth: number;
	profession: string;
	birthplace: string;
	birthday: string;
	age: number;
	filmPersons: FilmPerson[];
}

export interface PersonProps {
	person: PersonFilmData;
}
