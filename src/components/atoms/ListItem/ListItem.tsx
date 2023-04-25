import cn from 'classnames';
import React from 'react';

import styles from './ListItem.module.scss';

import type { ListItemProps } from './ListItem.types';

export const ListItem: React.FC<ListItemProps> = ({ className, children, type = '' }) => {
	const listItemClasses = cn(styles.list, className, {
		[styles[`list-${type}`]]: !!type,
	});

	return <li className={listItemClasses}>{children}</li>;
};
