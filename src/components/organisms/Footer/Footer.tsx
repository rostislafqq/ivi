import React from 'react';

import styles from './Footer.module.scss';

import { LowerFooter } from './LowerFooter/LowerFooter';
import { UpperFooter } from './UpperFooter/UpperFooter';

export const Footer: React.FC = () => (
	<footer className={`${styles.footer} container`}>
		<UpperFooter />
		<LowerFooter />
	</footer>
);
