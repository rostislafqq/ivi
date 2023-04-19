import cn from 'classnames';
import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
	size?: 'small' | 'medium' | 'large';
	/**
	 * содержимое кнопки
	 */
	label?: string;
	/**
	 * параметры границы
	 */
	border?: 'white' | 'static';
	/**
	 * свг фон у кнопки
	 */
	backgroundSvg?: boolean;
	/**
	 * lightBlack-темный , primary-красный , pay-разноцветный , static-без фона
	 */
	variant: 'lightBlack' | 'primary' | 'pay' | 'static';
	onClick?: () => void;
}

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
		<button type="button" className={btnClass}>
			{label}
		</button>
	);
};
