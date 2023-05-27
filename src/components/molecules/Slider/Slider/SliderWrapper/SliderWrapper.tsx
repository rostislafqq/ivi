import cn from 'classnames';
import React, { useRef, useEffect } from 'react';

import { useResizeWindow } from '@/app/hooks';

import { useSlider } from '@/app/providers';

import styles from './SliderWrapper.module.scss';

import { SliderWrapperProps } from './SliderWrapper.types';

export const SliderWrapper: React.FC<SliderWrapperProps> = ({ className, children }) => {
	const wrapperClasses = cn(styles.slider__wrapper, className);

	const { state } = useSlider();
	const [windowWidth] = useResizeWindow();
	const sliderWrapperRef = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		function handleChangeSlideOffset(currentSlide: number) {
			if (!sliderWrapperRef.current) return;

			const sliderItem = sliderWrapperRef.current.querySelector('[data-testid="slider__item"]');

			const sliderItemCoords = sliderItem?.getBoundingClientRect();
			const sliderOffset = Math.round(sliderItemCoords?.width ?? 0) * currentSlide;
			sliderWrapperRef.current.style.transform = `translateX(-${sliderOffset}px)`;
		}

		handleChangeSlideOffset(state.activeSlide);
	}, [state.activeSlide, windowWidth]);

	return (
		<div className={wrapperClasses} ref={sliderWrapperRef} data-testid="slider__wrapper">
			{React.Children.map(children as React.ReactElement[], (child: React.ReactElement, index: number) =>
				React.cloneElement(child, { _index: index }),
			)}
		</div>
	);
};
