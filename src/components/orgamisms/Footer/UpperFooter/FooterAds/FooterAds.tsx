/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import styles from './FooterAds.module.scss';

import ads from '@/assets/icons/noAds.svg';
import { Icon, IconButton, Text } from '@/components/atoms';

export const FooterAds = () => (
	<div className={styles.wrapper}>
		<IconButton className={styles.wrapper__iconBtn}>
			<Icon icon={ads} width={56} />
		</IconButton>
		<Text className={styles.wrapper__commonText} tag="p">
			Смотрите фильмы, сериалы и мультфильмы без рекламы
		</Text>
	</div>
);
