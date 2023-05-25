import cn from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';

import { FilmBannerLoaded, FilmBannerLoading } from '../FilmBanner';
import { Slider, SliderItem } from '../Slider';

import type { BannersSliderProps } from './BannersSlider.types';

import styles from './BannersSlider.module.scss';

export const BannersSlider: React.FC<BannersSliderProps> = ({ banners = [], className, ...props }) => {
	const bannersSliderClasses = cn(styles['banners-slider'], className);

	return (
		<Slider
			className={bannersSliderClasses}
			autoplay={{ delay: 10000, disableOnMouseEnter: true }}
			_arrowLeftClassName={styles['banners-slider__arrow-left']}
			_arrowRightClassName={styles['banners-slider__arrow-right']}
			{...props}
		>
			{banners.length > 0
				? banners.map((banner) => (
						<SliderItem key={nanoid()}>
							<FilmBannerLoaded {...banner} data-testid="banners-slider__banner-loaded" />
						</SliderItem>
				  ))
				: Array(10)
						.fill(null)
						.map(() => (
							<SliderItem key={nanoid()}>
								<FilmBannerLoading data-testid="banners-slider__banner-loading" />
							</SliderItem>
						))}
		</Slider>
	);
};
