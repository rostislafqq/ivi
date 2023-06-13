import { FilmType } from '@/app/types';

interface FilmographyFilms {
	filmId: number;
	filmName: string;
	year: number;
	rating: string | number;
	filmImg: string;
}

export interface PersonTemplateProps {
	photo: string;
	nameRus: string;
	nameEng: string;
	mainFilms: FilmType[];
	filmographyFilms: FilmographyFilms[];
	roles: string[];
	changeRole?: (tab: string) => void;
	filmsCount: number;
	language?: 'ru' | 'en';
}
