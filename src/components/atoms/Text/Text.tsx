import cn from 'classnames';
import React from 'react';

import styles from './Text.module.scss';

import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({ className, tag = 'p', children }) => {
	const textClasses = cn(styles.text, className);

	switch (tag) {
		case 'p':
			return <p className={textClasses}>{children}</p>;
		case 'span':
			return <span className={textClasses}>{children}</span>;
		case 'div':
			return <div className={textClasses}>{children}</div>;
		default:
			return null;
	}
};
