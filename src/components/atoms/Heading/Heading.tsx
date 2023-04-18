import cn from 'classnames';
import React from 'react';

import styles from './Heading.module.scss';

import type { HeadingProps } from './Heading.types';

export const Header: React.FC<HeadingProps> = ({
	label,
	main = false,
	black = false,
	center = false,
	size = 'medium',
}) => {
	const labelClass = cn({
		[styles.header]: true,
		[styles[`header__${size}`]]: true,
		[styles.header__black]: black,
		[styles.header__center]: center,
	});

	switch (main) {
		case true:
			return <h1 className={labelClass}>{label}</h1>;
		case false:
			return <h2 className={labelClass}>{label}</h2>;
		default:
			return null;
	}
};
