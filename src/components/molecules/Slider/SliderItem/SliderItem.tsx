import cn from 'classnames';
import React, { useEffect, useRef, useCallback } from 'react';

import { useResizeWindow } from '@/app/hooks';
import { useSlider } from '@/app/providers';

import styles from './SliderItem.module.scss';
import { SliderItemProps } from './SliderItem.types';

export const SliderItem: React.FC<SliderItemProps> = ({ className, children, _index = 0, ...props }) => {
	const {
		state,
		actions: { onAutoSliding, offAutoSliding, setSlideWidth },
	} = useSlider();
	const itemRef = useRef<HTMLDivElement | null>(null);
	const [windowWidth] = useResizeWindow();

	const handleMouseEnter = useCallback(() => {
		if (!state.autoplay.disableOnMouseEnter) return;

		offAutoSliding();
	}, [offAutoSliding, state.autoplay.disableOnMouseEnter]);

	const handleMouseLeave = useCallback(() => {
		if (!state.autoplay.disableOnMouseEnter) return;

		onAutoSliding();
	}, [onAutoSliding, state.autoplay.disableOnMouseEnter]);

	const setInlineStyles = useCallback(() => {
		if (!itemRef.current) return;

		const itemWidth =
			state.slidesPerView > 1
				? (
						(state.viewportWidth - state.spaceBetween * (state.slidesPerView - 1)) /
						state.slidesPerView
				  ).toFixed(3)
				: state.viewportWidth;

		itemRef.current.style.cssText = `
				width: ${itemWidth}px;
				margin-right: ${state.spaceBetween}px;
			`;

		const child = itemRef.current.children[0] as HTMLElement;
		child.style.setProperty('--slide-width', `${itemWidth}px`);
	}, [state.slidesPerView, state.viewportWidth, state.spaceBetween]);

	useEffect(() => {
		setInlineStyles();
	}, [setInlineStyles]);

	useEffect(() => {
		if (!itemRef.current) return;

		setSlideWidth(itemRef.current.getBoundingClientRect().width);
	}, [windowWidth, setSlideWidth]);

	return (
		<div
			className={cn(styles.slider__item, className)}
			ref={itemRef}
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
