import cn from 'classnames';
import React from 'react';

import type { LoadingBoxProps } from './LoadingBox.types';

import styles from './LoadingBox.module.scss';

export const LoadingBox: React.FC<LoadingBoxProps> = ({ className, width, height, rounded, ...props }) => {
	const loadingClasses = cn(styles.loading, className, {
		[styles['loading--small']]: rounded === 'small',
		[styles['loading--normal']]: rounded === 'normal',
	});

	return <div className={loadingClasses} style={{ width, height }} {...props} />;
};
