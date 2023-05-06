import cn from 'classnames';
import React from 'react';

import styles from './SliderItem.module.scss';
import { SliderItemProps } from './SliderItem.types';

export const SliderItem: React.FC<SliderItemProps> = ({ className, active, children, ...props }) => {
	const itemClasses = cn(styles.slider__item, className);

	return (
		<div className={itemClasses} data-active={active} data-type="slider-item" {...props}>
			{children}
		</div>
	);
};
