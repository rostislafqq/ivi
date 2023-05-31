import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useMediaQuery } from '@/app/hooks';

import { Badge, Button } from '@components/atoms';

import filmBannerStyles from '../FilmBanner.module.scss';

import type { FilmBannerLoadedProps } from './FilmBannerLoaded.types';

import styles from './FilmBannerLoaded.module.scss';

export const FilmBannerLoaded: React.FC<FilmBannerLoadedProps> = ({
	name,
	href,
	age,
	banner,
	type,
	className,
	...props
}) => {
	const isTableScreen = useMediaQuery('(min-width: 576px)');
	const btnText = {
		subscribe: 'Смотреть по подписке',
		free: 'Смотреть бесплатно',
		collections: 'Смотреть подборку',
	};

	return (
		<div className={cn(filmBannerStyles.banner, styles['banner-loaded'], className)} {...props}>
			{!!age && (
				<Badge className={styles['banner-loaded__age']} data-testid="badge">
					{age}
				</Badge>
			)}

			<Link href={href} className={styles['banner-loaded__link']} title={name} data-testid="link">
				<Image
					className={styles['banner-loaded__image']}
					src={banner}
					alt={name}
					width={1216}
					height={370}
					priority
					data-testid="image"
				/>
			</Link>

			{isTableScreen ? (
				<Button className={styles['banner-loaded__btn']} variant="primary" size="normal" data-testid="button">
					{btnText[type]}
				</Button>
			) : (
				<Button className={styles['banner-loaded__btn']} variant="primary" size="small" data-testid="button">
					{btnText[type]}
				</Button>
			)}
		</div>
	);
};
