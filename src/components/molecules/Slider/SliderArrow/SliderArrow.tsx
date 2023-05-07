import cn from 'classnames';
import React from 'react';

import styles from './SliderArrow.module.scss';
import { SliderArrowProps } from './SliderArrow.types';

import { Icon } from '@/components/atoms';
import ArrowLeft from '@assets/icons/arrow-left.svg';
import ArrowRight from '@assets/icons/arrow-right.svg';

export const SliderArrow: React.FC<SliderArrowProps> = ({
	direction,
	className,
	handlePrevElement,
	handleNextElement,
	...props
}) => {
	if (direction === 'left' && handlePrevElement) {
		return (
			<button
				className={cn(styles['slider__arrow-left'], className)}
				type="button"
				onClick={handlePrevElement}
				{...props}
			>
				<Icon icon={ArrowLeft} width={30} />
			</button>
		);
	}
	if (direction === 'right' && handleNextElement) {
		return (
			<button
				className={cn(styles['slider__arrow-right'], className)}
				type="button"
				onClick={handleNextElement}
				{...props}
			>
				<Icon icon={ArrowRight} width={30} />
			</button>
		);
	}

	return null;
};

export const WithMemoSliderArrow = React.memo(SliderArrow);
