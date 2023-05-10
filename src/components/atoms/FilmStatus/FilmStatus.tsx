import cn from 'classnames';
import React from 'react';

import { Text } from '../typography';

import styles from './FilmStatus.module.scss';
import { FilmStatusProps } from './FilmStatus.types';

export const FilmStatus: React.FC<FilmStatusProps> = ({ className, status }) => {
	const filmStatusClasses = cn(styles['film-status'], className, {
		[styles['film-status--free']]: status === 'free',
		[styles['film-status--subscribe']]: status === 'subscribe',
		[styles['film-status--buy']]: status === 'buy',
	});

	const filmStatusText = {
		subscribe: 'Подписка',
		free: 'Бесплатно',
		buy: 'Покупка',
	};

	return (
		<Text className={filmStatusClasses} tag="div">
			{filmStatusText[status]}
		</Text>
	);
};
