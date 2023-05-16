import cn from 'classnames';
import React from 'react';

import styles from './BannersSlider.module.scss';

import { Slider, SliderItem } from '../Slider';

import type { BannersSliderProps } from './BannersSlider.types';

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
			{React.Children.map(children, (child, index) => (
				<SliderItem index={index}>{child}</SliderItem>
			))}
		</Slider>
	);
};
