import cn from 'classnames';
import React from 'react';

import { useResizeWindow } from '@/app/hooks';

import { SliderContext } from '@/app/providers';

import styles from './SliderWrapper.module.scss';

import { SliderWrapperProps } from './SliderWrapper.types';

export const SliderWrapper: React.FC<SliderWrapperProps> = ({ className, children }) => {
	const wrapperClasses = cn(styles.slider__wrapper, className);

	const { state } = React.useContext(SliderContext);
	const [windowWidth] = useResizeWindow();
	const sliderWrapperRef = React.useRef<null | HTMLDivElement>(null);

	const handleChangeSlideOffset = React.useCallback((currentSlide: number) => {
		if (sliderWrapperRef.current) {
			const sliderItem = sliderWrapperRef.current.querySelector('[data-type="slider-item"]');
			if (sliderItem) {
				const sliderItemCoords = sliderItem.getBoundingClientRect();
				const sliderOffset = Math.round(sliderItemCoords.width * currentSlide);
				sliderWrapperRef.current.style.transform = `translateX(-${sliderOffset}px)`;
			}
		}
	}, []);

	React.useEffect(() => {
		handleChangeSlideOffset(state.activeSlide);
	}, [state.activeSlide, windowWidth, handleChangeSlideOffset]);

	return (
		<div className={wrapperClasses} ref={sliderWrapperRef}>
			{children}
		</div>
	);
};
