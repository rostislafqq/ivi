/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import styles from './NoAds.module.scss';

import ads from '@/assets/icons/noAds.svg';
import { Icon, IconButton, Text } from '@/components/atoms';

export const NoAds: React.FC = () => (
	<div className={styles.noAds}>
		<IconButton className={styles.noAds__btn}>
			<Icon icon={ads} width={56} />
		</IconButton>
		<Text className={styles.noAds__text} tag="p">
			Смотрите фильмы, сериалы и мультфильмы без рекламы
		</Text>
	</div>
);
