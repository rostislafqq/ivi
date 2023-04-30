import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';

import styles from './Notification.module.scss';
import { NotificationProps } from './Notification.types';

import notification from '@assets/icons/notification.svg';
import notificationFull from '@assets/icons/notificationFull.svg';
import { Icon } from '@components/atoms';

export const Notification: React.FC<NotificationProps> = ({ href, count = 0, onMouseOut, onMouseOver }) => (
	<div className={styles.wrapper}>
		{count > 0 ? (
			<Link href={href} className={styles.link} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
				<Icon icon={notificationFull} width={16} className={styles.icon} />
				<span className={styles.counter}>{count}</span>
			</Link>
		) : (
			<Link href={href} className={styles.link}>
				<Icon icon={notification} width={16} className={classNames(styles.icon, styles['icon--empty'])} />
			</Link>
		)}
	</div>
);
