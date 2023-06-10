export interface FilmData {
	id: number;
	nameOriginal: string;
	nameRu: string;
	url: string;
	logoUrl: string | null;
	coverUrl: string | null;
	filmLength: string;
	rating: number;
	ratingCount: number;
	year: number;
	slogan: string | null;
	description: string;
	shortDescription: string | null;
	type: string;
	ratingMpaa: string | null;
	ratingAgeLimits: number | null | string;
	serial: boolean;
	lastSync: string;
	genres: {
		id: number;
		genre: string;
	}[];
	countries: {
		id: number;
		name: string;
		nameRu: string;
	}[];
	personsfilm: {
		personId: number;
		general: boolean;
		role: {
			name: string;
			key: string;
		};
		person: {
			nameOriginal: string;
			nameRu: string;
			url: string;
		};
	}[];
	badge: {
		id: number;
		type: 'gray' | 'red' | 'orange' | 'green';
		content: string;
	};
	comments: {
		id: number;
		comment: string;
		createdAt: string;
		commentId: number | null;
	}[];
}
export type FilmProps = {
	film: FilmData;
};
