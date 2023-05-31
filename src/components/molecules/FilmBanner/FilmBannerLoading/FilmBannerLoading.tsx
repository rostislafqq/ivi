import cn from 'classnames';
import React from 'react';

import { LoadingBox } from '@/components/atoms';

import filmBannerStyles from '../FilmBanner.module.scss';

import type { FilmBannerLoadingProps } from './FilmBannerLoading.types';

import styles from './FilmBannerLoading.module.scss';

export const FilmBannerLoading: React.FC<FilmBannerLoadingProps> = ({ className, ...props }) => (
	<div className={cn(filmBannerStyles.banner, styles['banner-loading'], className)} {...props}>
		<LoadingBox
			className={styles['banner-loading__loading-box']}
			rounded="normal"
			data-testid="film-banner__loading-box"
		/>
	</div>
);
