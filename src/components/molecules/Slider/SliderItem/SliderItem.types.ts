import { ReactNode, HTMLAttributes } from 'react';

export interface SliderItemProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	active: boolean;
	className?: string;
}
