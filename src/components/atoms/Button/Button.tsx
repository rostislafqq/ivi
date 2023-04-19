import cn from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'static',
	size = 'medium',
	border = 'static',
	backgroundSvg = false,
	...props
}) => {
	const btnClass = cn(styles.button, {
		[styles[`button--${size}`]]: true,
		[styles[`button--${variant}`]]: true,
		[styles[`button--border--${border}`]]: !!border,
		[styles['button--backgroundImage--svg']]: backgroundSvg,
	});

	return (
		<button type="button" className={btnClass} {...props}>
			{children}
		</button>
	);
};
