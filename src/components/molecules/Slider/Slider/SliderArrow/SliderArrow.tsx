import cn from 'classnames';
import React from 'react';

import { SliderContext } from '@/app/providers';
import { Icon } from '@/components/atoms';
import ArrowLeft from '@assets/icons/arrow-left.svg';
import ArrowRight from '@assets/icons/arrow-right.svg';

import styles from './SliderArrow.module.scss';
import { SliderArrowProps } from './SliderArrow.types';

export const SliderArrow: React.FC<SliderArrowProps> = ({ direction, className, ...props }) => {
	const { actions } = React.useContext(SliderContext);

	switch (direction) {
		case 'left':
			return (
				<button
					className={cn(styles['slider__arrow-left'], className)}
					type="button"
					onClick={() => actions.handleSlide('left')}
					data-testid="slider__arrow-left"
					{...props}
				>
					<Icon icon={ArrowLeft} width={30} />
				</button>
			);
		case 'right':
			return (
				<button
					className={cn(styles['slider__arrow-right'], className)}
					type="button"
					onClick={() => actions.handleSlide('right')}
					data-testid="slider__arrow-right"
					{...props}
				>
					<Icon icon={ArrowRight} width={30} />
				</button>
			);
		default:
			return null;
	}
};

export const WithMemoSliderArrow = React.memo(SliderArrow);
