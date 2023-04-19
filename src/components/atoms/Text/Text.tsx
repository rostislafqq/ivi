import cn from 'classnames';
import React from 'react';

import styles from './Text.module.scss';

import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({
	children,
	size = 'small',
	color = 'white',
	square = false,
	type = 'p',
	center = false,
}) => {
	const textClass = cn(styles.text, styles[`text--${color}`], styles[`text--${size}`], {
		[styles[`text--square`]]: square,
		[styles[`text--square--${color}`]]: square,
		[styles[`text--center`]]: center,
	});

	switch (type) {
		case 'p':
			return <p className={textClass}>{children}</p>;
		case 'span':
			return <span className={textClass}>{children}</span>;
		case 'div':
			return <div className={textClass}>{children}</div>;
		default:
			return null;
	}
};
