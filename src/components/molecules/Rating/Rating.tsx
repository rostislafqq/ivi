import cn from 'classnames';

import React from 'react';

import styles from './Rating.module.scss';
import { RatingProps } from './Rating.types';

import { useAssessmentCount } from '@/app/hooks';

import { Button, Text } from '@/components/atoms';

export const Rating: React.FC<RatingProps> = ({ extra, assessment = 2, className = '', size, rating }) => {
	const assCount = useAssessmentCount(assessment);
	const ratingClass = cn(styles[`rating--${size}__ratCount`], {
		[styles[`rating--${size}__ratCount--green`]]: rating >= 7,
		[styles[`rating--${size}__ratCount--gray`]]: rating < 7,
	});
	const ratingSmallClass = cn({
		[styles[`rating--small--green`]]: rating >= 7,
		[styles[`rating--small--gray`]]: rating < 7,
	});

	switch (size) {
		case 'large':
			return (
				<div className={`${styles['rating--large']} ${className}`}>
					<div className={ratingClass}>{rating}</div>
					<div className={styles.rating__textBlock}>
						<Text className={styles.rating__textBlock__title} tag="p">
							Рейтинг Иви
						</Text>
						<Text className={styles.rating__textBlock__extra} tag="p">
							{extra}
						</Text>
						<Text className={styles.rating__textBlock__assCount} tag="p">
							{assCount}
						</Text>
					</div>
					<Button className={styles.rating__btn}>Оценить</Button>
				</div>
			);
		case 'small':
			return (
				<div className={`${styles['rating--small']} ${className}`}>
					<div className={ratingSmallClass}>{rating}</div>
				</div>
			);
		default:
			return <p>что-то не так</p>;
	}
};
