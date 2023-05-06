import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './FilmBanner.module.scss';
import { FilmBannerProps } from './FilmBanner.types';

import { useMediaQuery } from '@/app/hooks';
import { Badge, Button } from '@components/atoms';

export const FilmBanner: React.FC<FilmBannerProps> = ({ banner, ...props }) => {
	const isTableScreen = useMediaQuery('(min-width: 576px)');
	const btnText = {
		subscribe: 'Смотреть по подписке',
		free: 'Смотреть бесплатно',
		collections: 'Смотреть подборку',
	};

	return (
		<div className={styles.banner} {...props}>
			{!!banner.age && (
				<Badge className={styles.banner__age} data-testid="badge">
					{banner.age}
				</Badge>
			)}

			<Link href={banner.href} className={styles.banner__link} title={banner.name} data-testid="link">
				<Image
					className={styles.banner__img}
					src={banner.banner}
					alt={banner.name}
					width={1216}
					height={370}
					priority
					data-testid="image"
				/>
			</Link>

			{isTableScreen ? (
				<Button className={styles.banner__btn} variant="primary" size="normal" data-testid="button">
					{btnText[banner.type]}
				</Button>
			) : (
				<Button className={styles.banner__btn} variant="primary" size="small" data-testid="button">
					{btnText[banner.type]}
				</Button>
			)}
		</div>
	);
};
