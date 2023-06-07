import { FilmType } from '@/app/types';

interface FilmographyFilms {
	filmId: number;
	filmName: string;
	year: number;
	rating: string;
	filmImg: string;
}

export interface PersonTemplateProps {
	photo: string;
	nameRus: string;
	nameEng: string;
	mainFilms: FilmType[];
	filmographyFilms: FilmographyFilms[];
	roles: string[];
	changeRole?: (role: string) => void;
}
