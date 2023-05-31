import { HTMLAttributes } from 'react';

import { FilmStatusType } from '@/app/types';

export interface FilmStatusProps extends HTMLAttributes<HTMLDivElement> {
	status: FilmStatusType;
	className?: string;
}
