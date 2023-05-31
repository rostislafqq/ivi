import React from 'react';

import { Text } from '@/components/atoms';

import styles from './FilmExtraInfo.module.scss';
import { FilmExtraInfoProps } from './FilmExtraInfo.types';

export const FilmExtraInfo: React.FC<FilmExtraInfoProps> = ({ className = '', langs, badges = [] }) => (
	<div className={`${styles.FilmExtraInfo} ${className}`}>
		<div className={styles.FilmExtraInfo__options}>
			<Text className={styles.FilmExtraInfo__title} tag="p">
				Языки
			</Text>
			<Text className={styles.FilmExtraInfo__valuesContainer} tag="p">
				{langs.map((val, index) => (
					<Text key={val} className={styles.FilmExtraInfo__values} tag="span">
						{val} {index !== langs.length - 1 ? ', ' : ''}
					</Text>
				))}
			</Text>
		</div>
		<div className={styles.FilmExtraInfo__options__Extra}>
			<Text tag="p">
				Изображение и звук.
				<Text className={`${styles['FilmExtraInfo__options__Extra--sm']}`} tag="span">
					Фактическое качество зависит от устройства и ограничений правообладателя.
				</Text>
			</Text>
		</div>
		<div className={styles.FilmExtraInfo__badgesContainer}>
			{badges.map((val) => (
				<Text className={styles.FilmExtraInfo__badge} key={val} tag="p">
					{val}
				</Text>
			))}
		</div>
	</div>
);
