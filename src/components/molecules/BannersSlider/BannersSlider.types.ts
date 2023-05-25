import { HTMLAttributes } from 'react';

import type { FilmBannerType } from '@/app/types';

export interface BannersSliderProps extends HTMLAttributes<HTMLDivElement> {
	banners?: FilmBannerType[];
	className?: string;
}
