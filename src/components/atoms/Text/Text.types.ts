import { ReactNode } from 'react';

export interface TextProps {
	children?: ReactNode;
	color?: 'white' | 'red' | 'blue' | 'gray';
	size?: 'small' | 'medium';
	type?: 'p' | 'span' | 'div';
	/**
	 * это квадрат? задавать вместе с цветом (будет бэкграундом)
	 */
	square?: boolean;
	/**
	 * выравнивание по центру
	 */
	center: boolean;
}
