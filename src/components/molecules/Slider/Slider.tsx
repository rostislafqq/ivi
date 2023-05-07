import cn from 'classnames';
import React from 'react';
import { useSwipeable } from 'react-swipeable';

import styles from './Slider.module.scss';

import { SliderProps } from './Slider.types';

import { WithMemoSliderArrow } from './SliderArrow/SliderArrow';
import { WithMemoSliderItem } from './SliderItem/SliderItem';
import { SliderViewport } from './SliderViewport/SliderViewport';
import { SliderWrapper } from './SliderWrapper/SliderWrapper';

import { useMediaQuery } from '@/app/hooks';

export const Slider: React.FC<SliderProps> = ({
	className,
	children,
	slidesPerView,
	spaceBetween,
	autoplay = { delay: 0, disableOnMouseEnter: false },
	_arrowLeftClassName,
	_arrowRightClassName,
	_viewportClassName,
	_wrapperClassName,
	_itemClassName,
	...props
}) => {
	const sliderClasses = cn(styles.slider, className);

	const [activeSlide, setActiveSlide] = React.useState(0);
	const [autoOffset, setAutoOffset] = React.useState(true);
	const isTableScreen = useMediaQuery('(min-width: 576px)');
	const itemsCount = React.useMemo(() => React.Children.count(children), [children]);

	const handlePrevElement = React.useCallback(() => {
		setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : itemsCount - 1));
	}, [itemsCount]);

	const handleNextElement = React.useCallback(() => {
		setActiveSlide((prevSlide) => (prevSlide < itemsCount - 1 ? prevSlide + 1 : 0));
	}, [itemsCount]);

	const handleOffAutoOffset = React.useCallback(() => {
		if (autoplay.delay > 0 && autoplay.disableOnMouseEnter) {
			setAutoOffset(false);
		}
	}, [autoplay, setAutoOffset]);

	const handleOnAutoOffset = React.useCallback(() => {
		if (autoplay.delay > 0 && autoplay.disableOnMouseEnter) {
			setAutoOffset(true);
		}
	}, [autoplay, setAutoOffset]);

	const handlersSwipe = useSwipeable({
		onSwipedRight: () => {
			handlePrevElement();
		},
		onSwipedLeft: () => {
			handleNextElement();
		},
	});

	React.useEffect(() => {
		if (!autoplay) return () => {};

		const interval = setInterval(() => {
			handleNextElement();
		}, autoplay.delay);

		if (!autoOffset) {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [autoplay, autoOffset, handleNextElement]);

	return (
		<div className={sliderClasses} {...handlersSwipe} {...props}>
			{isTableScreen && (
				<WithMemoSliderArrow
					className={_arrowLeftClassName}
					direction="left"
					handlePrevElement={handlePrevElement}
				/>
			)}

			<SliderViewport className={_viewportClassName}>
				<SliderWrapper className={_wrapperClassName} activeSlide={activeSlide}>
					{React.Children.map(children, (child, index) => (
						<WithMemoSliderItem
							className={_itemClassName}
							active={index === activeSlide}
							onMouseEnter={handleOffAutoOffset}
							onMouseLeave={handleOnAutoOffset}
						>
							{child}
						</WithMemoSliderItem>
					))}
				</SliderWrapper>
			</SliderViewport>

			{isTableScreen && (
				<WithMemoSliderArrow
					className={_arrowRightClassName}
					direction="right"
					handleNextElement={handleNextElement}
				/>
			)}
		</div>
	);
};
