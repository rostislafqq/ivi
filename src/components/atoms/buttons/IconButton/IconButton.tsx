import cn from 'classnames';
import React from 'react';

import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButton.types';

import { Button } from '../Button/Button';

export const IconButton: React.FC<IconButtonProps> = ({
	className,
	size,
	type = 'button',
	variant,
	onClick,
	children,
	...props
}) => {
	const btnClasses = cn(styles['icon-btn'], className, {
		// Size
		[styles['icon-btn--normal']]: size === 'normal',
		[styles['icon-btn--big']]: size === 'big',
	});

	return (
		<Button className={btnClasses} type={type} variant={variant} onClick={onClick} {...props}>
			<div className={styles['icon-btn__row']}>
				<span>{children}</span>
			</div>
		</Button>
	);
};
