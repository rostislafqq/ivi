import cn from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';
import { useSwipeable } from 'react-swipeable';

import styles from './Slider.module.scss';

import { SliderProps } from './Slider.types';

import { SliderArrow } from './SliderArrow/SliderArrow';
import { SliderItem } from './SliderItem/SliderItem';
import { SliderViewport } from './SliderViewport/SliderViewport';
import { SliderWrapper } from './SliderWrapper/SliderWrapper';

import { useMediaQuery } from '@/app/hooks';

export const Slider: React.FC<SliderProps> = ({
	className,
	children,
	_arrowLeftClassName,
	_arrowRightClassName,
	_viewportClassName,
	_wrapperClassName,
	_itemClassName,
	...props
}) => {
	const sliderClasses = cn(styles.slider, className);

	const [activeSlide, setActiveSlide] = React.useState(0);
	const isTableScreen = useMediaQuery('(min-width: 576px)');
	const itemsCount = React.useMemo(() => React.Children.count(children), [children]);

	const handlePrevElement = React.useCallback(() => {
		setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : itemsCount - 1));
	}, [itemsCount]);

	const handleNextElement = React.useCallback(() => {
		setActiveSlide((prevSlide) => (prevSlide < itemsCount - 1 ? prevSlide + 1 : 0));
	}, [itemsCount]);

	const handlersSwipe = useSwipeable({
		onSwipedRight: () => {
			handlePrevElement();
		},
		onSwipedLeft: () => {
			handleNextElement();
		},
	});

	return (
		<div className={sliderClasses} {...handlersSwipe} {...props}>
			{isTableScreen && (
				<SliderArrow className={_arrowLeftClassName} direction="left" handlePrevElement={handlePrevElement} />
			)}

			<SliderViewport className={_viewportClassName}>
				<SliderWrapper className={_wrapperClassName} activeSlide={activeSlide}>
					{React.Children.map(children, (child, index) => (
						<SliderItem key={nanoid()} className={_itemClassName} active={index === activeSlide}>
							{child}
						</SliderItem>
					))}
				</SliderWrapper>
			</SliderViewport>

			{isTableScreen && (
				<SliderArrow className={_arrowRightClassName} direction="right" handleNextElement={handleNextElement} />
			)}
		</div>
	);
};
