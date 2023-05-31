import cn from 'classnames';
import React from 'react';

import UserIcon from '@assets/icons/user.svg';
import { IconButton, Icon } from '@components/atoms';

import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({ user }) => {
	const getPersonalAccountLink = (userId: number) => `/person/${userId}`;
	const getInitials = (firstName: string, lastName: string) => `${firstName[0]}${lastName[0]}`;

	if (user) {
		return (
			<IconButton
				className={cn(styles.avatar, styles['avatar--auth'])}
				href={getPersonalAccountLink(user.id)}
				size="big"
			>
				<span className={styles.avatar__initials} data-testid="user-initials">
					{getInitials(user.firstName, user.lastName)}
				</span>
			</IconButton>
		);
	}
	return (
		<IconButton className={styles.avatar} href="/" size="big">
			<Icon className={styles.avatar__icon} icon={UserIcon} width={20} height={20} data-testid="user-icon" />
		</IconButton>
	);
};
