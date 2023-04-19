import { ReactNode } from 'react';

export interface ButtonProps {
	size?: 'small' | 'medium' | 'large';
	/**
	 * содержимое кнопки
	 */
	children: ReactNode;
	/**
	 * параметры границы
	 */
	border?: 'white' | 'static';
	/**
	 * свг фон у кнопки
	 */
	backgroundSvg?: boolean;
	/**
	 * lightBlack-темный , primary-красный , pay-разноцветный , static-без фона
	 */
	variant: 'lightBlack' | 'primary' | 'pay' | 'static';
	onClick?: () => void;
}
