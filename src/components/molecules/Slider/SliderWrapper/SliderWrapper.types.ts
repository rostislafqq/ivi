import { ReactNode, HTMLAttributes } from 'react';

export interface SliderWrapperProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	activeSlide: number;
	className?: string;
}
