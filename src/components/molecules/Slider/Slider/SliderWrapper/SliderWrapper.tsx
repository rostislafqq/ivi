import cn from 'classnames';
import React, { useRef, useEffect, useCallback } from 'react';

import { useSlider } from '@/app/providers';

import styles from './SliderWrapper.module.scss';

import { SliderWrapperProps } from './SliderWrapper.types';

export const SliderWrapper: React.FC<SliderWrapperProps> = ({ className, children }) => {
	const wrapperClasses = cn(styles.slider__wrapper, className);

	const { state } = useSlider();
	const sliderWrapperRef = useRef<null | HTMLDivElement>(null);

	const handleChangeSlideOffset = useCallback(() => {
		if (!sliderWrapperRef.current) return;

		const sliderOffset =
			state.slidesPerView > 1
				? (state.viewportWidth - state.slideWidth) * state.activeSlide
				: (state.viewportWidth + state.spaceBetween) * state.activeSlide;
		const wrapperWidth = (state.viewportWidth + state.spaceBetween) * state.slidesCount;

		sliderWrapperRef.current.style.cssText = `
				transform: translateX(-${sliderOffset}px);
				width: ${wrapperWidth}px;
			`;
	}, [
		state.activeSlide,
		state.viewportWidth,
		state.spaceBetween,
		state.slidesCount,
		state.slidesPerView,
		state.slideWidth,
	]);

	useEffect(() => {
		handleChangeSlideOffset();
	}, [handleChangeSlideOffset]);

	return (
		<div className={wrapperClasses} ref={sliderWrapperRef} data-testid="slider__wrapper">
			{React.Children.map(children as React.ReactElement[], (child: React.ReactElement, index: number) =>
				React.cloneElement(child, { _index: index }),
			)}
		</div>
	);
};
