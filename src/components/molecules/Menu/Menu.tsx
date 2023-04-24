import cn from 'classnames';
import Link from 'next/link';
import * as React from 'react';

import styles from './Menu.module.scss';
import { MenuProps } from './Menu.types';

import { Heading } from '@components/atoms/Heading/Heading';

export const Menu: React.FC<MenuProps> = ({ linksList, title = '', isHorizontal = true }) => {
	const wrapperClasses = cn(styles.list, { [styles['list--column']]: !isHorizontal });
	const itemsClasses = cn(styles.item, { [styles['item--column']]: !isHorizontal });
	const titleClasses = cn(styles.title, { [styles['title--column']]: !isHorizontal });

	const listItems = linksList.map((item) => (
		<Link href={item.href} className={itemsClasses}>
			{item.text}
		</Link>
	));

	return (
		<div className={wrapperClasses}>
			{title && title.length !== 0 && (
				<Heading tag="h4" className={titleClasses}>
					{title}
				</Heading>
			)}
			{listItems}
		</div>
	);
};
