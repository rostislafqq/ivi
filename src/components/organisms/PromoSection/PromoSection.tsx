import React from 'react';

import { Section } from '@/components/atoms';
import { BannersSlider } from '@components/molecules';

import type { PromoSectionProps } from './PromoSection.types';

import styles from './PromoSection.module.scss';
import { SubscribeButton } from './SubscribeButton/SubscribeButton';

export const PromoSection: React.FC<PromoSectionProps> = ({ className }) => (
	<Section id="promo-section" className={className}>
		<BannersSlider data-testid="banners-slider" />

		<SubscribeButton className={styles['promo-section__subscribe-btn']} href="/">
			30 дней подписки бесплатно
		</SubscribeButton>
	</Section>
);
