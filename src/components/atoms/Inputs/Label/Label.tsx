import cn from 'classnames';
import React from 'react';

import styles from './Label.module.scss';

import type { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ className, children, isActive = true }) => {
	const LabelClasses = cn(styles.label, className, {
		// Sizes
		[styles['label--active']]: !isActive,
	});
	return <p className={LabelClasses}>{children}</p>;
};
