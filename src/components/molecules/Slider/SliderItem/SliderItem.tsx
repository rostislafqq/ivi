import cn from 'classnames';
import React from 'react';

import styles from './SliderItem.module.scss';
import { SliderItemProps } from './SliderItem.types';

import { SliderContext } from '@/app/providers';

export const SliderItem: React.FC<SliderItemProps> = ({ className, index, children, ...props }) => {
	const { state, actions } = React.useContext(SliderContext);

	const itemClasses = cn(styles.slider__item, className);

	return (
		<div
			className={itemClasses}
			data-type="slider-item"
			data-active={state.activeSlide === index}
			onMouseEnter={() => actions.handleAutoSliding(false)}
			onMouseLeave={() => actions.handleAutoSliding(true)}
			{...props}
		>
			{children}
		</div>
	);
};

export const WithMemoSliderItem = React.memo(SliderItem);
