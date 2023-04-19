import { ReactNode } from 'react';

export interface TextProps {
	children?: ReactNode;
	color?: 'white' | 'red' | 'blue' | 'gray';
	size?: 'small' | 'medium';
	type?: 'p' | 'span' | 'div';
	square?: boolean;
	center: boolean;
}
