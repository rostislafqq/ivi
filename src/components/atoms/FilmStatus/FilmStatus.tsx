import cn from 'classnames';
import React from 'react';

import styles from './FilmStatus.module.scss';
import { FilmStatusProps } from './FilmStatus.types';

import { Text } from '../typography';

export const FilmStatus: React.FC<FilmStatusProps> = ({ className, variant, children }) => {
	const filmStatusClasses = cn(styles['film-status'], className, {
		[styles['film-status--free']]: variant === 'free',
		[styles['film-status--subscribe']]: variant === 'subscribe',
		[styles['film-status--buy']]: variant === 'buy',
	});

	return (
		<Text className={filmStatusClasses} tag="div">
			{children}
		</Text>
	);
};