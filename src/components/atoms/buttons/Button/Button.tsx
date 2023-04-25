import cn from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
	className,
	size,
	type = 'button',
	variant,
	icon,
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

	return (
		// eslint-disable-next-line react/button-has-type
		<button className={btnClasses} type={type} onClick={onClick} {...props}>
			<div className={styles.btn__row}>
				{icon}
				{children}
			</div>
		</button>
	);
};
