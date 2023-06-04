import cn from 'classnames';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';

import { useResizeWindow } from '@/app/hooks';

import { Review } from '../Review/Review';
import { Slider, SliderItem } from '../Slider';

import type { ReviewsSliderProps } from './ReviewsSlider.types';

import styles from './ReviewsSlider.module.scss';

export const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ className, reviews = [], ...props }) => {
	const [slidesPerView, setSlidesPerView] = useState(4);
	const [windowWidth] = useResizeWindow();

	useEffect(() => {
		if (windowWidth > 1200) setSlidesPerView(4);
		else if (windowWidth > 1024 && windowWidth < 1200) setSlidesPerView(3);
		else if (windowWidth > 576 && windowWidth < 1024) setSlidesPerView(2);
		else if (windowWidth > 320 && windowWidth < 576) setSlidesPerView(1);
	}, [windowWidth]);

	if (!reviews.length) return null;

	return (
		<Slider
			className={cn(styles['reviews-slider'], className)}
			slidesPerView={slidesPerView}
			spaceBetween={24}
			_viewportClassName={styles['reviews-slider__viewport']}
			{...props}
		>
			{reviews.map((review) => (
				<SliderItem key={nanoid()}>
					<Review type="card" {...review} data-testid="review" />
				</SliderItem>
			))}
		</Slider>
	);
};
