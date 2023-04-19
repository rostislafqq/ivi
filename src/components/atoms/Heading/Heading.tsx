import cn from 'classnames';
import React from 'react';

import styles from './Heading.module.scss';

import type { HeadingProps } from './Heading.types';

export const Header: React.FC<HeadingProps> = ({
	label,
	headingLevel = 'h2',
	black = false,
	center = false,
	size = 'medium',
}) => {
	const labelClass = cn(styles.header, styles[`header--${size}`], {
		[styles['header--black']]: black,
		[styles['header--center']]: center,
	});

	switch (headingLevel) {
		case 'h1':
			return <h1 className={labelClass}>{label}</h1>;
		case 'h2':
			return <h2 className={labelClass}>{label}</h2>;
		case 'h3':
			return <h3 className={labelClass}>{label}</h3>;
		case 'h4':
			return <h4 className={labelClass}>{label}</h4>;
		case 'h5':
			return <h5 className={labelClass}>{label}</h5>;
		default:
			return null;
	}
};
