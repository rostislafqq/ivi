import { ReactNode, HTMLAttributes } from 'react';

export interface SliderViewportProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
