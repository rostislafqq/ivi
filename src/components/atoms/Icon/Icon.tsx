import classNames from 'classnames';
import * as React from 'react';

import styles from './icon.module.scss';
import { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = ({ icon, width, height = '100%', className, ...props }) => {
	const iconClasses = classNames(className, styles.icon);

	return (
		<svg viewBox={icon.viewBox} width={width} height={height} className={iconClasses} {...props}>
			<use xlinkHref={`#${icon.id}`} />
		</svg>
	);
};
