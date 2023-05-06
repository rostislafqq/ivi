import cn from 'classnames';
import React from 'react';
import { useSwipeable } from 'react-swipeable';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import styles from './BannersSlider.module.scss';

import { useResizeWindow } from '@/app/hooks';
import ArrowLeft from '@assets/icons/arrow-left.svg';
import ArrowRight from '@assets/icons/arrow-right.svg';
import { Icon } from '@components/atoms';

import type { BannersSliderProps } from './BannersSlider.types';

export const BannersSlider: React.FC<BannersSliderProps> = ({ className, children, ...props }) => {
	const itemsCount = React.Children.count(children);

	const [activeSlide, setActiveSlide] = React.useState(0);
	const [windowWidth] = useResizeWindow();

	const sliderWrapperRef = React.useRef<null | HTMLDivElement>(null);

	const bannersSliderClasses = cn(styles['banners-slider'], className);

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
		handleChangeSlideOffset(activeSlide);
	}, [activeSlide, windowWidth, handleChangeSlideOffset]);

	return (
		<div className={bannersSliderClasses} {...props} {...handlersSwipe}>
			{windowWidth >= 576 && (
				<button className={styles['banners-slider__arrow-left']} type="button" onClick={handlePrevElement}>
					<Icon icon={ArrowLeft} width={30} />
				</button>
			)}

			<div className={styles['banners-slider__viewport']}>
				<div className={styles['banners-slider__wrapper']} ref={sliderWrapperRef}>
					{React.Children.map(children, (child, index) => (
						<div
							className={styles['banners-slider__item']}
							data-type="slider-item"
							data-active={activeSlide === index}
						>
							{child}
						</div>
					))}
				</div>
			</div>

			{windowWidth >= 576 && (
				<button className={styles['banners-slider__arrow-right']} type="button" onClick={handleNextElement}>
					<Icon icon={ArrowRight} width={30} />
				</button>
			)}
		</div>
	);
};
