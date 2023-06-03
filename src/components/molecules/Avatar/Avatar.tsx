import cn from 'classnames';
import React from 'react';

import UserIcon from '@assets/icons/user.svg';
import { IconButton, Icon } from '@components/atoms';

import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({ className, user, ...props }) => {
	const getPersonalAccountLink = (userId: number) => `/person/${userId}`;
	const getInitials = (firstName: string, lastName: string) => `${firstName[0]} ${lastName[0]}`;

	return (
		<IconButton
			className={cn(styles.avatar, className, {
				[styles['avatar--auth']]: user,
			})}
			href={user ? getPersonalAccountLink(user.id) : '/auth'}
			size="big"
			{...props}
		>
			{user ? (
				<span className={styles.avatar__initials} data-testid="user-initials">
					{getInitials(user.firstName, user.lastName)}
				</span>
			) : (
				<Icon className={styles.avatar__icon} icon={UserIcon} width={20} height={20} data-testid="user-icon" />
			)}
		</IconButton>
	);
};
