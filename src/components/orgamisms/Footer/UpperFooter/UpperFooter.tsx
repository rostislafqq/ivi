import React from 'react';

import { FooterAds } from './FooterAds/FooterAds';
import { FooterSupport } from './FooterSupport/FooterSupport';

import styles from './UpperFooter.module.scss';

import { Menu } from '@/components/molecules';

export const UpperFooter = () => (
	<div className={styles.footerContent}>
		<Menu
			isHorizontal={false}
			linksList={[
				{
					href: 'test',
					text: 'О компании',
					className: styles.menuItem,
				},
				{
					href: 'test1',
					text: 'Вакансии',
					className: styles.menuItem,
				},
				{
					className: styles.menuItem,
					href: 'test2',
					text: 'Программа бета-тестирования',
				},
				{
					className: styles.menuItem,
					href: 'test3',
					text: 'Информация для партнёров',
				},
				{
					className: styles.menuItem,
					href: 'test',
					text: 'Размещение рекламы',
				},
				{
					className: styles.menuItem,
					href: 'test1',
					text: 'Пользовательское соглашение',
				},
				{
					className: styles.menuItem,
					href: 'test2',
					text: 'Политика конфиденциальности',
				},
				{
					className: styles.menuItem,
					href: 'Комплаенс',
					text: 'Информация для партнёров',
				},
			]}
			title="О нас"
		/>
		<Menu
			isHorizontal={false}
			linksList={[
				{ className: styles.menuItem, href: 'test', text: 'Мой Иви' },
				{ className: styles.menuItem, href: 'test1', text: 'Что нового' },
				{ className: styles.menuItem, href: 'test2', text: 'Фильмы' },
				{ className: styles.menuItem, href: 'test3', text: 'Сериалы' },
				{ className: styles.menuItem, href: 'test', text: 'Мультфильмы' },
				{ className: styles.menuItem, href: 'test1', text: 'TV+' },
				{ className: styles.menuItem, href: 'test2', text: 'Что посмотреть' },
				{
					className: `${styles[`menuItem--primary`]} ${styles.menuItem}`,
					href: 'smth',
					text: 'Активация сертификата',
				},
			]}
			title="Разделы"
		/>
		<FooterSupport />
		<FooterAds />
	</div>
);
