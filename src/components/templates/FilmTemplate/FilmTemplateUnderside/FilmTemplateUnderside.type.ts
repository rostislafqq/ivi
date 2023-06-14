import { FilmType } from '@/app/types';
import { ReviewType } from '@/app/types/ReviewType';

interface Creator {
	href: string;
	name: string;
	surname: string;
	image: string;
}

export interface FilmTemplateUndersideProps {
	filmType: string;
	films?: FilmType[] | undefined;
	filmName: string;
	creatorsCards: Creator[];
	filmPersonHref?: string | number;
	reviews: ReviewType[];
	lang?: 'ru' | 'en';
}
