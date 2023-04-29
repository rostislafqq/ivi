import cn from 'classnames';
import * as React from 'react';

import styles from './Menu.module.scss';
import { MenuProps } from './Menu.types';

import { Heading } from '@components/atoms';

export const Menu: React.FC<MenuProps> = ({ children, title = '', isHorizontal = true }) => {
	const wrapperClasses = cn(styles.list, { [styles['list--column']]: !isHorizontal });
	const titleClasses = cn(styles.title, { [styles['title--column']]: !isHorizontal });

	return (
		<div className={wrapperClasses}>
			{title && title.length !== 0 && (
				<Heading tag="h4" className={titleClasses}>
					{title}
				</Heading>
			)}
			{children}
		</div>
	);
};
