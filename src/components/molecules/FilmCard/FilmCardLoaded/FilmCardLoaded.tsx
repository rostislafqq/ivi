import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import filmCardStyles from '../FilmCard.module.scss';

import { Heading, FilmStatus } from '@/components/atoms';

import type { FilmCardProps } from './FilmCardLoaded.types';

import styles from './FilmCardLoaded.module.scss';

export const FilmCardLoaded: React.FC<FilmCardProps> = ({ className, name, preview, status, href, ...props }) => {
	const [isHovered, setIsHovered] = React.useState(false);

	const cardClasses = cn(filmCardStyles['film-card'], styles['card-loaded'], className);

	return (
		<div
			className={cardClasses}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...props}
		>
			<Link className={styles['card-loaded__link']} href={href}>
				<div
					className={cn(filmCardStyles['film-card__previewBox'], styles['card-loaded__previewBox'])}
					data-hover={isHovered}
				>
					<Image
						className={styles['card-loaded__preview']}
						src={preview}
						alt={name}
						width={234}
						height={360}
					/>
				</div>
				<div className={filmCardStyles['film-card__descriptionBox']}>
					<Heading className={styles['card-loaded__name']} tag="h4">
						{name}
					</Heading>
					<FilmStatus className={styles['card-loaded__status']} status={status} />
				</div>
			</Link>
		</div>
	);
};
