import { FilmStatusType } from '@/components/atoms/FilmStatus/FilmStatus.types';

export interface FilmCardProps {
	name: string;
	preview: string;
	status: FilmStatusType;
	href: string;
	loading: boolean;
	className?: string;
}
