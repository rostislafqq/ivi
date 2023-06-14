import cn from 'classnames';
import React from 'react';

import { getFormattedNumber } from '@/app/utils';

import type { InputRangeProps } from './InputRange.types';

import styles from './InputRange.module.scss';

export const InputRange: React.FC<InputRangeProps> = ({
	value,
	onChange,
	className = '',
	minValue = 0,
	maxValue = 100,
	step = 1,
}) => (
	<div className={cn(styles['input-range__wrapper'], className)}>
		<input
			className={styles['input-range']}
			type="range"
			step={step}
			value={value}
			min={minValue}
			max={maxValue}
			onChange={onChange}
		/>
		<div className={styles['input-range__display']}>{getFormattedNumber(value)}</div>
	</div>
);
