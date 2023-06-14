import cn from 'classnames';
import React, { useState } from 'react';

import { TextLink, Button } from '@/components/atoms';
import { NavBar, LinkList, Notification, Avatar } from '@/components/molecules';

import type { HeaderProps } from './Header.types';

import styles from './Header.module.scss';

const navbarItems = [
	{
		id: 1,
		label: 'Главная',
		href: '/',
	},
	{
		id: 2,
		label: ' Фильмы',
		href: '/films',
	},
	{
		id: 3,
		label: 'Сериалы',
		href: '/serials',
	},
	{
		id: 4,
		label: 'Мультфильмы',
		href: '/animations',
	},
];

export const Header: React.FC<HeaderProps> = ({ className, language = 'ru', setLang }) => {
	const [active, setActive] = useState(language);

	return (
		<header className={cn(styles.header, className)}>
			<div className="container">
				<NavBar
					menu={
						<LinkList>
							{navbarItems.map((item) => (
								<TextLink key={item.id} tag="div" href={item.href}>
									{item.label}
								</TextLink>
							))}
						</LinkList>
					}
					actionGroup={
						<>
							<div>
								<Button
									className={styles['header__subscribe-btn']}
									size="small"
									variant={active === 'ru' ? 'primary' : 'secondary'}
									onClick={() => {
										setLang('ru');
										setActive('ru');
									}}
								>
									ru
								</Button>
								<Button
									className={styles['header__subscribe-btn']}
									size="small"
									variant={active === 'en' ? 'primary' : 'secondary'}
									onClick={() => {
										setLang('en');
										setActive('en');
									}}
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
								Оплатить подписку
							</Button>
							<Notification
								className={styles.header__notification}
								count={10}
								data-testid="header-notification"
							/>
							<Avatar className={styles.header__avatar} data-testid="header-avatar" />
						</>
					}
				/>
			</div>
		</header>
	);
};
