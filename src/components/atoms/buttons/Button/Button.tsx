import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import type { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({
	className,
	size,
	type = 'button',
	href,
	variant,
	icon,
	endIcon,
	onClick,
	children,
	...props
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
			<Link className={btnClasses} href={href} onClick={onClick} {...props}>
				{icon}
				{children}
				{endIcon}
			</Link>
		);
	}
	return (
		// eslint-disable-next-line react/button-has-type
		<button className={btnClasses} type={type} onClick={onClick} {...props}>
			{icon}
			{children}
			{endIcon}
		</button>
	);
};
