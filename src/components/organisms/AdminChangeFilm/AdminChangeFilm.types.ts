import { BadgeAdmin, Countries, Gengre, NewFilmData, Roles, SearchingFilmsData } from '@/pages/admin/admin.types';
import { FilmData } from '@/pages/watch/watch.types';

export interface AdminChangeFilmProps {
	setSerchFilm: React.Dispatch<React.SetStateAction<string>>;
	serchFilm: string;
	foundFilms: SearchingFilmsData | undefined;
	setChosenFilm: React.Dispatch<React.SetStateAction<number | undefined>>;
	chosenFilmData: FilmData;
	allGengres: Gengre[];
	allCountries: Countries[];
	allRoles: Roles[];
	allBadges: BadgeAdmin[];
	addNewFilm: (params: NewFilmData) => void;
	deleteFilm: (id: number) => void;
	language?: 'ru' | 'en';
}
