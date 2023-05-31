interface Actors {
	name: string;
	surname: string;
	image: string;
	href: string;
}

export interface FilmInfoSectionProps {
	heading: string;
	year: number;
	duration: string;
	yearOld: number;
	filmParams: string[];
	badges: string[];
	langs: string[];
	rating: number;
	actors: Actors[];
	accordionText: string;
	btnValues: string[];
	languages: string[];
	assessment: number;
	extra: string;
}
