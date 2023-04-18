export interface HeadingProps {
	/**
	 * h1,h2
	 */
	main: boolean;
	/**
	 * содержимое
	 */
	/**
	 * tiny-15 , small-20 , medium-24 , large-40 , huge-56
	 */
	size: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
	label?: string;
	/**
	 * черный для проверки
	 */
	black?: boolean;
	/**
	 * необходимость выравнивания по центру
	 */
	center?: boolean;
}
