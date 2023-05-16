import cn from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import styles from './CreatorsCard.module.scss';

import { CreatorsCardProps } from './CreatorsCard.type';

import { useFilmCount } from '@/app/hooks';

import { Text } from '@/components/atoms';

export const CreatorsCard: React.FC<CreatorsCardProps> = ({
	image = '',
	className,
	href = '/',
	name,
	surname,
	size,
	extra = '',
	type,
}) => {
	const CreatorsCardClass = cn(className, styles.card, [styles[`card--${size}`]]);
	const ImageClass = cn(styles[`card--${size}__image--${type}`], styles[`card--${size}__image`], {
		[styles.card__noPhoto]: image.length === 0,
	});

	const st = useFilmCount(extra);

	return (
		<Link className={CreatorsCardClass} href={href}>
			<div className={type === 'square' ? `${ImageClass} ${styles[`card--square`]}` : ImageClass}>
				{image.length > 0 && (
					<Image
						className={ImageClass}
						height={size === 'small' ? 88 : 115}
						width={size === 'small' ? 88 : 115}
						alt={name}
						src={image}
					/>
				)}
			</div>
			<Text className={`${styles[`card--${size}__text--bold`]} ${styles[`card--${size}__text`]}`} tag="p">
				{name}
				<br />
				{surname}
			</Text>
			<Text className={`${styles[`card--${size}__text`]}`} tag="span">
				{st}
			</Text>
		</Link>
	);
};
