import React from 'react';

import styles from './Footer.module.scss';

import { FooterProps } from './Footer.types';

import { LowerFooter } from './LowerFooter/LowerFooter';
import { UpperFooter } from './UpperFooter/UpperFooter';

export const Footer: React.FC<FooterProps> = ({ lang = 'ru' }) => (
	<footer className={`${styles.footer} container`}>
		<UpperFooter lang={lang} />
		<LowerFooter lang={lang} />
	</footer>
);
