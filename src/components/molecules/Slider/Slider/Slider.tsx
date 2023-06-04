import cn from 'classnames';
import React, { useMemo } from 'react';

import { useMediaQuery } from '@/app/hooks';

import { SliderProvider } from '@/app/providers';

import styles from './Slider.module.scss';
import { SliderProps } from './Slider.types';
import { SliderLeftArrow, SliderRightArrow } from './SliderArrow/SliderArrow';
import { SliderViewport } from './SliderViewport/SliderViewport';
import { SliderWrapper } from './SliderWrapper/SliderWrapper';

export const Slider: React.FC<SliderProps> = React.memo(
	({
		className,
		children,
		autoplay = { delay: 0, disableOnMouseEnter: false },
		slidesPerView = 1,
		spaceBetween = 0,
		_arrowLeftClassName,
		_arrowRightClassName,
		_viewportClassName,
		_wrapperClassName,
		...props
	}: SliderProps) => {
		const isTableScreen = useMediaQuery('(min-width: 576px)');
		const slidesCount = useMemo(
			() =>
				slidesPerView > 1
					? Math.ceil(React.Children.count(children) / (slidesPerView - 1))
					: React.Children.count(children),
			[children, slidesPerView],
		);

		return (
			<SliderProvider data={{ slidesCount, autoplay, slidesPerView, spaceBetween }}>
				<div className={cn(styles.slider, className)} {...props}>
					{isTableScreen && <SliderLeftArrow className={_arrowLeftClassName} />}

					<SliderViewport className={_viewportClassName}>
						<SliderWrapper className={_wrapperClassName}>{children}</SliderWrapper>
					</SliderViewport>

					{isTableScreen && <SliderRightArrow className={_arrowRightClassName} />}
				</div>
			</SliderProvider>
		);
	},
);
