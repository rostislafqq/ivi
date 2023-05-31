import type { FilmType } from '@/app/types';
import type { HTMLAttributes } from 'react';

export interface FilmsSliderProps extends HTMLAttributes<HTMLDivElement> {
	films?: FilmType[];
	className?: string;
}
