import cn from 'classnames';
import * as React from 'react';

import { Heading } from '@components/atoms';

import styles from './LinkList.module.scss';
import { LinkListProps } from './LinkList.types';

export const LinkList: React.FC<LinkListProps> = ({ children, title = '', isHorizontal = true }) => {
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
