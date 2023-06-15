import { FilmType } from './film';

export interface CollectionType {
	id: number;
	name: string;
	films: FilmType[];
}
