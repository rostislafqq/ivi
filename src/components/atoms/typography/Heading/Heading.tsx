import cn from 'classnames';
import React from 'react';

import type { HeadingProps } from './Heading.types';

import styles from './Heading.module.scss';

export const Heading: React.FC<HeadingProps> = ({ className, tag = 'h2', children, ...props }) => {
	const headingClasses = cn(styles.heading, className, {
		[styles['heading--h1']]: tag === 'h1',
		[styles['heading--h2']]: tag === 'h2',
		[styles['heading--h3']]: tag === 'h3',
		[styles['heading--h4']]: tag === 'h4',
	});

	switch (tag) {
		case 'h1':
			return (
				<h1 className={headingClasses} {...props}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={headingClasses} {...props}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={headingClasses} {...props}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 className={headingClasses} {...props}>
					{children}
				</h4>
			);
		default:
			return null;
	}
};
