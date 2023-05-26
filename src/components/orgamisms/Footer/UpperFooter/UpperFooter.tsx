import React from 'react';

import { TextLink } from '@/components/atoms';
import { NoAds, Support } from '@/components/molecules';
import { LinkList } from '@/components/molecules/LinkList/LinkList';

import styles from './UpperFooter.module.scss';

export const UpperFooter = () => (
	<div className={styles.footerContent}>
		<LinkList isHorizontal={false} title="О нас">
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				О компании
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Вакансии
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Программа бета-тестирования
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Информация для партнёров
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Размещение рекламы
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Пользовательское соглашение
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Политика конфиденциальности
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Комплаенс
			</TextLink>
		</LinkList>
		<LinkList isHorizontal={false} title="О нас">
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Мой Иви
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Что нового
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Фильмы
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Сериалы
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Мультфильмы
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				TV+
			</TextLink>
			<TextLink className={styles.footerContent__menuItem} href="test" tag="p">
				Что посмотреть
			</TextLink>
			<div className={` ${styles.footerContent__menuItem} ${styles[`footerContent__menuItem--primary`]}`}>
				<TextLink
					className={` ${styles.footerContent__menuItem} ${styles[`footerContent__menuItem--primary`]}`}
					href="test"
					tag="p"
				>
					Активация сертификата
				</TextLink>
			</div>
		</LinkList>
		<Support />
		<NoAds />
	</div>
);
