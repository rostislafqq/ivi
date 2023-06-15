import cn from 'classnames';
import React from 'react';

import { useAppSelector } from '@/app/hooks';
import { selectLanguage } from '@/app/store/language/languageSlice';

import styles from './Footer.module.scss';

import { LowerFooter } from './LowerFooter/LowerFooter';
import { UpperFooter } from './UpperFooter/UpperFooter';

export const Footer: React.FC = () => {
	const { language } = useAppSelector(selectLanguage);

	return (
		<footer className={cn(styles.footer, 'container')}>
			<UpperFooter lang={language} />
			<LowerFooter lang={language} />
		</footer>
	);
};
