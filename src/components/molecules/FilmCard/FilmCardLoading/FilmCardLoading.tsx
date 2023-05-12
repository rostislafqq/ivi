import cn from 'classnames';
import React from 'react';

import filmCardStyles from '../FilmCard.module.scss';

import { LoadingBox } from '@/components/atoms';

import type { FilmCardLoadingProps } from './FilmCardLoading.types';

import styles from './FilmCardLoading.module.scss';

export const FilmCardLoading: React.FC<FilmCardLoadingProps> = ({ className, ...props }) => {
	const cardClasses = cn(filmCardStyles['film-card'], styles['card-loading'], className);

	return (
		<div className={cardClasses} {...props}>
			<div className={filmCardStyles['film-card__previewBox']}>
				<LoadingBox className={styles['card-loading__preview']} rounded="normal" />
			</div>
			<div className={filmCardStyles['film-card__descriptionBox']}>
				<LoadingBox className={styles['card-loading__name']} rounded="small" />
				<LoadingBox className={styles['card-loading__status']} rounded="small" />
			</div>
		</div>
	);
};
