import cn from 'classnames';
import React from 'react';

import styles from './SliderViewport.module.scss';
import { SliderViewportProps } from './SliderViewport.types';

export const SliderViewport: React.FC<SliderViewportProps> = ({ className, children, ...props }) => {
	const viewportClasses = cn(styles.slider__viewport, className);

	return (
		<div className={viewportClasses} {...props}>
			{children}
		</div>
	);
};
