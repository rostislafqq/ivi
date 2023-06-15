import cn from 'classnames';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setLanguage, selectLanguage, LanguageType } from '@/app/store/language/languageSlice';

import { TextLink, Button } from '@/components/atoms';
import { NavBar, LinkList, Notification, Avatar } from '@/components/molecules';

import { translation } from '../../../../public/locales/translation';

import type { HeaderProps } from './Header.types';

import styles from './Header.module.scss';

type NavbarItemType = {
	id: number;
	label_ru: string;
	label_en: string;
	href: string;
};

const navbarItems: NavbarItemType[] = [
	{
		id: 1,
		label_ru: 'Главная',
		label_en: 'Home',
		href: '/',
	},
	{
		id: 2,
		label_ru: ' Фильмы',
		label_en: 'Films',
		href: '/collections/films',
	},
	{
		id: 3,
		label_ru: 'Сериалы',
		label_en: 'Serials',
		href: '/collections/serials',
	},
	{
		id: 4,
		label_ru: 'Мультфильмы',
		label_en: 'Animations',
		href: '/collections/animations',
	},
];

export const Header: React.FC<HeaderProps> = ({ className, separator }) => {
	const { language } = useAppSelector(selectLanguage);
	const dispatch = useAppDispatch();

	const handleChangeLanguage = useCallback(
		(lang: LanguageType) => {
			dispatch(setLanguage({ language: lang }));
		},
		[dispatch],
	);

	const getNavbarItemByLang = useCallback((lang: LanguageType, item: NavbarItemType) => {
		switch (lang) {
			case 'ru':
				return item.label_ru;
			case 'en':
				return item.label_en;
			default:
				return '';
		}
	}, []);

	return (
		<header className={cn(styles.header, className)}>
			<div className="container">
				<NavBar
					menu={
						<LinkList>
							{navbarItems.map((item) => (
								<TextLink key={item.id} tag="div" href={item.href}>
									{getNavbarItemByLang(language, item)}
								</TextLink>
							))}
						</LinkList>
					}
					actionGroup={
						<>
							<div className={styles.header__languageBox}>
								<Button
									className={styles['header__language-btn']}
									size="small"
									variant={language === 'ru' ? 'primary' : 'secondary'}
									onClick={() => handleChangeLanguage('ru')}
								>
									ru
								</Button>
								<Button
									className={styles['header__language-btn']}
									size="small"
									variant={language === 'en' ? 'primary' : 'secondary'}
									onClick={() => handleChangeLanguage('en')}
								>
									en
								</Button>
							</div>
							<Button
								className={styles['header__subscribe-btn']}
								variant="primary-gradient"
								size="small"
								data-testid="header-subscribeBtn"
							>
								{translation[language].header.buySubscribeBtn}
							</Button>
							<Notification
								className={styles.header__notification}
								count={10}
								data-testid="header-notification"
							/>
							<Avatar className={styles.header__avatar} data-testid="header-avatar" />
						</>
					}
					isSeporator={separator}
				/>
			</div>
		</header>
	);
};
