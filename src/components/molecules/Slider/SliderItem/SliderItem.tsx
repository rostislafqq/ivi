import cn from 'classnames';
import React from 'react';

import { useSlider } from '@/app/providers';

import styles from './SliderItem.module.scss';
import { SliderItemProps } from './SliderItem.types';

export const SliderItem: React.FC<SliderItemProps> = ({ className, children, _index = 0, ...props }) => {
	const { state, actions } = useSlider();

	function handleMouseEnter() {
		if (!state.autoplay.disableOnMouseEnter) return;

		actions.offAutoSliding();
	}

	function handleMouseLeave() {
		if (!state.autoplay.disableOnMouseEnter) return;

		actions.onAutoSliding();
	}

	return (
		<div
			className={cn(styles.slider__item, className)}
			data-testid="slider__item"
			data-active={state.activeSlide === _index}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			{children}
		</div>
	);
};

export const WithMemoSliderItem = React.memo(SliderItem);
