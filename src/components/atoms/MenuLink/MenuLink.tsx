import Link from 'next/link';
import * as React from 'react';

import styles from './MenuLink.module.scss';
import { MenuLinkProps } from './MenuLink.types.ts';

export const MenuLink: React.FC<MenuLinkProps> = ({ text, href }) => {
	return (
		<li className={styles.item}>
			<Link href={href}>{text}</Link>
		</li>
	);
};
