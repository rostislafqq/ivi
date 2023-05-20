import { ReactNode, HTMLAttributes } from 'react';

export interface SliderItemProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	_index?: number;
	className?: string;
}
