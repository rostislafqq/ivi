import cn from 'classnames';
import React from 'react';

import { LoadingBox } from '@/components/atoms';

import filmCardStyles from '../FilmCard.module.scss';

import type { FilmCardLoadingProps } from './FilmCardLoading.types';

import styles from './FilmCardLoading.module.scss';

export const FilmCardLoading: React.FC<FilmCardLoadingProps> = ({ className, ...props }) => {
	const cardClasses = cn(filmCardStyles['film-card'], styles['card-loading'], className);

	return (
		<div className={cardClasses} data-testid="film-card" {...props}>
			<div className={filmCardStyles['film-card__previewBox']}>
				<LoadingBox
					className={styles['card-loading__preview']}
					rounded="normal"
					data-testid="film-card__preview"
				/>
			</div>
			<div className={filmCardStyles['film-card__descriptionBox']}>
				<LoadingBox className={styles['card-loading__name']} rounded="small" data-testid="film-card__name" />
				<LoadingBox
					className={styles['card-loading__status']}
					rounded="small"
					data-testid="film-card__status"
				/>
			</div>
		</div>
	);
};
