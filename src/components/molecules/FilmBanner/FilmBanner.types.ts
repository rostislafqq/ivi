import { HTMLAttributes } from 'react';

import { FilmBannerType } from '@app/types';

export interface FilmBannerProps extends HTMLAttributes<HTMLDivElement> {
	banner: FilmBannerType;
	className?: string;
}
