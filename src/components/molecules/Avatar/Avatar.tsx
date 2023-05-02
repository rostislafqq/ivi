import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';

import styles from './Avatar.module.scss';

import { AvatarProps } from './Avatar.types';

import user from '@assets/icons/user.svg';
import { Icon } from '@components/atoms';

export const Avatar: React.FC<AvatarProps> = ({ href, isAuth = false, login = '', onMouseOver, onMouseOut }) => {
	const [userName, setUserName] = useState<string>('');

	useEffect(() => {
		if (!login || login?.length === 0) return;
		if (!isAuth) return;
		const name = login[0].toUpperCase();
		setUserName(name);
	}, [isAuth, login, setUserName]);

	return (
		<Link
			className={classNames(styles.wrapper, { [styles['wrapper--auth']]: isAuth && userName.length > 0 })}
			href={href}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
		>
			{isAuth && userName.length > 0 ? (
				<span className={styles.login}>{userName}</span>
			) : (
				<Icon icon={user} width={20} height={20} className={styles.icon} data-testid="icon" />
			)}
		</Link>
	);
};
