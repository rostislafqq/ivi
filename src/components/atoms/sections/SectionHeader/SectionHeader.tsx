import cn from 'classnames';
import React from 'react';

import styles from './SectionHeader.module.scss';
import { SectionHeaderProps } from './SectionHeader.types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({ className, children }) => {
	const headerClasses = cn(styles.header, className);

	return <header className={headerClasses}>{children}</header>;
};
