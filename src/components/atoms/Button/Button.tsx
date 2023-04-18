import cn from 'classnames';
import React from 'react';

import styles from './button.module.scss';

import type { ButtonProps } from './Button.types';

export const Button = ({
	variant = 'static',
	size = 'medium',
	border = 'static',
	label,
	backgroundSvg = false,
	...props
}: ButtonProps) => {
	const btnClass = cn({
		[styles.button]: true,
		[styles[`button__${size}`]]: true,
		[styles[`button__${variant}`]]: true,
		[styles[`button__border__${border}`]]: !!border,
		[styles.button__backgroundImage__svg]: backgroundSvg,
	});

	return (
		<button type="button" className={btnClass} {...props}>
			{label}
		</button>
	);
};
