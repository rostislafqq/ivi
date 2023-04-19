import cn from 'classnames';
import React from 'react';

import styles from './Badge.module.scss';

import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({ children, size = 'medium', backgroundColor = 'red' }) => {
	const labelClass = cn(styles.badge, {
		[styles[`badge--${size}`]]: true,
		[styles[`badge--backgroundColor--${backgroundColor}`]]: true,
	});

	return <p className={labelClass}>{children}</p>;
};
