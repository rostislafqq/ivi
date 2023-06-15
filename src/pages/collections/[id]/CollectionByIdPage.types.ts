import type { CollectionType, SelectOptionType } from '@/app/types';

export interface SortByOptionType {
	label: string;
	value: string;
}

export interface FiltersStateType {
	genres: SelectOptionType[];
	countries: SelectOptionType[];
	rating: number;
	stars: number;
}

export interface CollectionBySlugProps {
	collection: CollectionType;
}
