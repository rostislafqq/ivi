import cn from 'classnames';
import React from 'react';

import { useSlider } from '@/app/providers';
import { Icon } from '@/components/atoms';
import ArrowLeft from '@assets/icons/arrow-left.svg';
import ArrowRight from '@assets/icons/arrow-right.svg';

import styles from './SliderArrow.module.scss';
import { SliderArrowProps } from './SliderArrow.types';

export const SliderLeftArrow: React.FC<SliderArrowProps> = ({ className, ...props }) => {
	const { state, actions } = useSlider();

	if (state.activeSlide === 0) return null;

	return (
		<button
			className={cn(styles['slider__arrow-left'], className)}
			type="button"
			onClick={() => actions.moveLeftSlide()}
			data-testid="slider__arrow-left"
			{...props}
		>
			<Icon icon={ArrowLeft} width={30} />
		</button>
	);
};

export const SliderRightArrow: React.FC<SliderArrowProps> = ({ className, ...props }) => {
	const { actions } = useSlider();

	return (
		<button
			className={cn(styles['slider__arrow-right'], className)}
			type="button"
			onClick={() => actions.moveRightSlide()}
			data-testid="slider__arrow-right"
			{...props}
		>
			<Icon icon={ArrowRight} width={30} />
		</button>
	);
};

export const WithMemoSliderLeftArrow = React.memo(SliderLeftArrow);
export const WithMemoSliderRightArrow = React.memo(SliderRightArrow);
