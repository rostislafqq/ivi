import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './Button.module.scss';

import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
	className,
	size,
	type = 'button',
	href,
	variant,
	icon,
	onClick,
	children,
}) => {
	const btnClasses = cn(styles.btn, className, {
		// Sizes
		[styles['btn--small']]: size === 'small',
		[styles['btn--normal']]: size === 'normal',
		[styles['btn--full']]: size === 'full',

		// Variants
		[styles['btn--primary']]: variant === 'primary',
		[styles['btn--primary-gradient']]: variant === 'primary-gradient',
		[styles['btn--secondary']]: variant === 'secondary',
	});

	if (href) {
		return (
			<Link className={btnClasses} href={href} onClick={onClick}>
				<div className="row">
					{icon}
					{children}
				</div>
			</Link>
		);
	}
	return (
		// eslint-disable-next-line react/button-has-type
		<button className={btnClasses} type={type} onClick={onClick}>
			<div className="row">
				{icon}
				{children}
			</div>
		</button>
	);
};
