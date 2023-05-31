import { FilmStatusType } from './FilmStatusType';

export interface FilmType {
	name: string;
	preview: string;
	status: FilmStatusType;
	href: string;
}
