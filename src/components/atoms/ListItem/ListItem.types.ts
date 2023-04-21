import { ReactNode } from 'react';

export interface ListItemProps {
	children: ReactNode;
	className?: string;
	type?: 'square' | 'circle';
}
