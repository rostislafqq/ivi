/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { translation } from '@/../public/locales/translation';

import ads from '@/assets/icons/noAds.svg';
import { Icon, IconButton, Text } from '@/components/atoms';

import styles from './NoAds.module.scss';
import { NoAdsProps } from './NoAds.types';

export const NoAds: React.FC<NoAdsProps> = ({ lang = 'ru' }) => (
	<div className={styles.noAds}>
		<IconButton className={styles.noAds__btn}>
			<Icon icon={ads} width={56} />
		</IconButton>
		<Text className={styles.noAds__text} tag="p">
			{translation[lang].footer.watchFilms}
		</Text>
	</div>
);
