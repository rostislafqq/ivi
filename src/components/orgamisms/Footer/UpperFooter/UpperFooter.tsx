import React from 'react';

import { FooterAds } from './FooterAds/FooterAds';
import { FooterSupport } from './FooterSupport/FooterSupport';

import styles from './UpperFooter.module.scss';

import { LinkList } from '@/components/molecules/LinkList/LinkList';
import { TextLink } from '@/components/atoms';

export const UpperFooter = () => (
	<div className={styles.footerContent}>
		<LinkList isHorizontal={false} title="О нас">
			<React.Fragment key=".0">
				<TextLink className={styles.menuItem} href="test" tag="p">
					О компании
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Вакансии
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Программа бета-тестирования
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Информация для партнёров
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Размещение рекламы
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Пользовательское соглашение
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Политика конфиденциальности
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Комплаенс
				</TextLink>
			</React.Fragment>
		</LinkList>
		<LinkList isHorizontal={false} title="О нас">
			<React.Fragment key=".02123">
				<TextLink className={styles.menuItem} href="test" tag="p">
					Мой Иви
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Что нового
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Фильмы
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Сериалы
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Мультфильмы
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					TV+
				</TextLink>
				<TextLink className={styles.menuItem} href="test" tag="p">
					Что посмотреть
				</TextLink>
				<div className={` ${styles.menuItem} ${styles[`menuItem--primary`]}`}>
					<TextLink className={` ${styles.menuItem} ${styles[`menuItem--primary`]}`} href="test" tag="p">
						Активация сертификата
					</TextLink>
				</div>
			</React.Fragment>
		</LinkList>
		<FooterSupport />
		<FooterAds />
	</div>
);
