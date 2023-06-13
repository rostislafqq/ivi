import { BadgeAdmin, Countries, Gengre, NewFilmData, Roles } from '@/pages/admin/admin.types';

export interface AdminAddFilmProps {
	allGengres: Gengre[];
	allCountries: Countries[];
	allRoles: Roles[];
	allBadges: BadgeAdmin[];
	addNewFilm: (params: NewFilmData) => void;
	language?: 'ru' | 'en';
}
