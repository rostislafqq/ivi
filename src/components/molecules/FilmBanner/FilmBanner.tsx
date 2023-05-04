import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './FilmBanner.module.scss';
import { FilmBannerProps } from './FilmBanner.types';

import { Badge, Button } from '@components/atoms';

export const FilmBanner: React.FC<FilmBannerProps> = ({ banner, ...props }) => {
	const btnText = {
		subscribe: 'Смотреть по подписке',
		free: 'Смотреть бесплатно',
		collections: 'Смотреть подборку',
	};

	return (
		<div className={styles.banner} {...props}>
			{!!banner.age && <Badge className={styles.banner__age}>{banner.age}</Badge>}

			<Link href={banner.href} className={styles.banner__link} title={banner.name}>
				<Image className={styles.banner__img} src={banner.banner} alt={banner.name} width={1216} height={370} />
			</Link>

			<Button className={styles['banner__btn-desktop']} variant="primary" size="normal">
				{btnText[banner.type]}
			</Button>
			<Button className={styles['banner__btn-mobile']} variant="primary" size="small">
				{btnText[banner.type]}
			</Button>
		</div>
	);
};
