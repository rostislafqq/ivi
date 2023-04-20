import { ReactNode } from 'react';

export interface BadgeProps {
	children: ReactNode;
	className?: string;
	bg?: 'red' | 'orange' | 'gray';
	size?: 'small' | 'normal';
}
