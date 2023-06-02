import { FilmType } from '@/app/types';

interface Creators {
	href: string;
	name: string;
	surname: string;
}

export interface FilmTemplateUndersideProps {
	filmType: string;
	films?: FilmType[];
	filmName: string;
	creatorsCards: Creators[];
	filmPersonHref: string;
}
