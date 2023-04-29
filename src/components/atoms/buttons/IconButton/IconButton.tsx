import cn from 'classnames';
import React from 'react';

import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButton.types';

import { Button } from '../Button/Button';

export const IconButton: React.FC<IconButtonProps> = ({
	className,
	size,
	type = 'button',
	href,
	variant,
	onClick,
	children,
}) => {
	const btnClasses = cn(styles['icon-btn'], className, {
		// Size
		[styles['icon-btn--normal']]: size === 'normal',
		[styles['icon-btn--big']]: size === 'big',
	});

	return (
		<Button className={btnClasses} type={type} href={href} variant={variant} onClick={onClick}>
			{children}
		</Button>
	);
};
