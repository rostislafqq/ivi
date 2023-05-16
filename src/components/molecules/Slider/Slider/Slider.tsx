import cn from 'classnames';
import React from 'react';

import styles from './Slider.module.scss';
import { SliderProps } from './Slider.types';
import { WithMemoSliderArrow } from './SliderArrow/SliderArrow';
import { SliderViewport } from './SliderViewport/SliderViewport';
import { SliderWrapper } from './SliderWrapper/SliderWrapper';

import { useMediaQuery } from '@/app/hooks';
import { SliderProvider } from '@/app/providers';

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
	const slidesCount = React.useMemo(() => React.Children.count(children), [children]);

	return (
		<div className={sliderClasses} {...props}>
			<SliderProvider data={{ slidesCount, autoplay }}>
				{isTableScreen && <WithMemoSliderArrow className={_arrowLeftClassName} direction="left" />}

				<SliderViewport className={_viewportClassName}>
					<SliderWrapper className={_wrapperClassName}>{children}</SliderWrapper>
				</SliderViewport>

				{isTableScreen && <WithMemoSliderArrow className={_arrowRightClassName} direction="right" />}
			</SliderProvider>
		</div>
	);
};
