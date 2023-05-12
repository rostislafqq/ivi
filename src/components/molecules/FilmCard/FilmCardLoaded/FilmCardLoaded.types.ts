import { HTMLAttributes } from 'react';

import { FilmStatusType } from '@/components/atoms/FilmStatus/FilmStatus.types';

export interface FilmCardProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	preview: string;
	status: FilmStatusType;
	href: string;
	className?: string;
}
