import cn from 'classnames';
import React from 'react';

import styles from './Text.module.scss';

import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({ className, tag = 'p', children, ...props }) => {
	const textClasses = cn(styles.text, className);

	switch (tag) {
		case 'p':
			return (
				<p className={textClasses} {...props}>
					{children}
				</p>
			);
		case 'span':
			return (
				<span className={textClasses} {...props}>
					{children}
				</span>
			);
		case 'div':
			return (
				<div className={textClasses} {...props}>
					{children}
				</div>
			);
		default:
			return null;
	}
};
