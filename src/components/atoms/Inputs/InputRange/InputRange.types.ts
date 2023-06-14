import { ChangeEventHandler } from 'react';

export interface InputRangeProps {
	value: number;
	onChange: ChangeEventHandler<HTMLInputElement>;
	step?: number;
	minValue?: number;
	maxValue?: number;
	className?: string;
}
