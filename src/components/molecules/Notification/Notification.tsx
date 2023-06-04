import cn from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';

import NotificationIcon from '@assets/icons/bell.svg';
import { Icon, Badge } from '@components/atoms';

import styles from './Notification.module.scss';
import { NotificationProps } from './Notification.types';

export const Notification: React.FC<NotificationProps> = ({ className, count = 0, ...props }) => {
	const [hovered, setHovered] = useState(false);
	const getFormattedCount = (cnt: number) => (cnt > 9 ? '9+' : cnt);

	return (
		<Link
			href="/notification"
			className={cn(styles.notification, className)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			{...props}
		>
			<Icon
				className={cn(styles.notification__icon, {
					[styles['notification__icon--animated']]: count > 0,
					[styles['notification__icon--hovered']]: hovered,
				})}
				icon={NotificationIcon}
				width={25}
				height={25}
				data-testid="notification-icon"
			/>

			{count > 0 && (
				<Badge
					className={cn(styles.notification__counter, {
						[styles['notification__counter--many']]: count > 9,
					})}
					size="small"
					bg="red"
					data-testid="notification-counter"
				>
					{getFormattedCount(count)}
				</Badge>
			)}
		</Link>
	);
};
