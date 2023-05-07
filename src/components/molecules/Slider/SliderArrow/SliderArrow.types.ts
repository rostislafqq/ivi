import { HTMLAttributes } from 'react';

export interface SliderArrowProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	direction: 'left' | 'right';
	handlePrevElement?: () => void;
	handleNextElement?: () => void;
}
