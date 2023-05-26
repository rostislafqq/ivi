import cn from 'classnames';
import React from 'react';

import { Slider, SliderItem } from '../Slider';

import type { BannersSliderProps } from './BannersSlider.types';

import styles from './BannersSlider.module.scss';

export const BannersSlider: React.FC<BannersSliderProps> = ({ className, children, ...props }) => {
	const bannersSliderClasses = cn(styles['banners-slider'], className);

	return (
		<Slider
			className={bannersSliderClasses}
			autoplay={{ delay: 10000, disableOnMouseEnter: true }}
			_arrowLeftClassName={styles['banners-slider__arrow-left']}
			_arrowRightClassName={styles['banners-slider__arrow-right']}
			{...props}
		>
			{React.Children.map(children, (child) => (
				<SliderItem>{child}</SliderItem>
			))}
		</Slider>
	);
};
