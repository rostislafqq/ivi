import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';

import styles from './NavBar.module.scss';
import { NavBarProps } from './NavBar.types';

import logo from '@assets/icons/Logo.svg';
import { Icon } from '@components/atoms';

export const NavBar: React.FC<NavBarProps> = ({ menu, actionGroup, isSeporator = false }) => {
	const wrapperClasses = classNames('container', styles.wrapper, { [styles['wrapper--borderBottom']]: isSeporator });

	return (
		<div className={wrapperClasses}>
			<Link href="/" className={styles.logo} title="Онлайн-кинотеатр Иви">
				<Icon icon={logo} width={66} />
			</Link>
			<div className={styles.menu}>{menu}</div>
			<div className={styles.actionGroup}>{actionGroup}</div>
		</div>
	);
};
