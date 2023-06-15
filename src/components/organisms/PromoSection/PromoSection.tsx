import React from 'react';

import { BANNERS } from '@/app/data/banners';
import { useAppSelector } from '@/app/hooks';
import { selectLanguage } from '@/app/store/language/languageSlice';
import { Section } from '@/components/atoms';
import { BannersSlider } from '@components/molecules';

import { translation } from '../../../../public/locales/translation';

import type { PromoSectionProps } from './PromoSection.types';

import styles from './PromoSection.module.scss';
import { SubscribeButton } from './SubscribeButton/SubscribeButton';

export const PromoSection: React.FC<PromoSectionProps> = ({ className }) => {
	const { language } = useAppSelector(selectLanguage);

	return (
		<Section id="promo-section" className={className}>
			<BannersSlider banners={BANNERS} data-testid="banners-slider" />

			<div className="container">
				<SubscribeButton className={styles['promo-section__subscribe-btn']} href="/">
					{translation[language].promoSection.subscribeBtn}
				</SubscribeButton>
			</div>
		</Section>
	);
};
