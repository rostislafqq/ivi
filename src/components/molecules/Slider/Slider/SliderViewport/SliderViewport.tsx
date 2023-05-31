import cn from 'classnames';
import React, { useRef, useEffect } from 'react';

import { useResizeWindow } from '@/app/hooks';
import { useSlider } from '@/app/providers';

import styles from './SliderViewport.module.scss';
import { SliderViewportProps } from './SliderViewport.types';

export const SliderViewport: React.FC<SliderViewportProps> = ({ className, children, ...props }) => {
	const {
		actions: { setViewportWidth },
	} = useSlider();
	const [windowWidth] = useResizeWindow();
	const viewportRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!viewportRef.current) return;

		setViewportWidth(viewportRef.current.getBoundingClientRect().width);
	}, [setViewportWidth, windowWidth]);

	return (
		<div className={cn(styles.slider__viewport, className)} ref={viewportRef} {...props}>
			{children}
		</div>
	);
};
