import cn from 'classnames';
import React from 'react';

import { useSlider } from '@/app/providers';
import { Icon } from '@/components/atoms';
import ArrowLeft from '@assets/icons/arrow-left.svg';
import ArrowRight from '@assets/icons/arrow-right.svg';

import styles from './SliderArrow.module.scss';
import { SliderArrowProps } from './SliderArrow.types';

export const SliderLeftArrow: React.FC<SliderArrowProps> = React.memo(({ className, ...props }: SliderArrowProps) => {
	const {
		state,
		actions: { moveLeftSlide, offAutoSliding, onAutoSliding },
	} = useSlider();

	return (
		<button
			className={cn(styles['slider__arrow-left'], className, {
				hide: state.activeSlide === 0,
			})}
			type="button"
			onClick={() => moveLeftSlide()}
			onMouseEnter={() => offAutoSliding()}
			onMouseLeave={() => onAutoSliding()}
			data-testid="slider__arrow-left"
			{...props}
		>
			<Icon icon={ArrowLeft} width={state.spaceBetween} height={state.spaceBetween} />
		</button>
	);
});

export const SliderRightArrow: React.FC<SliderArrowProps> = React.memo(({ className, ...props }: SliderArrowProps) => {
	const {
		state,
		actions: { moveRightSlide, offAutoSliding, onAutoSliding },
	} = useSlider();

	return (
		<button
			className={cn(styles['slider__arrow-right'], className, {
				hide: state.activeSlide === state.slidesCount - 1,
			})}
			type="button"
			onClick={() => moveRightSlide()}
			onMouseEnter={() => offAutoSliding()}
			onMouseLeave={() => onAutoSliding()}
			data-testid="slider__arrow-right"
			{...props}
		>
			<Icon icon={ArrowRight} width={state.spaceBetween} height={state.spaceBetween} />
		</button>
	);
});
