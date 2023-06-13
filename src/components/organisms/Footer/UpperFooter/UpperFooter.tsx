import React from 'react';

import { translation } from '@/../public/locales/translation';

import { TextLink } from '@/components/atoms';
import { NoAds, Support } from '@/components/molecules';
import { LinkList } from '@/components/molecules/LinkList/LinkList';

import styles from './UpperFooter.module.scss';
import { UpperFooterProps } from './UpperFooter.types';

export const UpperFooter: React.FC<UpperFooterProps> = ({ lang = 'ru' }) => (
	<div className={styles.footerContent}>
		<LinkList isHorizontal={false} title={translation[lang].footer.about}>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.about}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.vacancy}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.program}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.informPartnets}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.ads}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.termsOfUse}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.privPolic}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.compliance}
			</TextLink>
		</LinkList>
		<LinkList isHorizontal={false} title={translation[lang].footer.myIvi}>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.myIvi}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.whatNew}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.films}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.serial}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.cartoon}
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				TV+
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				{translation[lang].footer.toWatch}
			</TextLink>
			<div className={` ${styles.footerContent__menuItem} ${styles[`footerContent__menuItem--primary`]}`}>
				<TextLink
					className={` ${styles.footerContent__menuItem} ${styles[`footerContent__menuItem--primary`]}`}
					href="test"
					tag="p"
				>
					{translation[lang].footer.activation}
				</TextLink>
			</div>
		</LinkList>
		<Support lang={lang} />
		<NoAds lang={lang} />
	</div>
);
