import { FilmStatusType } from './FilmStatusType';

export interface FilmType {
	id: number;
	nameOriginal: string;
	nameRu: string;
	logoUrl?: string;
	coverUrl?: string;
	filmLength: number;
	ratingCount: number;
	slogan?: string;
	description?: string;
	shortDescription?: string;
	type: string;
	ratingMpaa: string;
	serial: boolean;
	year: number;
	url: string;
	rating: number;
	badgeId: number;
	status: FilmStatusType;
	ratingAgeLimits: number;
}
