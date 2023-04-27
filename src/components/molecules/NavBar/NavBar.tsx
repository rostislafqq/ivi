import * as React from 'react';
import classNames from 'classnames';
import styles from './NavBar.module.scss';
import { NavBarProps } from './NavBar.types.ts';

import Link from 'next/link';
import { Icon } from '@components/atoms';

import logo from '@assets/icons/Logo.svg';

export const NavBar: React.FC<NavBarProps> = ({ menu, actionGroup }) => {
	const wrapperClasses = classNames('container', styles.wrapper);

	return (
		<div className={wrapperClasses}>
			<Link href={'/'} className={styles.logo} title={'Онлайн-кинотеатр Иви'}>
				<Icon icon={logo} width={48} />
			</Link>
			<div className={styles.menu}>{menu}</div>
			<div className={styles.actionGroup}>{actionGroup}</div>
		</div>
	);
};
