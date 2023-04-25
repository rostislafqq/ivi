import cn from 'classnames';
import React from 'react';

import styles from './Badge.module.scss';

import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({ className, size, bg, children }) => {
	const badgeClasses = cn(styles.badge, className, {
		// Sizes
		[styles['badge--small']]: size === 'small',
		[styles['badge--normal']]: size === 'normal',

		// Bg
		[styles['badge--red']]: bg === 'red',
		[styles['badge--orange']]: bg === 'orange',
		[styles['badge--gray']]: bg === 'gray',
		[styles['badge--green']]: bg === 'green',
	});

	return (
		<div className={badgeClasses}>
			<span>{children}</span>
		</div>
	);
};
