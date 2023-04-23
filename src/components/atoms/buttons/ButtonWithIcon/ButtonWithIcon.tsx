import cn from 'classnames';
import React from 'react';

import styles from './ButtonWithIcon.module.scss';
import { ButtonWithIconProps } from './ButtonWithIcon.types';

import { Button } from '../Button/Button';

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
	className,
	size,
	icon,
	type = 'button',
	variant,
	onClick,
	children,
	...props
}) => {
	const btnClasses = cn(styles['btn-icon'], className);

	return (
		<Button className={btnClasses} variant={variant} size={size} type={type} onClick={onClick} {...props}>
			<div className={styles['btn-icon__row']}>
				<span>{icon}</span>
				{children}
			</div>
		</Button>
	);
};
