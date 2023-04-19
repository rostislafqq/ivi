import { ReactNode } from 'react';

export interface BadgeProps {
	backgroundColor?: 'red' | 'orange' | 'gray';
	size?: 'small' | 'medium';
	children: ReactNode;
}
