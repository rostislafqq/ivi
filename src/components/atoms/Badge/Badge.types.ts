import { ReactNode } from 'react';

export interface BadgeProps {
	children: ReactNode;
	className?: string;
	bg?: 'red' | 'orange' | 'gray' | 'green';
	size?: 'small' | 'normal';
}
