import { ReactNode, HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	bg?: 'red' | 'orange' | 'gray' | 'green';
	size?: 'small' | 'normal';
}
