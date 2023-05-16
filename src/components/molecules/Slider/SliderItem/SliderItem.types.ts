import { ReactNode, HTMLAttributes } from 'react';

export interface SliderItemProps extends HTMLAttributes<HTMLDivElement> {
	index: number;
	children: ReactNode;
	className?: string;
}
