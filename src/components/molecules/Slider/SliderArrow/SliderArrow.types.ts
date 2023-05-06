import { HTMLAttributes } from 'react';

export interface SliderArrowProps extends HTMLAttributes<HTMLButtonElement> {
	direction: 'left' | 'right';
	handlePrevElement?: () => void;
	handleNextElement?: () => void;
	className?: string;
}
