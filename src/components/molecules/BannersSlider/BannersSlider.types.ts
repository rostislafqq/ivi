import type { FilmBannerType } from '@/app/types';
import type { HTMLAttributes } from 'react';

export interface BannersSliderProps extends HTMLAttributes<HTMLDivElement> {
	banners?: FilmBannerType[];
	className?: string;
}
