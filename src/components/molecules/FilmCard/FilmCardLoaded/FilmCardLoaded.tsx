import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Heading, FilmStatus } from '@/components/atoms';

import filmCardStyles from '../FilmCard.module.scss';

import type { FilmCardProps } from './FilmCardLoaded.types';

import styles from './FilmCardLoaded.module.scss';

export const FilmCardLoaded: React.FC<FilmCardProps> = ({ className, film, ...props }) => {
	const [isHovered, setIsHovered] = React.useState(false);

	const cardClasses = cn(filmCardStyles['film-card'], styles['card-loaded'], className);

	return (
		<div
			className={cardClasses}
			data-testid="film-card"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...props}
		>
			<Link className={styles['card-loaded__link']} href={film.href}>
				<div
					className={cn(filmCardStyles['film-card__previewBox'], styles['card-loaded__previewBox'])}
					data-testid="film-card__previewBox"
					data-hover={isHovered}
				>
					<Image
						className={styles['card-loaded__preview']}
						src={film.preview}
						alt={film.name}
						width={234}
						height={360}
						data-testid="film-card__preview"
					/>
				</div>
				<div className={filmCardStyles['film-card__descriptionBox']}>
					<Heading className={styles['card-loaded__name']} tag="h4" data-testid="film-card__name">
						{film.name}
					</Heading>
					<FilmStatus
						className={styles['card-loaded__status']}
						status={film.status}
						data-testid="film-card__status"
					/>
				</div>
			</Link>
		</div>
	);
};
