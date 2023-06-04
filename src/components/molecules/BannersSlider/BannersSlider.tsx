import cn from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';

import { FilmBannerLoaded, FilmBannerLoading } from '../FilmBanner';
import { Slider, SliderItem } from '../Slider';

import type { BannersSliderProps } from './BannersSlider.types';

import styles from './BannersSlider.module.scss';

export const BannersSlider: React.FC<BannersSliderProps> = ({ banners = [], className, ...props }) => (
	<Slider
		className={cn(styles['banners-slider'], className)}
		slidesPerView={1}
		spaceBetween={30}
		autoplay={{ delay: 10000, disableOnMouseEnter: true }}
		{...props}
	>
		{banners.length > 0
			? banners.map((banner) => (
					<SliderItem key={nanoid()} className={styles['banners-slider__item']}>
						<FilmBannerLoaded {...banner} data-testid="banners-slider__banner-loaded" />
					</SliderItem>
			  ))
			: Array(10)
					.fill(null)
					.map(() => (
						<SliderItem key={nanoid()} className={styles['banners-slider__item']}>
							<FilmBannerLoading data-testid="banners-slider__banner-loading" />
						</SliderItem>
					))}
	</Slider>
);
