import cn from 'classnames';
import React, { useMemo } from 'react';

import { useMediaQuery } from '@/app/hooks';

import { SliderProvider } from '@/app/providers';

import styles from './Slider.module.scss';
import { SliderProps } from './Slider.types';
import {
	WithMemoSliderLeftArrow as SliderLeftArrow,
	WithMemoSliderRightArrow as SliderRightArrow,
} from './SliderArrow/SliderArrow';
import { SliderViewport } from './SliderViewport/SliderViewport';
import { SliderWrapper } from './SliderWrapper/SliderWrapper';

export const Slider: React.FC<SliderProps> = ({
	className,
	children,
	autoplay = { delay: 0, disableOnMouseEnter: false },
	_arrowLeftClassName,
	_arrowRightClassName,
	_viewportClassName,
	_wrapperClassName,
	...props
}) => {
	const isTableScreen = useMediaQuery('(min-width: 576px)');

	const sliderClasses = cn(styles.slider, className);
	const slidesCount = useMemo(() => React.Children.count(children), [children]);

	return (
		<div className={sliderClasses} {...props}>
			<SliderProvider data={{ slidesCount, autoplay }}>
				{isTableScreen && <SliderLeftArrow className={_arrowLeftClassName} />}

				<SliderViewport className={_viewportClassName}>
					<SliderWrapper className={_wrapperClassName}>{children}</SliderWrapper>
				</SliderViewport>

				{isTableScreen && <SliderRightArrow className={_arrowRightClassName} />}
			</SliderProvider>
		</div>
	);
};
