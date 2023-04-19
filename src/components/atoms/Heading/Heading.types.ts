import { ReactNode } from 'react';

export interface HeadingProps {
	children: ReactNode;
	/**
	 * уровень заголовка h1,h2...h5
	 */
	headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	/**
	 * tiny-15 , small-20 , medium-24 , large-40 , huge-56
	 */
	size: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
	/**
	 * черный для проверки
	 */
	black?: boolean;
	/**
	 * необходимость выравнивания по центру
	 */
	center?: boolean;
}
