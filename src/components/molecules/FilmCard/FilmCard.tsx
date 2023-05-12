import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Heading, FilmStatus, LoadingBox } from '@/components/atoms';

import type { FilmCardProps } from './FilmCard.types';

import styles from './FilmCard.module.scss';

export const FilmCard: React.FC<FilmCardProps> = ({ className, name, preview, status, href, loading = false }) => {
	const cardClasses = cn(styles['film-card'], className);

	return (
		<div className={cardClasses} data-type="film-card">
			<Link className={styles['film-card__link']} href={href}>
				<div className={styles['film-card__previewBox']}>
					{loading ? (
						<LoadingBox className={styles['film-card__previewLoading']} rounded="normal" />
					) : (
						<Image
							className={styles['film-card__preview']}
							src={preview}
							alt={name}
							width={234}
							height={360}
						/>
					)}
				</div>
				<div className={styles['film-card__descriptionBox']}>
					{loading ? (
						<LoadingBox style={{ width: '90%', height: '18px' }} rounded="small" />
					) : (
						<Heading className={styles['film-card__name']} tag="h4">
							{name}
						</Heading>
					)}

					{loading ? (
						<LoadingBox style={{ width: '70%', height: '16px' }} rounded="small" />
					) : (
						<FilmStatus className={styles['film-card__status']} status={status} />
					)}
				</div>
			</Link>
		</div>
	);
};
