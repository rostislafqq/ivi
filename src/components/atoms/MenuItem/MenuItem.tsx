import cn from 'classnames';
import Link from 'next/link';
import * as React from 'react';

import styles from './MenuItem.module.scss';
import { MenuItemProps } from './MenuItem.types';

export const MenuItem: React.FC<MenuItemProps> = ({ text, href, className, handlerMouseOver }) => {
	const itemsClasses = cn(styles.item, className);

	return (
		<Link href={href} className={itemsClasses} key={href} onMouseOver={handlerMouseOver}>
			{text}
		</Link>
	);
};
