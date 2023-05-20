import cn from 'classnames';
import React from 'react';

import { useSlider } from '@/app/providers';

import styles from './SliderItem.module.scss';
import { SliderItemProps } from './SliderItem.types';

export const SliderItem: React.FC<SliderItemProps> = ({ className, children, _index = 0, ...props }) => {
	const { state, actions } = useSlider();

	const itemClasses = cn(styles.slider__item, className);

	return (
		<div
			className={itemClasses}
			data-testid="slider__item"
			data-active={state.activeSlide === _index}
			onMouseEnter={() => actions.offAutoSliding()}
			onMouseLeave={() => actions.onAutoSliding()}
			{...props}
		>
			{children}
		</div>
	);
};

export const WithMemoSliderItem = React.memo(SliderItem);
