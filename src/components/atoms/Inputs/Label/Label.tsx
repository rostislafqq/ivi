import cn from 'classnames';
import React from 'react';

import type { LabelProps } from './Label.types';

import styles from './Label.module.scss';

export const Label: React.FC<LabelProps> = ({ className, children, isActive = true }) => {
	const LabelClasses = cn(styles.label, className, {
		[styles['label--active']]: !isActive,
	});
	return <p className={LabelClasses}>{children}</p>;
};
