import { HTMLAttributes } from 'react';

import { FilmType } from '@app/types';

export interface FilmCardProps extends HTMLAttributes<HTMLDivElement> {
	film: FilmType;
	className?: string;
}
