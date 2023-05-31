import cn from 'classnames';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

import { useResizeWindow } from '@/app/hooks';

import { FilmCardLoaded, FilmCardLoading } from '../FilmCard';

import { Slider, SliderItem } from '../Slider';

import type { FilmsSliderProps } from './FilmsSlider.types';

import styles from './FilmSlider.module.scss';

export const FilmsSlider: React.FC<FilmsSliderProps> = ({ films = [], className, ...props }) => {
	const [slidesPerView, setSlidesPerView] = useState(7);
	const [windowWidth] = useResizeWindow();

	useEffect(() => {
		if (windowWidth > 320 && windowWidth < 425) setSlidesPerView(2);
		else if (windowWidth > 425 && windowWidth < 576) setSlidesPerView(3);
		else if (windowWidth > 576 && windowWidth < 768) setSlidesPerView(4);
		else if (windowWidth > 768 && windowWidth < 992) setSlidesPerView(5);
		else if (windowWidth > 992 && windowWidth < 1280) setSlidesPerView(6);
		else if (windowWidth > 1280) setSlidesPerView(7);
	}, [windowWidth]);

	return (
		<Slider
			className={cn(styles['films-slider'], className)}
			slidesPerView={slidesPerView}
			spaceBetween={24}
			_viewportClassName={styles['films-slider__viewport']}
			{...props}
		>
			{films.length > 0
				? films.map((film) => (
						<SliderItem key={nanoid()}>
							<FilmCardLoaded {...film} />
						</SliderItem>
				  ))
				: Array(10)
						.fill(null)
						.map(() => (
							<SliderItem key={nanoid()}>
								<FilmCardLoading />
							</SliderItem>
						))}
		</Slider>
	);
};
