export interface Gengre {
	id: number;
	genre: string;
}

export interface Countries {
	id: number;
	nameRu: string;
}

export interface Roles {
	id: number;
	name: string;
}

export interface BadgeAdmin {
	id: number;
	type: string;
}

export interface NewFilmData {
	nameOriginal: string;
	nameRu: string;
	coverUrl: string;
	logoUrl: string;
	filmLength: number;
	rating: number;
	year: number;
	ratingCount: number;
	description: string;
	ratingAgeLimits: string;
	type: string;
	status: string;
	countries: { id: number }[];
	genres: { id: number }[];
	personsfilm: {
		personId: string | number;
		general: boolean;
		role: number;
	}[];
	badge: number;
}
