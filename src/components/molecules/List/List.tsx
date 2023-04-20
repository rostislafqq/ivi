import cn from 'classnames';
import React from 'react';

import styles from './List.module.scss';

import type { ListProps } from './List.types';

export const List: React.FC<ListProps> = ({ className, children, tag }) => {
	const listClasses = cn(styles.list, className);
	switch (tag) {
		case 'ul':
			return <ul className={listClasses}>{children}</ul>;
		case 'ol':
			return <ol className={listClasses}>{children}</ol>;
		default:
			return null;
	}
};
